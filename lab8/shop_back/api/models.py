from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=500)
    def to_json(self):
        return{
            'id': self.id,
            'name': self.name
        }
class Product(models.Model):
    name = models.CharField(max_length=355)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }

