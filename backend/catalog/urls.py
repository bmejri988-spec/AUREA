from django.urls import path

from .views import (
    ChaletModelDetailView,
    ChaletModelListView,
    ModelOptionListView,
    OptionCategoryListView,
    OptionListView,
    TerrainCategoryListView,
    TerrainDetailView,
    TerrainListView,
)

urlpatterns = [
    path('models/', ChaletModelListView.as_view(), name='model-list'),
    path('models/<slug:slug>/', ChaletModelDetailView.as_view(), name='model-detail'),
    path('terrains/', TerrainListView.as_view(), name='terrain-list'),
    path('terrains/<slug:slug>/', TerrainDetailView.as_view(), name='terrain-detail'),
    path('options/', OptionListView.as_view(), name='option-list'),
    path('option-categories/', OptionCategoryListView.as_view(), name='option-category-list'),
    path('terrain-categories/', TerrainCategoryListView.as_view(), name='terrain-category-list'),
    path('model-options/', ModelOptionListView.as_view(), name='model-option-list'),
]
