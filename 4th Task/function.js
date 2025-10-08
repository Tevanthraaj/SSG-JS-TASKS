// Global student object
let student = {
    name: "",
    birthYear: null,
    city: ""
};

// Tab switching
function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Save profile
function saveProfile() {
    try {
        let name = document.getElementById("name").value.trim();
        let birthYear = parseInt(document.getElementById("birthYear").value);
        let city = document.getElementById("city").value.trim();

        if (!name || !birthYear || !city) throw "All fields are required!";
        if (isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) {
            throw "Enter a valid birth year!";
        }

        student.name = name;
        student.birthYear = birthYear;
        student.city = city;

        document.getElementById("profileResult").innerHTML =
            `<b>Saved!</b><br>Name: ${student.name}<br>City: ${student.city}<br>Birth Year: ${student.birthYear}<br><br><br><b>JSON :</b><br> ${JSON.stringify(student)}`;
    } catch (err) {
        document.getElementById("profileResult").innerHTML = `<span style="color:red;">Error: ${err}</span>`;
    }
}

// Age Checker
function checkAge() {
    try {
        if (!student.birthYear) throw "Please enter profile info first!";
        let age = new Date().getFullYear() - student.birthYear;
        let eligibility = age >= 18 ? "Eligible (18+)" : "Not Eligible (<18)";
        document.getElementById("ageResult").innerHTML = `Age: ${age}<br>Status: ${eligibility}`;
    } catch (err) {
        document.getElementById("ageResult").innerHTML = `<span style="color:red;">Error: ${err}</span>`;
    }
}

// Greeting
function showGreeting() {
    try {
        if (!student.name) throw "Please enter profile info first!";
        let hour = new Date().getHours();
        let greeting = (hour < 12) ? "Good Morning" :
            (hour < 18) ? "Good Afternoon" : "Good Evening";
        document.getElementById("greetingResult").innerHTML = `${greeting}, ${student.name}! 👋`;
    } catch (err) {
        document.getElementById("greetingResult").innerHTML = `<span style="color:red;">Error: ${err}</span>`;
    }
}

// Calculator
function calculate() {
    try {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let op = document.getElementById("operation").value;

        if (isNaN(num1) || isNaN(num2)) throw "Enter valid numbers!";

        let result;
        switch (op) {
            case "add": result = num1 + num2; break;
            case "sub": result = num1 - num2; break;
            case "mul": result = num1 * num2; break;
            case "div":
                if (num2 === 0) throw "Cannot divide by zero!";
                result = num1 / num2;
                break;
        }

        document.getElementById("calcResult").innerHTML = `Result: ${result}`;
    } catch (err) {
        document.getElementById("calcResult").innerHTML = `<span style="color:red;">Error: ${err}</span>`;
    }
}

// Quotes
const quotes = [
    "Believe you can and you're halfway there.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "Doubt kills more dreams than failure ever will.",
    "Push yourself, because no one else is going to do it for you."
];

function showQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteResult").innerHTML = quotes[randomIndex];
}