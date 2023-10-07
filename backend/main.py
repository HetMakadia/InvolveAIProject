# # 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
#
# from fastapi import FastAPI, File, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# from langchain.document_loaders import PyPDFLoader
# from langchain.indexes import VectorstoreIndexCreator
# from pydantic import BaseModel
# import os
#
#
# OPENAI_API_KEY="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"
# os.environ["OPENAI_API_KEY"]=OPENAI_API_KEY
#
# # loader=PyPDFLoader('')
# # index=VectorstoreIndexCreator().from_loaders([loader])
#
# app = FastAPI()
#
# app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
# class Item(BaseModel):
#     query: str
#     pdf_url: str
#
# @app.get("/")
# def read_root():
#     return {"Hello": "World"}
#
#
#
# # def answer_query(item:Item):
# #     try:
# #         loader = PyPDFLoader(item.file.filename)
# #         response=index.query(item.query)
# #         return response
# #     except:
# #         return {"message":"error happened"}
# @app.post('/')
# def answer_query(item: Item):
#     try:
#         # Download the PDF from the provided URL
#         response = requests.get(item.pdf_url)
#         if response.status_code != 200:
#             raise HTTPException(status_code=400, detail="Failed to download PDF")
#
#         # Save the downloaded PDF locally
#         with open('downloaded_pdf.pdf', 'wb') as f:
#             f.write(response.content)
#
#         # Use PyPDFLoader with the downloaded PDF
#         loader = PyPDFLoader('./downloaded_pdf.pdf')
#         index = VectorstoreIndexCreator().from_loaders([loader])
#
#         # Perform the query
#         response = index.query(item.query)
#
#         # Clean up downloaded PDF file (optional)
#         os.remove('downloaded_pdf.pdf')
#
#         return response
#     except Exception as e:
#         return {"message": f"Error happened: {str(e)}"}
#
#
#
# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from langchain.document_loaders import PyPDFLoader
# from langchain.indexes import VectorstoreIndexCreator
# from pydantic import BaseModel
# import os
#
# OPENAI_API_KEY="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"
# os.environ["OPENAI_API_KEY"]=OPENAI_API_KEY
#
# app = FastAPI()
#
# app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
# class Item(BaseModel):
#     query:str
#
# @app.get("/")
# def read_root(item:Item):
#     return {item.query}
#
# @app.post('/')
# def answer_query(item:Item):
#     try:
#         loader=PyPDFLoader(item.query)
#         index=VectorstoreIndexCreator().from_loaders([loader])
#         response=index.query(item.query)
#         return response
#     except:
#         return {"message":"error happend"}
#


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain.document_loaders import PyPDFLoader
from langchain.indexes import VectorstoreIndexCreator
from pydantic import BaseModel
import os
# import requests
# import fitz
# import PyPDF2
from flask import Flask, request

OPENAI_API_KEY="OPENAI_API_KEY"
os.environ["OPENAI_API_KEY"]=OPENAI_API_KEY

app = FastAPI()



app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])
class Item(BaseModel):
    query:str
    file:str

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post('/')
def answer_query(item:Item):

    try:
#         # Define the URL of the PDF file
#         pdf_url = item.file
#
#         # Download the PDF file
#         res = requests.get(pdf_url)
#         pdf_data = res.content
#
#         pdf_file = PyPDF2.PdfFileReader(io.BytesIO(pdf_data))
#
#         num_pages = pdf_file.getNumPages()
#
#         for page_number in range(num_pages):
#             page = pdf_file.getPage(page_number)
#             page_text = page.extractText()
#             print(f"Page {page_number + 1}:\n{page_text}\n")

        uploaded_file = request.files['file']
        loader=PyPDFLoader(uploaded_file)
        index=VectorstoreIndexCreator().from_loaders([loader])

        response=index.query(item.query)
        return response


    except:
        return {"message":"error"}