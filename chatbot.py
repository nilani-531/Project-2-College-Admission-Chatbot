from flask import Flask, request, jsonify, send_from_directory
import json
import os

app = Flask(__name__, static_folder='public')

# Load the FAQ data
with open('College_Admission_FAQ.json', 'r') as f:
    faqs = json.load(f)

def get_answer(query):
    for item in faqs:
        if query.lower() in item['question'].lower():
            return item['answer']
    return "Sorry, I don't have an answer for that."

@app.route('/')
def index():
    return send_from_directory('public', 'index.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('public', filename)

@app.route('/get_response')
def get_response():
    query = request.args.get('query', '')
    answer = get_answer(query)
    return jsonify({'response': answer})

if __name__ == '__main__':
    app.run(debug=True)
