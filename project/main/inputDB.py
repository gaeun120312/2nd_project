from chromadb_config import get_chromadb_client, embed_text
import os
from ulid import ULID
import pandas as pd
import csv

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
client = get_chromadb_client()
csv_file_path = os.path.join(BASE_DIR, 'main', 'data', 'traditional_liquor.csv')
data_df = pd.read_csv(csv_file_path,encoding='EUC_KR')
for idx,row in data_df.iterrows():
    metadata ={
        'item': row['제품명'],
        'price': row['가격'],
        'category': row['주종'],
        'company': row['제조사'],
        'volume': row['용량'],
        'alcohol': row['도수%'],
        'material': row['원재료'],
        'address' : row['주소'],
        'keyword' : row['keyword'],
        'sweet' :row['단맛'],
        'sour' :row['신맛'], 
        'freshness' :row['청량감'],
        'sparkling' : row['탄산'],
        'body' :row['바디감']
                
    }
    tasty=""
    if row['단맛']!=0:
        tasty=tasty+"단맛 "
    if row['신맛']!=0:
        tasty=tasty+"신맛 "
    if row['청량감']!=0:
        tasty=tasty+"청량감 "
    if row['탄산']!=0:
        tasty=tasty+"탄산 "
    if row['바디감']!=0:
        tasty=tasty+"바디감 "
    text =str(row['가격'])+"원 "+row['주종']+" "+str(row['용량'])+" "+str(row['도수%'])+"% "+row['keyword']+tasty
    embedding = embed_text(text)
    client.get_or_create_collection("liquor_collection").add(
        ids=[str(idx)] ,
        embeddings=[embedding.tolist()],
        metadatas=[metadata]
        )
    print(idx)


    # embedding = embed_text(text)
    # _ulid = ULID()
    
    # client.get_or_create_collection("text_collection").add(
    #     ids=[f"{_ulid.generate()}"], 
    #     embeddings=[embedding.tolist()],
    #     metadatas=[{'text': text}])





