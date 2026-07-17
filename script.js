const quizContainer = document.getElementById('quiz');
const questionEl = document.getElementById('question');

let currentQuiz = 0;

function loadQuiz() {
    // Check if quizData exists
    if (typeof quizData === 'undefined') {
        questionEl.innerText = "Error: Data not loaded.";
        return;
    }

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.q;

    // Clear previous options
    quizContainer.innerHTML = `<h2 id="question">${currentQuizData.q}</h2>`;

    // Create radio buttons for the options
    currentQuizData.a.forEach((option) => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="answer" value="${option}">
            ${option} <br>
        `;
        quizContainer.appendChild(label);
    });
}

loadQuiz();
