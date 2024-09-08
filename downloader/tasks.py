# from celery import shared_task
# import instaloader
# import requests
# from django.core.files.base import ContentFile
# from .models import InstagramPost
# from .serializers import InstagramPostSerializer
# import logging

# logger = logging.getLogger(__name__)

# @shared_task
# def fetch_and_save_instagram_post(url):
#     try:
#         loader = instaloader.Instaloader()
#         shortcode = url.split("/")[-2]
#         post = instaloader.Post.from_shortcode(loader.context, shortcode)
#         profile = post.owner_profile

#         if not InstagramPost.objects.filter(owner_username=profile.username, post_date=post.date_utc).exists():
#             profile_pic_response = requests.get(profile.profile_pic_url)
#             owner_profile_pic_name = f"{profile.username}_profile.jpg"
#             owner_profile_pic = ContentFile(profile_pic_response.content, owner_profile_pic_name)

#             if post.is_video:
#                 media_response = requests.get(post.video_url)
#                 media_name = f"{profile.username}_{shortcode}.mp4"
#                 media_file = ContentFile(media_response.content, media_name)
#                 new_post = InstagramPost(
#                     owner_username=profile.username,
#                     owner_full_name=profile.full_name,
#                     owner_profile_pic=owner_profile_pic,
#                     caption=post.caption,
#                     post_date=post.date_utc,
#                     post_video=media_file,
#                     likes=f"{post.likes:,}",
#                     comments=f"{post.comments:,}"
#                 )
#             else:
#                 media_response = requests.get(post.url)
#                 media_name = f"{profile.username}_{shortcode}.jpg"
#                 media_file = ContentFile(media_response.content, media_name)
#                 new_post = InstagramPost(
#                     owner_username=profile.username,
#                     owner_full_name=profile.full_name,
#                     owner_profile_pic=owner_profile_pic,
#                     caption=post.caption,
#                     post_date=post.date_utc,
#                     post_image=media_file,
#                     likes=f"{post.likes:,}",
#                     comments=f"{post.comments:,}"
#                 )
            
#             new_post.save()
            
#         else:
#             new_post = InstagramPost.objects.get(owner_username=profile.username, post_date=post.date_utc)
            
#         serializer = InstagramPostSerializer(new_post)
#         print(serializer.data)
#         return serializer.data

#     except Exception as e:
#         logger.error(f"Error fetching and saving Instagram post: {e}")
#         print(e)
#         return {'error': str(e)}
