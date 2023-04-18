import json

from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.shortcuts import render

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_serialized = CompanySerializer(companies, many=True)
        return JsonResponse(companies_serialized.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(name=data.get('name',''), description=data.get('description', ''),
                                         city=data.get('city', ''), address=data.get('address', ''))
        return JsonResponse(company.to_json(), safe=False)
