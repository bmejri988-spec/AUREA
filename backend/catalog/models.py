from django.db import models


class OptionCategory(models.Model):
    slug = models.SlugField(primary_key=True, max_length=50)
    title = models.CharField(max_length=100)
    description = models.TextField()

    class Meta:
        ordering = ('title',)

    def __str__(self):
        return self.title


class TerrainCategory(models.Model):
    slug = models.SlugField(primary_key=True, max_length=50)
    label = models.CharField(max_length=100)

    class Meta:
        ordering = ('label',)

    def __str__(self):
        return self.label


class ChaletModel(models.Model):
    slug = models.SlugField(primary_key=True, max_length=100)
    name = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=255)
    category = models.CharField(max_length=100)
    surface_area = models.PositiveIntegerField()
    surface_unit = models.CharField(max_length=10, default='m²')
    bedrooms = models.PositiveSmallIntegerField()
    bathrooms = models.PositiveSmallIntegerField()
    max_guests = models.PositiveSmallIntegerField()
    base_price = models.PositiveIntegerField()
    description = models.TextField()
    image = models.URLField(max_length=500)
    gallery = models.JSONField(default=list)
    features = models.JSONField(default=list)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name


class Terrain(models.Model):
    slug = models.SlugField(primary_key=True, max_length=100)
    name = models.CharField(max_length=100)
    region = models.CharField(max_length=150)
    category = models.ForeignKey(TerrainCategory, on_delete=models.PROTECT, related_name='terrains')
    country = models.CharField(max_length=100)
    description = models.TextField()
    surface_area = models.PositiveIntegerField()
    surface_unit = models.CharField(max_length=10, default='m²')
    base_price = models.PositiveIntegerField()
    image = models.URLField(max_length=500)
    gallery = models.JSONField(default=list)
    features = models.JSONField(default=list)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name


class Option(models.Model):
    slug = models.SlugField(primary_key=True, max_length=100)
    name = models.CharField(max_length=150)
    category = models.ForeignKey(OptionCategory, on_delete=models.PROTECT, related_name='options')
    short_description = models.TextField()
    description = models.TextField()
    price = models.PositiveIntegerField()
    image = models.URLField(max_length=500)
    popular = models.BooleanField(default=False)
    compatible_models = models.ManyToManyField(ChaletModel, through='ModelOption', related_name='options')

    class Meta:
        ordering = ('category_id', 'name')

    def __str__(self):
        return self.name


class ModelOption(models.Model):
    model = models.ForeignKey(ChaletModel, on_delete=models.CASCADE)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=('model', 'option'), name='unique_model_option'),
        ]
        ordering = ('model_id', 'option_id')
