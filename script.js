const quizContainer = document.getElementById('quiz');

let currentQuiz = 0;

function loadQuiz() {
    quizContainer.innerHTML = ''; // Clear container

    if (typeof quizData === 'undefined' || currentQuiz >= quizData.length) {
        quizContainer.innerHTML = `<h2>Quiz Finished!</h2>`;
        return;
    }

    const currentQuizData = quizData[currentQuiz];

    // Add question
    const questionH2 = document.createElement('h2');
    questionH2.innerText = currentQuizData.q;
    quizContainer.appendChild(questionH2);

    // Add options
    currentQuizData.a.forEach((option) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option} <br>`;
        quizContainer.appendChild(label);
    });

    // Add submit button
    const button = document.createElement('button');
    button.innerText = "Submit";
    button.onclick = submitAnswer;
    quizContainer.appendChild(button);
}

function submitAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Please select an answer!");
        return;
    }
    
    // Logic to check answer could be added here later
    currentQuiz++;
    loadQuiz();
}

loadQuiz();
