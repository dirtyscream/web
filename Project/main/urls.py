from django.urls import path
from main import views

urlpatterns = [
    path("index/", views.index),
    path("order/", views.order),
    path("search/", views.search),
    path("software/<int:id>", views.view_search),
    # path("soft_data/<int:obj_id>", views.responsejson),
]
