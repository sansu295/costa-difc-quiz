const loginScreen = document.getElementById('login-screen');
const quizScreen = document.getElementById('quiz-screen');
const quizContainer = document.getElementById('quiz');
const progressEl = document.getElementById('progress');
const startBtn = document.getElementById('startBtn');
const loginError = document.getElementById('loginError');

// --- DEBUG GUARDS (safe to remove once things are working) ---
if (!startBtn) {
    console.error('[QUIZ DEBUG] Could not find #startBtn in the DOM. Check that quiz.js loads AFTER the login form HTML, or use "defer" on the script tag.');
}
if (typeof window.QUIZ_CONFIG === 'undefined') {
    console.error('[QUIZ DEBUG] window.QUIZ_CONFIG is undefined. Make sure the config script (with inviteCodes) is loaded BEFORE quiz.js in your HTML.');
} else if (!Array.isArray(window.QUIZ_CONFIG.inviteCodes) || window.QUIZ_CONFIG.inviteCodes.length === 0) {
    console.error('[QUIZ DEBUG] window.QUIZ_CONFIG.inviteCodes is missing or empty:', window.QUIZ_CONFIG);
} else {
    console.log('[QUIZ DEBUG] Loaded invite codes:', window.QUIZ_CONFIG.inviteCodes);
}
if (typeof quizData === 'undefined') {
    console.error('[QUIZ DEBUG] quizData is undefined. Make sure your questions file loads BEFORE quiz.js.');
} else {
    console.log('[QUIZ DEBUG] quizData loaded, question count:', quizData.length);
}
// --- END DEBUG GUARDS ---

const VALID_INVITE_CODES = ((window.QUIZ_CONFIG && window.QUIZ_CONFIG.inviteCodes) || [])
    .map(c => String(c).trim().toUpperCase());

let currentSetStart = 0;
const setSize = 20;
let userAnswers = [];
let totalCorrect = 0;
let shuffledQuizData = [];

// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

if (startBtn) {
    startBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const code = document.getElementById('code').value.trim().toUpperCase();

        console.log('[QUIZ DEBUG] Attempting login with code:', code, 'Valid codes are:', VALID_INVITE_CODES);

        if (!name) {
            showLoginError('Please enter your name.');
            return;
        }
        if (VALID_INVITE_CODES.length === 0) {
            showLoginError('No invite codes are configured. Contact your admin (check console for details).');
            return;
        }
        if (!VALID_INVITE_CODES.includes(code)) {
            showLoginError('That invite code is not valid.');
            return;
        }
        if (typeof quizData === 'undefined' || !Array.isArray(quizData) || quizData.length === 0) {
            showLoginError('Quiz questions failed to load. Contact your admin (check console for details).');
            return;
        }

        // Initialize: Shuffle the data when the user starts
        shuffledQuizData = shuffle(quizData);

        loginScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        loadQuiz();
    });
}

function showLoginError(message) {
    loginError.textContent = message;
    loginError.style.display = 'block';
}

function loadQuiz() {
    quizContainer.innerHTML = '';

    if (currentSetStart >= shuffledQuizData.length) {
        showFinalScore();
        return;
    }

    const currentQIndex = currentSetStart + userAnswers.length;

    if (userAnswers.length === setSize || currentQIndex >= shuffledQuizData.length) {
        showSummary();
        return;
    }

    const qData = shuffledQuizData[currentQIndex];

    updateProgress(currentQIndex);

    const questionH2 = document.createElement('h2');
    questionH2.innerText = `${currentQIndex + 1}. ${qData.q}`;
    quizContainer.appendChild(questionH2);

    // Add options as clickable buttons with instant feedback
    qData.a.forEach((option) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.className = "option-btn";
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.style.margin = "5px 0";
        btn.style.padding = "10px";

        btn.onclick = () => {
            // Disable all buttons so user cannot click again
            const allOptionButtons = quizContainer.querySelectorAll('.option-btn');
            allOptionButtons.forEach(b => b.disabled = true);

            const correctAnswer = qData.a[qData.c];

            // Visual feedback
            if (option === correctAnswer) {
                btn.style.backgroundColor = "green";
                btn.style.color = "white";
                totalCorrect++;
            } else {
                btn.style.backgroundColor = "red";
                btn.style.color = "white";
            }

            userAnswers.push({ qData, selected: option, correctAnswer });

            // Automatically move to next question after 1 second
            setTimeout(() => {
                loadQuiz();
            }, 1000);
        };
        quizContainer.appendChild(btn);
    });
}

function updateProgress(currentQIndex) {
    const batchNumber = Math.floor(currentSetStart / setSize) + 1;
    const posInBatch = (currentQIndex - currentSetStart) + 1;
    const batchLength = Math.min(setSize, shuffledQuizData.length - currentSetStart);
    progressEl.textContent = `Batch ${batchNumber} — Question ${posInBatch} of ${batchLength} (Overall ${currentQIndex + 1}/${shuffledQuizData.length})`;
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
    const isLastBatch = (currentSetStart + setSize) >= shuffledQuizData.length;
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
        <p>Final score: ${totalCorrect} out of ${shuffledQuizData.length}</p>
    `;

    const restartBtn = document.createElement('button');
    restartBtn.innerText = "Restart Quiz";
    restartBtn.onclick = () => {
        currentSetStart = 0;
        userAnswers = [];
        totalCorrect = 0;
        shuffledQuizData = shuffle(quizData); // Reshuffle on restart
        loadQuiz();
    };
    quizContainer.appendChild(restartBtn);
}
