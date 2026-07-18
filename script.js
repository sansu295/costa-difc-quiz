const loginScreen = document.getElementById('login-screen');
const quizScreen = document.getElementById('quiz-screen');
const quizContainer = document.getElementById('quiz');
const progressEl = document.getElementById('progress');
const startBtn = document.getElementById('startBtn');
const loginError = document.getElementById('loginError');

// TODO: replace with your real invite code(s) for this run.
const VALID_INVITE_CODES = ['COSTA2026'];

let currentSetStart = 0;
const setSize = 20;
let userAnswers = []; // Store answers for the current batch's summary
let totalCorrect = 0; // Running score across the whole quiz

startBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const code = document.getElementById('code').value.trim();

    if (!name) {
        showLoginError('Please enter your name.');
        return;
    }
    if (!VALID_INVITE_CODES.includes(code.toUpperCase())) {
        showLoginError('That invite code is not valid. Please check and try again.');
        return;
    }

    loginScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadQuiz();
});

function showLoginError(message) {
    loginError.textContent = message;
    loginError.style.display = 'block';
}

function loadQuiz() {
    quizContainer.innerHTML = '';

    // Whole quiz finished (ran out of questions)
    if (currentSetStart >= quizData.length) {
        showFinalScore();
        return;
    }

    const currentQIndex = currentSetStart + userAnswers.length;

    // If we finished the current 20-question batch, or reached the end
    // of the question bank, show the batch summary.
    if (userAnswers.length === setSize || currentQIndex >= quizData.length) {
        showSummary();
        return;
    }

    const qData = quizData[currentQIndex];

    updateProgress(currentQIndex);

    // Add question
    const questionH2 = document.createElement('h2');
    questionH2.innerText = `${currentQIndex + 1}. ${qData.q}`;
    quizContainer.appendChild(questionH2);

    // Add options
    qData.a.forEach((option) => {
        const label = document.createElement('label');
        label.style.display = "block";
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        quizContainer.appendChild(label);
    });

    // Add Submit button
    const btn = document.createElement('button');
    btn.innerText = "Submit";
    btn.onclick = () => {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (!selected) return alert("Please select an answer!");

        const correctAnswer = qData.a[qData.c];
        if (selected.value === correctAnswer) {
            totalCorrect++;
        }

        userAnswers.push({ qData, selected: selected.value, correctAnswer });
        loadQuiz(); // Load next question
    };
    quizContainer.appendChild(btn);
}

function updateProgress(currentQIndex) {
    const batchNumber = Math.floor(currentSetStart / setSize) + 1;
    const posInBatch = (currentQIndex - currentSetStart) + 1;
    const batchLength = Math.min(setSize, quizData.length - currentSetStart);
    progressEl.textContent = `Batch ${batchNumber} — Question ${posInBatch} of ${batchLength} (Overall ${currentQIndex + 1}/${quizData.length})`;
}

function showSummary() {
    progressEl.textContent = '';
    quizContainer.innerHTML = '<h2>Batch Summary</h2>';

    const batchScore = userAnswers.filter(item => item.selected === item.correctAnswer).length;
    const scoreLine = document.createElement('p');
    scoreLine.innerText = `You got ${batchScore} out of ${userAnswers.length} correct in this batch.`;
    quizContainer.appendChild(scoreLine);

    userAnswers.forEach((item) => {
        const isCorrect = item.selected === item.correctAnswer;
        const div = document.createElement('div');
        div.style.border = isCorrect ? "2px solid green" : "2px solid red";
        div.style.margin = "10px 0";
        div.style.padding = "10px";
        div.style.textAlign = "left";

        div.innerHTML = `<h3>${item.qData.q}</h3>
                         <p>Your answer: ${item.selected}</p>
                         ${!isCorrect ? `<p><strong>Correct: ${item.correctAnswer}</strong></p>` : ''}`;
        quizContainer.appendChild(div);
    });

    const nextBtn = document.createElement('button');
    const isLastBatch = (currentSetStart + setSize) >= quizData.length;
    nextBtn.innerText = isLastBatch ? "Finish Quiz" : "Start Next 20";
    nextBtn.onclick = () => {
        currentSetStart += setSize;
        userAnswers = [];
        loadQuiz();
    };
    quizContainer.appendChild(nextBtn);
}

function showFinalScore() {
    progressEl.textContent = '';
    quizContainer.innerHTML = `
        <h2>Quiz Complete!</h2>
        <p>Final score: ${totalCorrect} out of ${quizData.length}</p>
    `;

    const restartBtn = document.createElement('button');
    restartBtn.innerText = "Restart Quiz";
    restartBtn.onclick = () => {
        currentSetStart = 0;
        userAnswers = [];
        totalCorrect = 0;
        loadQuiz();
    };
    quizContainer.appendChild(restartBtn);
}
