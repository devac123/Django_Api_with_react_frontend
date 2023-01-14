from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.core import serializers
from .serializers import UserSerilizer

@api_view(['POST'])
def createusser(req):
    print(req)
    username = req.data['username']
    email = req.data['email']
    password = req.data['password']
    User.objects.create_user(username=username,email=email,password=password)
    serializer = UserSerilizer( User.objects.get(username=username),many = False)
    return Response(serializer.data)


@api_view(['POST'])
def Userlogin(req):
    username = req.data['username']
    password = req.data["password"]
    user = authenticate(username = username, password = password)
    response = {"Message":"True"}
    if user is not None:
        login(req, user)
    else:
        response = {"Message":"Wrong Credentials"}    
    return Response(response)