from django.urls import path
from . import views

urlpatterns=[
    
    # path('save/', views.save_data, name= "save-data"),
    # path('downloal/', views.download_post , name="download-post")
    path('fetch/' , views.fetch_instagram_post , name="fetch-instagram-post")
]