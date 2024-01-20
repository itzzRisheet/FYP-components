from flask import Flask, request
# from flask_wtf.csrf import CSRFProtect
import os
import google.generativeai as genai
from flask_cors import CORS , cross_origin

app = Flask(__name__)
cors = CORS(app)

app.secret_key = "3VbxkWHqlSZ67j4aPCi5kN9C7Ogbj4e1"
# csrf = CSRFProtect(app)

chat_history=[]

GOOGLE_API_KEY=os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

system_prompt="""consider this as System Instructions : 
               You are an Helpful study assistant to help students. Your name is Risheet Sir. Your role is as Mentor for student. You will provide guidence based on your knowledge.
               Follow given instructions one by one :
               1. First ask about his name, college or school and field of study
               2. Based on user's provided details ask them what is their query
               3. Provide answer based on your knowledge in breif and simple word
               4. Try to prvoide answers that motivate students by taking any celebrity example if possible
               5. Provide answers with emojis if possible
               6. In case if you don't know answer tell them to contact this persons : 
                        - RonaldoFAN
                        - GAPS
               
               Provide all responses in as short as possible, don't try to make up any conversation

               User : Hi
               Assistant : 
               """

@app.route('/')
def index():
    return "Hello from Gemini Chat App"

@app.route('/start')
@cross_origin()
def start_chat():
    global chat_history,chat
    chat_history.clear()
    try:
        response = chat.send_message(system_prompt)
        return response.text
    except:
        return "An Error occured! try after some time"

@app.route('/chat')
@cross_origin()
def chat_with_assistant():
    global chat_history,chat
    query=request.args.get('query').strip()
    if query:
        try:
            response = chat.send_message(query)
            return response.text
        except:
            return "An Error occured! try after some time"
    return "Please provide message"



if __name__=="__main__":
    app.run(debug=True)