from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category
# Create your views here.
def products_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False, json_dumps_params={'indent':2})


