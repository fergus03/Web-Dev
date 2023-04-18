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

@csrf_exempt
def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if request.method == 'GET':
        return JsonResponse(company.to_json(), safe=False)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data.get('name', company.name)
        company.description = data.get('description', company.description)
        company.city = data.get('city', company.city)
        company.address = data.get('address', company.address)
        company.save()
        return JsonResponse(company.to_json(), safe=False)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})

 def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
        vacancies = Vacancy.objects.filter(company=company)
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
