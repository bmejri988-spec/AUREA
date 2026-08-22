from rest_framework import serializers

from .models import ChaletModel, ModelOption, Option, OptionCategory, Terrain, TerrainCategory


class OptionCategorySerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug', read_only=True)

    class Meta:
        model = OptionCategory
        fields = ('id', 'title', 'description')


class TerrainCategorySerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug', read_only=True)

    class Meta:
        model = TerrainCategory
        fields = ('id', 'label')


class ChaletModelSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug', read_only=True)
    surfaceArea = serializers.IntegerField(source='surface_area', read_only=True)
    surfaceUnit = serializers.CharField(source='surface_unit', read_only=True)
    basePrice = serializers.IntegerField(source='base_price', read_only=True)
    maxGuests = serializers.IntegerField(source='max_guests', read_only=True)

    class Meta:
        model = ChaletModel
        fields = ('id', 'name', 'subtitle', 'category', 'surfaceArea', 'surfaceUnit', 'bedrooms', 'bathrooms', 'maxGuests', 'basePrice', 'description', 'image', 'gallery', 'features')


class TerrainSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug', read_only=True)
    category = serializers.CharField(source='category_id', read_only=True)
    categoryLabel = serializers.CharField(source='category.label', read_only=True)
    surfaceArea = serializers.IntegerField(source='surface_area', read_only=True)
    surfaceUnit = serializers.CharField(source='surface_unit', read_only=True)
    basePrice = serializers.IntegerField(source='base_price', read_only=True)

    class Meta:
        model = Terrain
        fields = ('id', 'name', 'region', 'category', 'categoryLabel', 'country', 'description', 'surfaceArea', 'surfaceUnit', 'basePrice', 'image', 'gallery', 'features')


class OptionSerializer(serializers.ModelSerializer):
    id = serializers.CharField(source='slug', read_only=True)
    category = serializers.CharField(source='category_id', read_only=True)
    shortDescription = serializers.CharField(source='short_description', read_only=True)

    class Meta:
        model = Option
        fields = ('id', 'name', 'category', 'shortDescription', 'description', 'price', 'image', 'popular')


class ModelOptionSerializer(serializers.ModelSerializer):
    modelId = serializers.CharField(source='model_id', read_only=True)
    optionId = serializers.CharField(source='option_id', read_only=True)

    class Meta:
        model = ModelOption
        fields = ('modelId', 'optionId')
