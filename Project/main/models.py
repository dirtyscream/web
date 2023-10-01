from django.db import models
from django.contrib.auth.models import User


class Software(models.Model):
    name = models.TextField()
    text = models.TextField()
    # image = models.ImageField(upload_to='static/database_image/')

# creating the model of Order and messages to us


class Order(models.Model):
    name = models.TextField()
    email = models.EmailField()
    message = models.TextField()

# creation the model of Sale


class Sale(models.Model):
    name = models.TextField()
    email = models.EmailField()
    product = models.ForeignKey(Software, on_delete=models.CASCADE)

# creating the model of Reviews


class Reviews(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    upload = models.DateTimeField(auto_now=True)
    id_of_soft = models.ForeignKey(Software, on_delete=models.CASCADE)
