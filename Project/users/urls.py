from django.urls import path
from users import views

urlpatterns = [
    path("register/", views.register),
    path("login/", views.user_login),
    path("logout/", views.exit),
    
]
