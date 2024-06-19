# myapp/views.py
from django.shortcuts import render
from .chromadb_config import get_chromadb_client,embed_text


def index(request):
    client = get_chromadb_client()
    collection = client.get_or_create_collection("liquor_collection")
    doc = collection.get()
    return render(request, 'main/index.html', {'items': doc['metadatas']})
def search(request):
     if request.method == 'POST':
        text = request.POST.get('sentence')
        print(text)
        query_embedding =embed_text(text)
        client = get_chromadb_client()
        collection = client.get_or_create_collection("liquor_collection")
        results = collection.query(
        query_embeddings=query_embedding.tolist(),
        n_results=5  # 반환할 결과의 수
        )
        #print(results)
        result =results['metadatas']
        # distances와 같은 인덱스에 있는 ids와 metadatas를 내림차순으로 정렬
        sorted_indices = sorted(range(len(results['distances'][0])), key=lambda i: results['distances'][0][i], reverse=True)
        # 정렬된 결과 리스트 생성
        sorted_results_list = [
            {
                'id': results['ids'][0][i],
                'distance': results['distances'][0][i],
                'metadata': results['metadatas'][0][i]
            }
            for i in sorted_indices
        ]

        # 정렬된 결과 리스트 출력/리스트로
        print(sorted_results_list)
        return render(request, 'main/search.html', {'items': sorted_results_list})