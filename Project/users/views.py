from django.contrib.auth import login, authenticate, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import LoginForm
from .forms import UserRegisterForm
from django.contrib.auth.models import User


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)  # creating form
        if form.is_valid():  # check the form
            cd = form.cleaned_data  # get data from the form
            email = cd['email'] # get the email
            check = User.objects.filter(email=email).exists()
            if check:
                return HttpResponse("This email address is already in use.") # check the email in database
            else:
                form.save()
                return redirect("/user/login/")
    else:
        form = UserRegisterForm()
        return render(request, "register.html", {'form': form})


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data # get data from the form
            user = authenticate(username=cd['username'], password=cd['password1'], email=cd['email']) # authenticate the person
            if user is not None:
                if user.is_active:
                    login(request, user)
                    response = redirect("/index")
                    return response
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('User is not found')
    else:
        form = LoginForm()
        return render(request, 'login.html', {'form': form})


def exit(request):
    logout(request)
    return redirect("/index")
