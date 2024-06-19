# myapp/chromadb_config.py
import chromadb
from sentence_transformers import SentenceTransformer

def get_chromadb_client():
    client = chromadb.PersistentClient(
        path="db/chroma.db"# 프로젝트 디렉토리 내에 db 폴더를 생성하고 chroma.db 파일로 저장
    )
    return client


def embed_text(text):
    model = SentenceTransformer("jhgan/ko-sroberta-multitask")
    embedding = model.encode(text)
    return embedding
