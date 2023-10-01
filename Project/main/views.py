from django.shortcuts import render, redirect
import smtplib
from django.contrib.auth.decorators import login_required
from .models import Order
from .models import Software
from .models import Reviews
from django.db.models import Q
from django.http import JsonResponse
from django.core.serializers import serialize
import json


def index(request):
    return render(request, 'index.html')


def search(request):
    if request.method == 'GET':
        data = request.GET.get('search')  # get the data from the form
        # search the software in database accroding the data
        soft = Software.objects.get(Q(name__istartswith=data.strip()))
        # redirect to url with the id of the software
        return redirect(f"/software/{soft.id}")
    else:
        return redirect("/index")


def view_search(request, id):
    soft = Software.objects.filter(Q(id=id))
    review = Reviews.objects.filter(Q(id_of_soft=id))
    if request.method == 'POST':
        new_review = Reviews(username=request.user, text=request.POST.get('review_text'),
                             id_of_soft_id=id)
        new_review.save()
        redirect(f"/search/{id}")
    return render(request, 'search.html', {"soft": soft, "reviews": review})


@login_required()
def order(request):
    if request.method == 'POST':
        data = Order()  # create the object with the class Order
        data.name = request.POST.get('name')
        data.email = request.POST.get('email')
        data.message = request.POST.get('text')  # get the data
        data.save()  # save data
        # configure the gmail server
        smtp_object = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        smtp_object.login('justnottouch@gmail.com', 'ovgkhiuiagefnpiy')
        smtp_object.sendmail("justnottouch@gmail.com", str(data.email),
                             "We have got your request, please wait the answer from the company")
        return redirect("/index/")
    else:
        return render(request, 'order.html')
