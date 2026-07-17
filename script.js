// Function to start the quiz
function loadQuiz() {
    // Shuffles the 300 questions and picks the first 20
    const quizQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 20);
    let currentQuiz = 0;
    let score = 0;
    let wrong = 0;

    const root = document.getElementById('root');

    function showQuestion() {
        const q = quizQuestions[currentQuiz];
        root.innerHTML = `
            <h2>Question ${currentQuiz + 1} of 20</h2>
            <p>${q.question}</p>
            <button onclick="submitAnswer('a', '${q.correct}')">${q.a}</button>
            <button onclick="submitAnswer('b', '${q.correct}')">${q.b}</button>
            <button onclick="submitAnswer('c', '${q.correct}')">${q.c}</button>
            <button onclick="submitAnswer('d', '${q.correct}')">${q.d আঙbutton>
        `;
    }

    // Function to handle the answer click
    window.submitAnswer = (choice, correct) => {
        if (choice === correct) {
            score++;
        } else {
            wrong++;
        }
        currentQuiz++;
        if (currentQuiz < quizQuestions.length) {
            showQuestion();
        } else {
            root.innerHTML = `<h2>Quiz Finished!</h2>
                              <p>Right Answers: ${score}</p>
                              <p>Wrong Answers: ${wrong}</p>
                              <button onclick="location.reload()">Restart Quiz</button>`;
        }
    };
    showQuestion();
}

// Attach event listener to the start button
document.getElementById('startBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const code = document.getElementById('code').value;

    if (name.trim() !== "" && code === "BARISTA99") {
        loadQuiz();
    } else {
        alert("Please enter a valid name and code!");
    }
});
