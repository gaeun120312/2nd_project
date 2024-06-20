# myapp/views.py
import json
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
        #콜렉션 생성시  metadata={"hnsw:space": "cosine"} 를
        #인자로 넣지않아 거리함수의 기본은 Squared L2로
        #유클리드의 제곱을 사용한다.
        #제곱 L2 거리는 제곱근 계산이 필요 없기 때문에 계산이 더 효율적. 
        #특히 거리 비교가 주된 작업인 경우, 제곱 L2 거리를 사용하면 계산 속도를 높일 수 있다.
        results = collection.query(
            query_embeddings=query_embedding.tolist(),
            n_results=4  # 반환할 결과의 수
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
        j_list = json.dumps(sorted_results_list)
        return render(request, 'main/search.html', {'items': sorted_results_list, 'j_list': j_list})