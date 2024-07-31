College Admission Chatbot

Description: The College Admission Chatbot is a web application designed to provide answers to frequently asked questions about the college admission process. Using a simple and user-friendly interface, this chatbot leverages a Flask backend to serve responses based on a JSON file containing FAQ data.

Features Web-Based Interface: A responsive HTML frontend styled with CSS, offering a seamless chat experience.

Flask Backend: Handles HTTP requests and serves responses based on a predefined set of FAQs.

FAQ Integration: Provides answers to common queries related to college admissions using a JSON file.

Static File Serving: Supports serving static files like CSS and JavaScript from a designated folder.

File Structure index.html: The main HTML file for the chatbot interface. style.css: CSS file for styling the chatbot and webpage. script.js: JavaScript file handling user interactions and API requests. College_Admission_FAQ.json: JSON file containing the FAQ data used by the chatbot. chatbot.py: Flask application script to handle backend logic and serve requests. README.md: This file with project details.

Set Up the Virtual Environment: python -m venv venv source venv/bin/activate # On Windows use venv\Scripts\activate

Install Required Packages: pip install flask Run the Flask Application:

Run Code: python chatbot.py

The application will start, and you can access it at http://127.0.0.1:5000.

Usage Open the Web Application:

Navigate to http://127.0.0.1:5000 in your web browser.
