from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import InstagramPost
from .serializers import InstagramPostSerializer
import instaloader
import requests
from django.core.files.base import ContentFile

@api_view(['GET'])
def fetch_instagram_post(request):
    url = request.GET.get('post_url')
    if not url:
        return Response({"error": "No URL provided."}, status=status.HTTP_400_BAD_REQUEST)
    
    loader = instaloader.Instaloader()
    shortcode = url.split("/")[-2]
    
    try:
        post = instaloader.Post.from_shortcode(loader.context, shortcode)
        profile = post.owner_profile

        # Check if post already exists in the database
        if not InstagramPost.objects.filter(owner_username=profile.username, post_date=post.date_utc).exists():
            # Download and save the owner's profile picture
            profile_pic_response = requests.get(profile.profile_pic_url)
            owner_profile_pic_name = f"{profile.username}_profile.jpg"
            owner_profile_pic = ContentFile(profile_pic_response.content, owner_profile_pic_name)

            # Download and save the post image or video
            if post.is_video:
                media_response = requests.get(post.video_url)
                media_name = f"{profile.username}_{shortcode}.mp4"
                media_file = ContentFile(media_response.content, media_name)
                new_post = InstagramPost(
                    owner_username=profile.username,
                    owner_full_name=profile.full_name,
                    owner_profile_pic=owner_profile_pic,
                    # caption=post.caption,
                    post_date=post.date_utc,
                    post_video=media_file,
                    # likes=f"{post.likes:,}",
                    # comments=f"{post.comments:,}"
                )
            else:
                media_response = requests.get(post.url)
                media_name = f"{profile.username}_{shortcode}.jpg"
                media_file = ContentFile(media_response.content, media_name)
                new_post = InstagramPost(
                    owner_username=profile.username,
                    owner_full_name=profile.full_name,
                    owner_profile_pic=owner_profile_pic,
                    # caption=post.caption,
                    post_date=post.date_utc,
                    post_image=media_file,
                    # likes=f"{post.likes:,}",
                    # comments=f"{post.comments:,}"
                )
            
            new_post.save()
        else:
            new_post = InstagramPost.objects.get(owner_username=profile.username, post_date=post.date_utc)

        serializer = InstagramPostSerializer(new_post)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)