from django.db import models

class InstagramPost(models.Model):
    owner_username= models.CharField(max_length=50)
    owner_full_name = models.CharField(max_length=100)
    owner_profile_pic = models.ImageField(upload_to='owner_profile/')
    # caption = models.TextField(null=True, blank=True)
    post_date = models.DateTimeField()
    post_image = models.ImageField(upload_to='post_images/', null=True, blank=True)
    post_video = models.FileField(upload_to='post_videos/', null=True, blank=True)
    # likes = models.CharField(max_length=50)
    # comments = models.CharField(max_length=50)

    def __str__(self) :
        return f"{self.owner_full_name}-{self.post_date}"
