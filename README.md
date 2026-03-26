AI Secure Data Intelligence Platform 🔐

## Overview

AI-powered platform to analyze PDFs and log files for:
 •Text summarization
 •Sensitive data detection (emails, passwords, API keys)
 •Security risk analysis
This tool helps organizations and developers quickly identify potential security risks in documents without manual inspection.


## Problem Statement

Manually reviewing PDFs and log files for sensitive information is time-consuming, error-prone, and inefficient.
This platform automates the process by extracting text, detecting sensitive data, and scoring the security risk, saving time and improving accuracy.


## Features

📄 Upload PDF / Log Files – easily select and upload documents
🧠 Auto Text Extraction – extracts text content from uploaded files
🔍 Sensitive Data Detection – detects emails, passwords, API keys
⚠️ Risk Scoring System – assigns a risk score based on detected sensitive elements
📊 Clean UI Output – presents results in a user-friendly interface

## Approach / Design

 •Backend: Node.js + Express handles file uploads and processing.
 •PDF Parsing: pdf-parse extracts text from PDFs and logs.
 •Sensitive Data Detection: Regex and custom logic identify emails, passwords, and API keys.
 •Risk Scoring: Each detected sensitive item contributes to a total risk score.
 •Frontend: HTML, CSS, and JavaScript display the results clearly and interactively.

 
## Tech Stack
 •Frontend: HTML, CSS, JavaScript
 •Backend: Node.js, Express
 •Libraries / Tools: pdf-parse, multer

 
## Challenges Faced

Efficiently handling large PDFs and log files
Accurately detecting sensitive data across various formats
Maintaining a clean and responsive UI for different outputs


## How to Run

➞ 1. Clone the repository
git clone https://github.com/khushinagar01/ai-secure-data-intelligence-platform.git

➞ 2. Navigate to the project folder
cd ai-secure-data-intelligence-platform

➞ 3. Install dependencies
npm install

➞ 4. Start the server
node app.js

➞ 5. Open the app in your browser
Open http://localhost:3000

➞ 6. Upload a PDF or log file to see summarization and sensitive data detection

## Screenshots

<img width="1404" height="928" alt="Screenshot 2026-03-26 121917" src="https://github.com/user-attachments/assets/82f9eaaa-d824-4578-bda3-fab22d96bd6e" />

<img width="1617" height="969" alt="Screenshot 2026-03-26 122117" src="https://github.com/user-attachments/assets/e2792508-9c9c-443b-b3cf-6a1e7a9d13ec" />


