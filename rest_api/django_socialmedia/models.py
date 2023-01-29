from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now


# Create your models here.
class Post(models.Model):
    postId = models.AutoField(primary_key=True)
    pub_date = models.DateField(default = now)
    description = models.TextField(max_length=500)
    auther = models.ForeignKey(User,default=None, on_delete=models.CASCADE)
    # post_img = models.ImageField(upload_to="profile/img",default="",null = True,blank=True )
    # post_video = models.FileField(upload_to="profile/video",default="",null=True,blank=True)
    # likes = models.ManyToManyField(Profile,related_name="Post_like",blank=True )

    def __str__(self):
        return str(self.postId)