from django.shortcuts import render,HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Post
from .serializers import PostsSerializer
from django.contrib.auth.models import User




@api_view(['POST'])
def createpost(req):
          postDesc = req.data['description'];
          userId = req.data['auther']
          postAuther = User.objects.get(id = userId)
          postObect = Post.objects.create(description = postDesc, auther= postAuther )
          postObect.save()
          Posts =      PostsSerializer(Post.objects.all(), many = True)
          return Response(Posts.data)
