from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Vacancy, Company
# Create your views here.
def companies_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe=False, json_dumps_params={'indent': 2})

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        return JsonResponse(company.to_json(), json_dumps_params={'indent': 2})
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
    
def company_vacancies(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        vacancies = company.vacancy_set.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent': 2})
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)
