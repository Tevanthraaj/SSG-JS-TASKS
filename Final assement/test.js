// ======= QUESTIONS DATA =======
const allQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the capital city of Japan?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        answer: "Tokyo"
    },
    {
        question: "Which gas do humans need to survive?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        answer: "Oxygen"
    },
    {
        question: "Which is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["France", "Italy", "Germany", "Spain"],
        answer: "France"
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Tiger", "Cheetah", "Lion", "Horse"],
        answer: "Cheetah"
    }
];

// ======= GLOBAL VARIABLES =======
let selectedQuestions = [];
let userInfo = {};

// ======= TAB FUNCTION =======
function opentab(evt, tabName) {
    const tabs = document.querySelectorAll(".register, .questions, .result");
    tabs.forEach(tab => tab.style.display = "none");
    document.querySelector(`.${tabName}`).style.display = "block";

    const buttons = document.querySelectorAll(".tablinks");
    buttons.forEach(btn => btn.classList.remove("active"));
    evt.currentTarget.classList.add("active");
}

// ======= REGISTER USER =======
function registerUser() {
    try {
        const name = document.querySelector(".register input[type=text]").value.trim();
        const email = document.querySelector(".register input[type=email]").value.trim();
        const age = parseInt(document.querySelector(".register input[type=number]").value.trim());

        if (!name || !email || !age) throw "All fields are required!";
        if (age < 12) throw "Age must be at least 12 to participate.";

        userInfo = { name, email, age };

        // Select 3 random questions
        selectedQuestions = [];
        let copyQuestions = [...allQuestions];
        for (let i = 0; i < 3; i++) {
            const index = Math.floor(Math.random() * copyQuestions.length);
            selectedQuestions.push(copyQuestions[index]);
            copyQuestions.splice(index, 1);
        }

        displayQuiz();

        opentab({ currentTarget: document.querySelector(".tablinks[onclick*='questions']") }, "questions");

    } catch (error) {
        alert("Error: " + error);
    }
}

// ======= DISPLAY QUIZ =======
function displayQuiz() {
    const quizDiv = document.querySelector(".questions");
    quizDiv.innerHTML = `<h1>Welcome to the Quiz</h1>`;
    selectedQuestions.forEach((q, idx) => {
        let optionsHTML = "";
        q.options.forEach(opt => {
            optionsHTML += `<label><input type="radio" name="q${idx}" value="${opt}"> ${opt}</label><br>`;
        });
        quizDiv.innerHTML += `<div class="question"><p>${q.question}</p>${optionsHTML}</div><br>`;
    });

    quizDiv.innerHTML += `<center><button class="Submit" onclick="submitAnswers()">Submit Answers</button></center>`;
}

// ======= SUBMIT ANSWERS =======
function submitAnswers() {
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "<h2>Calculating result...</h2>";
    opentab({ currentTarget: document.querySelector(".tablinks[onclick*='result']") }, "result");

    // Simulate server delay with Promise
    new Promise((resolve) => {
        setTimeout(() => resolve(calculateResult()), Math.floor(Math.random() * 1000) + 2000);
    }).then(data => {
        resultDiv.innerHTML = `
            <h1>Result Summary</h1>
            <p><strong>Name:</strong> ${userInfo.name}</p>
            <p><strong>Email:</strong> ${userInfo.email}</p>
            <p><strong>Age:</strong> ${userInfo.age}</p>
            <p><strong>Total Score:</strong> ${data.score}/${data.total}</p>
            <p><strong>Percentage:</strong> ${data.percentage}%</p>
            <p><strong>Grade:</strong> ${data.grade}</p>
            <p><strong>Timestamp:</strong> ${data.timestamp}</p>
            <h3>JSON Data:</h3>
            <pre>${JSON.stringify(data.jsonData, null, 2)}</pre>
        `;
    });
}

// ======= CALCULATE RESULT =======
function calculateResult() {
    let score = 0;

    selectedQuestions.forEach((q, idx) => {
        const selected = document.querySelector(`input[name="q${idx}"]:checked`);
        if (selected && selected.value === q.answer) score++;
    });

    const total = selectedQuestions.length;
    const percentage = Math.round((score / total) * 100);

    let grade;
    if (percentage >= 90) grade = "A";
    else if (percentage >= 75) grade = "B";
    else if (percentage >= 50) grade = "C";
    else grade = "D";

    const timestamp = new Date().toLocaleString();

    const jsonData = {
        name: userInfo.name,
        email: userInfo.email,
        age: userInfo.age,
        score,
        total,
        percentage,
        grade,
        timestamp
    };

    return { score, total, percentage, grade, timestamp, jsonData };
}
