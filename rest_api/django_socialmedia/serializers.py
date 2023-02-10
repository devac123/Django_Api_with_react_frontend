from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import Post
        
class PostsSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields ='__all__'