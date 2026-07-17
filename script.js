// Add "Submit & Load Next 20" button
    const nextBtn = document.createElement('button');
    nextBtn.innerText = "Submit & Load Next 20";
    nextBtn.style.marginTop = "20px";
    nextBtn.onclick = () => {
        let score = 0;
        
        // Loop through the current set to check answers
        currentSet.forEach((qData, index) => {
            const actualIndex = currentSetStart + index;
            const selected = document.querySelector(`input[name="question${actualIndex}"]:checked`);
            const questionDiv = document.querySelectorAll('#quiz > div')[index];
            
            if (selected) {
                if (selected.value === qData.correct) {
                    // Answer is correct
                    questionDiv.style.border = "2px solid green";
                } else {
                    // Answer is wrong
                    questionDiv.style.border = "2px solid red";
                    const feedback = document.createElement('p');
                    feedback.innerHTML = `<strong>Correct answer: ${qData.correct}</strong>`;
                    questionDiv.appendChild(feedback);
                }
            } else {
                // No answer selected
                questionDiv.style.border = "2px solid orange";
            }
        });

        // Add a "Continue" button to move to the next set
        nextBtn.innerText = "Continue to Next Set";
        nextBtn.onclick = () => {
            currentSetStart += setSize;
            loadQuizSet();
            window.scrollTo(0, 0);
        };
    };
    quizContainer.appendChild(nextBtn);
