# myapp/views.py
from django.shortcuts import render
from .chromadb_config import get_chromadb_client


def index(request):
    client = get_chromadb_client()
    collection = client.get_or_create_collection("liquor_collection")
    doc = collection.get()
    return render(request, 'main/index.html', {'items': doc['metadatas']})
