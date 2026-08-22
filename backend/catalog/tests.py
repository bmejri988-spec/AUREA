from django.core.management import call_command
from django.test import TestCase
from rest_framework.test import APIClient

from .models import ChaletModel, ModelOption, Option, Terrain


class CatalogApiTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        call_command('seed_catalog', verbosity=0)

    def setUp(self):
        self.client = APIClient()

    def test_catalog_collections_match_seed(self):
        self.assertEqual(ChaletModel.objects.count(), 3)
        self.assertEqual(Terrain.objects.count(), 4)
        self.assertEqual(Option.objects.count(), 12)
        self.assertGreater(ModelOption.objects.count(), 0)

    def test_terrain_endpoint_returns_frontend_shape(self):
        response = self.client.get('/api/catalog/terrains/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()[0]['id'], 'ain-draham')
        self.assertIn('surfaceArea', response.json()[0])
        self.assertIn('categoryLabel', response.json()[0])

    def test_model_option_relation_is_available(self):
        response = self.client.get('/api/catalog/model-options/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('modelId', response.json()[0])
        self.assertIn('optionId', response.json()[0])

    def test_all_catalog_collections_are_available(self):
        for resource in ('models', 'options', 'option-categories', 'terrain-categories'):
            with self.subTest(resource=resource):
                response = self.client.get(f'/api/catalog/{resource}/')
                self.assertEqual(response.status_code, 200)
