from django.db import models

# Create your models here.
class Weather(models.Model):
    weather = models.CharField(max_length = 100)
