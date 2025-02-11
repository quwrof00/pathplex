from flask import Flask, request, jsonify
import numpy as np
import joblib
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

# ✅ Load ML Model
try:
    model = joblib.load(r"C:\Users\Shourya\Downloads\xgb_pipeline.joblib")  # Adjust path if needed
    print("✅ Model loaded successfully!")
except Exception as e:
    model = None
    print(f"⚠️ Error loading model: {e}")

@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "status": "success",
        "message": "🚀 PathPlex API is Live!",
        "api_version": "1.0.0",
        "backend": "Flask",
        "ml_model": "Loaded ✅" if model else "Not Loaded ❌",
        "available_endpoints": {
            "GET /": "API Home",
            "GET /questions": "Fetch quiz questions",
            "POST /predict": "Submit quiz responses for prediction",
            "POST /results": "Submit quiz scores and get results"
        }
    })

@app.route("/questions", methods=["GET"])
def get_questions():
    questions = [
        # Personality Traits Questions
        # 1. Openness to Experience
        {
            "id": "O1",
            "category": "Openness",
            "question": "I enjoy trying out new and unfamiliar activities.",
            "options": [
                {"text": "Strongly Agree", "value": 3},
                {"text": "Agree", "value": 2},
                {"text": "Neutral", "value": 1},
                {"text": "Disagree", "value": 0},
            ],
        },
        {
            "id": "O2",
            "category": "Openness",
            "question": "How often do you engage in creative activities like painting, writing, or music?",
            "options": [
                {"text": "Very Often", "value": 3},
                {"text": "Sometimes", "value": 2},
                {"text": "Rarely", "value": 1},
                {"text": "Never", "value": 0},
            ],
        },
        # 2. Conscientiousness
        {
            "id": "C1",
            "category": "Conscientiousness",
            "question": "How do you handle tasks and responsibilities?",
            "options": [
                {"text": "Plan everything in advance and stay organized", "value": 3},
                {"text": "Try to plan but sometimes procrastinate", "value": 2},
                {"text": "Often leave things for the last moment", "value": 1},
                {"text": "Handle things spontaneously without planning", "value": 0},
            ],
        },
        {
            "id": "C2",
            "category": "Conscientiousness",
            "question": "How well do you follow schedules and deadlines?",
            "options": [
                {"text": "Always meet deadlines and stay on track", "value": 3},
                {"text": "Mostly follow deadlines with few delays", "value": 2},
                {"text": "Often struggle with deadlines", "value": 1},
                {"text": "Rarely follow a fixed schedule", "value": 0},
            ],
        },
        # 3. Extraversion
        {
            "id": "E1",
            "category": "Extraversion",
            "question": "How do you feel about social gatherings?",
            "options": [
                {"text": "I love them and enjoy meeting new people", "value": 3},
                {"text": "I like them but prefer familiar groups", "value": 2},
                {"text": "I don't mind them but don't actively seek them out", "value": 1},
                {"text": "I avoid them whenever possible", "value": 0},
            ],
        },
        {
            "id": "E2",
            "category": "Extraversion",
            "question": "How often do you initiate conversations in a social setting?",
            "options": [
                {"text": "Almost always", "value": 3},
                {"text": "Sometimes, depending on the situation", "value": 2},
                {"text": "Rarely, I wait for others to start", "value": 1},
                {"text": "Never, I prefer to stay quiet", "value": 0},
            ],
        },
        # 4. Agreeableness
        {
            "id": "A1",
            "category": "Agreeableness",
            "question": "How do you usually respond to conflicts with others?",
            "options": [
                {"text": "Try to find a fair solution for everyone", "value": 3},
                {"text": "Compromise if necessary but stand my ground", "value": 2},
                {"text": "Defend my viewpoint strongly", "value": 1},
                {"text": "Avoid the issue and let things escalate", "value": 0},
            ],
        },
        {
            "id": "A2",
            "category": "Agreeableness",
            "question": "How do you react if a friend needs help with a difficult task?",
            "options": [
                {"text": "Help immediately without hesitation", "value": 3},
                {"text": "Help if it's convenient for me", "value": 2},
                {"text": "Consider but usually decline", "value": 1},
                {"text": "Avoid helping altogether", "value": 0},
            ],
        },
        # 5. Neuroticism
        {
            "id": "N1",
            "category": "Neuroticism",
            "question": "How often do you feel anxious or stressed?",
            "options": [
                {"text": "Almost all the time", "value": 3},
                {"text": "Frequently but I manage it", "value": 2},
                {"text": "Occasionally, but not a big issue", "value": 1},
                {"text": "Rarely or never", "value": 0},
            ],
        },
        {
            "id": "N2",
            "category": "Neuroticism",
            "question": "When faced with a failure, how do you respond?",
            "options": [
                {"text": "Feel overwhelmed and struggle to move on", "value": 3},
                {"text": "Get upset but try to learn from it", "value": 2},
                {"text": "Acknowledge it but move on quickly", "value": 1},
                {"text": "Accept it easily and stay unaffected", "value": 0},
            ],
        },
        # Cognitive Aptitude Questions
        {
            "id": "NA1",
            "category": "Numerical Aptitude",
            "question": "If the price of an item increases by 20% and then decreases by 20%, what is the final percentage change?",
            "options": [
                {"text": "0%", "value": 0},
                {"text": "-4%", "value": 3},
                {"text": "+4%", "value": 1},
                {"text": "-2%", "value": 2},
            ],
        },
        {
            "id": "NA2",
            "category": "Numerical Aptitude",
            "question": "A train moves at a speed of 60 km/h. How much time will it take to cover 300 km?",
            "options": [
                {"text": "3 hours", "value": 1},
                {"text": "5 hours", "value": 3},
                {"text": "6 hours", "value": 0},
                {"text": "4 hours", "value": 2},
            ],
        },
        {
            "id": "SA1",
            "category": "Spatial Aptitude",
            "question": "Which shape will be formed when a cube is unfolded?",
            "options": [
                {"text": "A rectangle", "value": 0},
                {"text": "A cross-shaped net", "value": 3},
                {"text": "A triangle", "value": 1},
                {"text": "A pentagon", "value": 2},
            ],
        },
        {
            "id": "SA2",
            "category": "Spatial Aptitude",
            "question": "How will the reflection appear if a mirror is placed on the right side of an object?",
            "options": [
                {"text": "Left and right are reversed", "value": 3},
                {"text": "Upside-down", "value": 1},
                {"text": "No change in orientation", "value": 0},
                {"text": "Only the top and bottom are reversed", "value": 2},
            ],
        },
        {
            "id": "PA1",
            "category": "Perceptual Aptitude",
            "question": "Find the odd one out: Circle, Triangle, Sphere, Square.",
            "options": [
                {"text": "Circle", "value": 0},
                {"text": "Sphere", "value": 3},
                {"text": "Triangle", "value": 1},
                {"text": "Square", "value": 2},
            ],
        },
        {
            "id": "PA2",
            "category": "Perceptual Aptitude",
            "question": "Which number is missing in the series? 2, 6, 12, 20, __, 42",
            "options": [
                {"text": "28", "value": 2},
                {"text": "30", "value": 0},
                {"text": "32", "value": 1},
                {"text": "36", "value": 3},
            ],
        },
        {
            "id": "AR1",
            "category": "Abstract Reasoning",
            "question": "If CIRCLE is coded as RICELC, how would SQUARE be coded?",
            "options": [
                {"text": "QSUERA", "value": 3},
                {"text": "UQSAER", "value": 0},
                {"text": "ERSQUA", "value": 1},
                {"text": "SUQARE", "value": 2},
            ],
        },
        {
            "id": "AR2",
            "category": "Abstract Reasoning",
            "question": "If A = 1, B = 2, and C = 3... then what is the sum of the letters in the word \"DOG\"?",
            "options": [
                {"text": "26", "value": 1},
                {"text": "24", "value": 3},
                {"text": "20", "value": 0},
                {"text": "22", "value": 2},
            ],
        },
        {
            "id": "VR1",
            "category": "Verbal Reasoning",
            "question": "Which word best completes the sentence? \"The scientist conducted an ___ experiment to test the hypothesis.\"",
            "options": [
                {"text": "Amazing", "value": 0},
                {"text": "Controlled", "value": 3},
                {"text": "Random", "value": 1},
                {"text": "Impossible", "value": 2},
            ],
        },
        {
            "id": "VR2",
            "category": "Verbal Reasoning",
            "question": "Choose the correct synonym for \"Innovative.\"",
            "options": [
                {"text": "Traditional", "value": 0},
                {"text": "Creative", "value": 3},
                {"text": "Boring", "value": 1},
                {"text": "Risky", "value": 2},
            ],
        },
    ]
    return jsonify({
        "status": "success",
        "count": len(questions),
        "categories": [
            "Medical & Healthcare", "Engineering & Technology", "Science & Research",
            "Finance & Business", "Creative & Design", "Education & Training",
            "Law & Government", "Administration & Human Resources", "Social & Public Services",
            "Miscellaneous & Specialized Roles"
        ],
        "questions": questions
    })

@app.route("/results", methods=["POST"])
def store_results():
    try:
        data = request.json
        if not data or 'scores' not in data:
            return jsonify({"error": "⚠️ Invalid data format, 'scores' field is required!"}), 400
        
        # Get the original scores array from the request.
        scores = data['scores']
        
        # Transform the scores: group every 2 responses (question 1 & 2, 3 & 4, etc.)
        transformed_scores = []
        for i in range(0, len(scores), 2):
            if i + 1 < len(scores):
                avg = (scores[i] + scores[i + 1]) / 2  # Average the two scores
            else:
                avg = scores[i]
            transformed_scores.append(float(avg))  # Convert to float
        
        timestamp = datetime.now().isoformat()
        # Get the prediction as an integer
        prediction_number = int(model.predict([transformed_scores])[0]) if model else None
        
        # Map the prediction number to a career using the career_map
        career_map = {
            0: {"career": "Medical & Healthcare", "description": "Best suited for medical sciences."},
            1: {"career": "Engineering & Technology", "description": "Perfect for logical thinkers."},
            2: {"career": "Science & Research", "description": "Ideal for analytical minds."},
            3: {"career": "Finance & Business", "description": "For problem-solvers in finance."},
            4: {"career": "Creative & Design", "description": "Great for artists and creators."},
            5: {"career": "Education & Training", "description": "For those who love teaching."},
            6: {"career": "Law & Government", "description": "Ideal for leaders and policy-makers."},
            7: {"career": "Administration & HR", "description": "Best fit for organization management."},
            8: {"career": "Social & Public Services", "description": "For those passionate about impact."},
            9: {"career": "Miscellaneous & Specialized Roles", "description": "For unique and hybrid careers."}
        }
        
        mapped_prediction = career_map.get(prediction_number, {"career": "Unknown", "description": "No mapping found."})
        
        result = {
            "original_scores": scores,
            "transformed_scores": transformed_scores,
            "timestamp": timestamp,
            "prediction": mapped_prediction
        }

        return jsonify({
            "status": "success",
            "message": "Results computed successfully",
            "result": result
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, port=5000, host='0.0.0.0')
