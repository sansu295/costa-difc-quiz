// 1. The function that loads the quiz
function loadQuiz() {
    console.log("Quiz loading...");
    // Put your existing logic here to show questions
    document.getElementById('root').innerHTML = "<h2>Quiz Started!</h2>"; 
}

// 2. The event listener that waits for the click
document.getElementById('startBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const code = document.getElementById('code').value;

    if (name && code === "BARISTA99") {
        loadQuiz(); 
    } else {
        alert("Please enter a valid name and code!");
    }
});
