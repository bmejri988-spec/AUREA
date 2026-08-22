from rest_framework import generics

from .models import ChaletModel, ModelOption, Option, OptionCategory, Terrain, TerrainCategory
from .serializers import (
    ChaletModelSerializer,
    ModelOptionSerializer,
    OptionCategorySerializer,
    OptionSerializer,
    TerrainCategorySerializer,
    TerrainSerializer,
)


class ChaletModelListView(generics.ListAPIView):
    queryset = ChaletModel.objects.all()
    serializer_class = ChaletModelSerializer


class ChaletModelDetailView(generics.RetrieveAPIView):
    queryset = ChaletModel.objects.all()
    serializer_class = ChaletModelSerializer
    lookup_field = 'slug'


class TerrainListView(generics.ListAPIView):
    queryset = Terrain.objects.select_related('category').all()
    serializer_class = TerrainSerializer


class TerrainDetailView(generics.RetrieveAPIView):
    queryset = Terrain.objects.select_related('category').all()
    serializer_class = TerrainSerializer
    lookup_field = 'slug'


class OptionListView(generics.ListAPIView):
    queryset = Option.objects.select_related('category').all()
    serializer_class = OptionSerializer


class OptionCategoryListView(generics.ListAPIView):
    queryset = OptionCategory.objects.all()
    serializer_class = OptionCategorySerializer


class TerrainCategoryListView(generics.ListAPIView):
    queryset = TerrainCategory.objects.all()
    serializer_class = TerrainCategorySerializer


class ModelOptionListView(generics.ListAPIView):
    queryset = ModelOption.objects.all()
    serializer_class = ModelOptionSerializer
