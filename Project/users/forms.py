from django import forms
from django.contrib.auth.models import User
from django.contrib.auth import password_validation


class UserRegisterForm(forms.ModelForm):
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={'placeholder': 'Введите email'})
    )
    username = forms.CharField(
        max_length=40,
        widget=forms.TextInput(attrs={'placeholder': 'Введите логин'})
    )
    password1 = forms.CharField(
        strip=False,
        widget=forms.PasswordInput(
            attrs={"autocomplete": "new-password", 'placeholder': 'Введите пароль'}),
        help_text=password_validation.password_validators_help_text_html(),
    )
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={"autocomplete": "new-password", 'placeholder': 'Повторите пароль'}),
        strip=False,
        help_text=("Enter the same password as before, for verification."),
    )

    def save(self, commit=True): # creating the method that will save our data to database
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
            if hasattr(self, "save_m2m"):
                self.save_m2m()
        return user

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class LoginForm(forms.Form):
    email = forms.EmailField(widget=forms.TextInput(
        attrs={'placeholder': 'Введите email'}))
    username = forms.CharField(max_length=232, widget=forms.TextInput(
        attrs={'placeholder': 'Введите логин'}))
    password1 = forms.CharField(max_length=32, widget=forms.PasswordInput(
        attrs={'placeholder': 'Введите пароль'}))

    class Meta:
        model = User
