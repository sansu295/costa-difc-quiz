const quizContainer = document.getElementById('root');
let currentSetStart = 0;
const setSize = 20;
let userAnswers = []; // Store answers for the summary

function loadQuiz() {
    quizContainer.innerHTML = '';
    const currentQIndex = currentSetStart + userAnswers.length;

    // If we finished the 20-question set, show the summary
    if (userAnswers.length === setSize || currentQIndex >= quizData.length) {
        showSummary();
        return;
    }

    const qData = quizData[currentQIndex];
    
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
        
        userAnswers.push({ qData, selected: selected.value });
        loadQuiz(); // Load next question
    };
    quizContainer.appendChild(btn);
}

function showSummary() {
    quizContainer.innerHTML = '<h2>Batch Summary</h2>';
    userAnswers.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.border = item.selected === item.qData.correct ? "2px solid green" : "2px solid red";
        div.style.margin = "10px 0";
        div.style.padding = "10px";
        
        div.innerHTML = `<h3>${item.qData.q}</h3>
                         <p>Your answer: ${item.selected}</p>
                         ${item.selected !== item.qData.correct ? `<p><strong>Correct: ${item.qData.correct}</strong></p>` : ''}`;
        quizContainer.appendChild(div);
    });

    const nextBtn = document.createElement('button');
    nextBtn.innerText = "Start Next 20";
    nextBtn.onclick = () => {
        currentSetStart += setSize;
        userAnswers = [];
        loadQuiz();
    };
    quizContainer.appendChild(nextBtn);
}

loadQuiz();
