function loadQuiz() {
    quizContainer.innerHTML = '';

    if (currentSetStart >= shuffledQuizData.length) {
        showFinalScore();
        return;
    }

    const currentQIndex = currentSetStart + userAnswers.length;

    // If we finished the 20-question batch, show the summary
    if (userAnswers.length === setSize || currentQIndex >= shuffledQuizData.length) {
        showSummary();
        return;
    }

    const qData = shuffledQuizData[currentQIndex];
    updateProgress(currentQIndex);

    const questionH2 = document.createElement('h2');
    questionH2.innerText = `${currentQIndex + 1}. ${qData.q}`;
    quizContainer.appendChild(questionH2);

    qData.a.forEach((option) => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.className = "option-btn";
        btn.style.display = "block";
        btn.style.width = "100%";
        btn.style.margin = "5px 0";
        btn.style.padding = "10px";

        btn.onclick = () => {
            const allOptionButtons = quizContainer.querySelectorAll('.option-btn');
            allOptionButtons.forEach(b => b.disabled = true);

            const correctAnswer = qData.a[qData.c];
            if (option === correctAnswer) {
                btn.style.backgroundColor = "green";
                btn.style.color = "white";
                totalCorrect++;
            } else {
                btn.style.backgroundColor = "red";
                btn.style.color = "white";
            }

            userAnswers.push({ qData, selected: option, correctAnswer });

            // Check if this was the last question in the batch of 20
            const isLastInBatch = (userAnswers.length === setSize || (currentQIndex + 1) === shuffledQuizData.length);

            if (isLastInBatch) {
                // Add a "Submit Batch" button instead of auto-loading
                const submitBtn = document.createElement('button');
                submitBtn.innerText = "Submit Batch & See Results";
                submitBtn.style.marginTop = "20px";
                submitBtn.style.backgroundColor = "#007bff";
                submitBtn.style.color = "white";
                submitBtn.onclick = () => {
                    loadQuiz(); // This will trigger showSummary()
                };
                quizContainer.appendChild(submitBtn);
            } else {
                // Auto-load next if not the end of the batch
                setTimeout(() => {
                    loadQuiz();
                }, 1000);
            }
        };
        quizContainer.appendChild(btn);
    });
}
