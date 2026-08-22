from django.contrib import admin

from .models import ChaletModel, ModelOption, Option, OptionCategory, Terrain, TerrainCategory

admin.site.register((ChaletModel, Terrain, TerrainCategory, Option, OptionCategory, ModelOption))
