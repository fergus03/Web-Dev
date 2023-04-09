from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Vacancy, Company
# Create your views here.
def companies_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False, json_dumps_params={'indent': 2})
