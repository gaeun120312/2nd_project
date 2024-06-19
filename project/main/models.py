# myapp/models.py
from django.db import models

class MyTextModel(models.Model):
    text = models.TextField()

    def __str__(self):
        return self.text[:50]
