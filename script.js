const quizContainer = document.getElementById('quiz');
let currentSetStart = 0;
const setSize = 20;

function loadQuizSet() {
    quizContainer.innerHTML = ''; // Clear previous content

    if (typeof quizData === 'undefined') {
        quizContainer.innerHTML = "<h2>Error: Data not loaded.</h2>";
        return;
    }

    if (currentSetStart >= quizData.length) {
        quizContainer.innerHTML = `<h2>Quiz Finished! You've completed all questions.</h2>`;
        return;
    }

    const currentSet = quizData.slice(currentSetStart, currentSetStart + setSize);

    currentSet.forEach((qData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.style.marginBottom = "20px";
        questionDiv.style.padding = "10px";
        
        const actualIndex = currentSetStart + index;
        questionDiv.innerHTML = `<h3>${actualIndex + 1}. ${qData.q}</h3>`;
        
        qData.a.forEach((option) => {
            const label = document.createElement('label');
            label.style.display = "block";
            label.innerHTML = `
                <input type="radio" name="question${actualIndex}" value="${option}">
                ${option}
            `;
            questionDiv.appendChild(label);
        });
        quizContainer.appendChild(questionDiv);
    });

    const actionBtn = document.createElement('button');
    actionBtn.innerText = "Submit Answers";
    actionBtn.style.marginTop = "20px";
    
    actionBtn.onclick = () => {
        currentSet.forEach((qData, index) => {
            const actualIndex = currentSetStart + index;
            const selected = document.querySelector(`input[name="question${actualIndex}"]:checked`);
            const questionDiv = document.querySelectorAll('#quiz > div')[index];
            
            if (selected) {
                if (selected.value === qData.correct) {
                    questionDiv.style.border = "2px solid green";
                } else {
                    questionDiv.style.border = "2px solid red";
                    const feedback = document.createElement('p');
                    feedback.innerHTML = `<strong>Correct answer: ${qData.correct}</strong>`;
                    questionDiv.appendChild(feedback);
                }
            }
        });

        actionBtn.innerText = "Continue to Next Set";
        actionBtn.onclick = () => {
            currentSetStart += setSize;
            loadQuizSet();
            window.scrollTo(0, 0);
        };
    };
    
    quizContainer.appendChild(actionBtn);
}

loadQuizSet();
