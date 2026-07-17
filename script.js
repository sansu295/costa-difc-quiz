document.getElementById('startBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const code = document.getElementById('code').value;

    if (name && code === "BARISTA99") { // Example check
        loadQuiz(); // This will clear the container and show your first question
    } else {
        alert("Please enter a valid name and code!");
    }
});
