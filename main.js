let currentTurn = "player1";
let player1Score = 0;
let player2Score = 0;

function askQuestion() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        const question = `${num1} + ${num2} = ?`;
        document.getElementById("question-turn").style.display = "none";
        document.getElementById("answer-turn").style.display = "flex";
        document.getElementById("result").innerText = "";
        document.getElementById("answer").value = "";
        document.getElementById("answer-turn").getElementsByTagName("h2")[0].innerText = "Player 2";
        document.getElementById("result").innerText = question;
        currentTurn = "player2";
    } else {
        alert("Please enter valid numbers!");
    }
}

function checkAnswer() {
    const answer = parseInt(document.getElementById("answer").value);

    if (!isNaN(answer)) {
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const correctAnswer = num1 + num2;

        if (answer === correctAnswer) {
            document.getElementById("result").innerText = "Correct! Player gets a point.";
            if (currentTurn === "player1") {
                player1Score++;
                document.getElementById("player1-score").innerText = player1Score;
            } else {
                player2Score++;
                document.getElementById("player2-score").innerText = player2Score;
            }
        } else {
            document.getElementById("result").innerText = "Incorrect! No point.";
        }

        if (currentTurn === "player1") {
            document.getElementById("question-turn").style.display = "flex";
            document.getElementById("answer-turn").style.display = "none";
            document.getElementById("question-turn").getElementsByTagName("h2")[0].innerText = "Player 1";
        } else {
            document.getElementById("question-turn").style.display = "none";
            document.getElementById("answer-turn").style.display = "flex";
            document.getElementById("answer-turn").getElementsByTagName("h2")[0].innerText = "Player 1";
        }

        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("answer").value = "";
        currentTurn = currentTurn === "player1" ? "player2" : "player1";
    } else {
        alert("Please enter a valid answer!");
    }
}

function goToAnswerPage() {
    window.location.href = "answer.html";
}
