from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages
import json
import urllib.request



# Create your views here.

def index(request):

    return render(request, "index.html")

def city(request):

    if request.method == "POST":

        city = request.POST["city"]

        main_url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=6f8d792ce0c49d18fc940999a699ea70"

        url = main_url.replace(" ", "+")

        response = urllib.request.urlopen(url).read()

        json_data = json.loads(response)

        data = {

            "country":str(json_data["sys"]["country"]),

            "coordinate":str(round(json_data["coord"]["lon"])) + " , "  +  

            str(json_data["coord"]["lat"]),

            "condition":str(json_data["weather"][0]["main"]),

            "temp":str((round(json_data["main"]["temp"]) - 273)) + "°C",

            "pressure":str(json_data["main"]["pressure"]) + "Pa",

            "humidity":str(json_data["main"]["humidity"]) + "%",

        }

    else:

        city = ""

        data = {}
        
    return render(request, "city.html", {"city":city, "data":data})
