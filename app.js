import React, { useState } from 'react';
import quizData from './questions.json';

const BATCH_SIZE = 20;
// TODO: replace with your real invite code(s) for this run.
const VALID_INVITE_CODES = ['BARISTA99'];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [loginError, setLoginError] = useState('');

  // batchStart: index into quizData where the current 20-question batch begins
  const [batchStart, setBatchStart] = useState(0);
  // currentIndex: index into quizData of the question currently on screen
  const [currentIndex, setCurrentIndex] = useState(0);
  // selectedOption: the option text chosen for the question on screen (not yet submitted)
  const [selectedOption, setSelectedOption] = useState(null);
  // batchAnswers: answers submitted so far in the current batch, for the summary screen
  const [batchAnswers, setBatchAnswers] = useState([]);
  // totalCorrect: running score across the whole quiz
  const [totalCorrect, setTotalCorrect] = useState(0);
  // phase: 'question' | 'batchSummary' | 'finished'
  const [phase, setPhase] = useState('question');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setLoginError('Please enter your name.');
      return;
    }
    if (!VALID_INVITE_CODES.includes(code.trim().toUpperCase())) {
      setLoginError('That invite code is not valid. Please check and try again.');
      return;
    }
    setLoginError('');
    setIsLoggedIn(true);
  };

  const handleSubmit = () => {
    if (selectedOption === null) {
      alert('Please select an answer!');
      return;
    }

    const qData = quizData[currentIndex];
    const correctAnswer = qData.a[qData.c];
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) {
      setTotalCorrect((prev) => prev + 1);
    }

    const newBatchAnswers = [
      ...batchAnswers,
      { qData, selected: selectedOption, correctAnswer, isCorrect },
    ];
    setBatchAnswers(newBatchAnswers);
    setSelectedOption(null);

    const nextIndex = currentIndex + 1;
    const reachedEndOfBatch = newBatchAnswers.length === BATCH_SIZE;
    const reachedEndOfQuiz = nextIndex >= quizData.length;

    if (reachedEndOfBatch || reachedEndOfQuiz) {
      setPhase('batchSummary');
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const handleNextBatch = () => {
    const nextBatchStart = batchStart + BATCH_SIZE;
    if (nextBatchStart >= quizData.length) {
      setPhase('finished');
      return;
    }
    setBatchStart(nextBatchStart);
    setCurrentIndex(nextBatchStart);
    setBatchAnswers([]);
    setPhase('question');
  };

  const handleRestart = () => {
    setBatchStart(0);
    setCurrentIndex(0);
    setBatchAnswers([]);
    setTotalCorrect(0);
    setSelectedOption(null);
    setPhase('question');
  };

  if (!isLoggedIn) {
    return (
      <div className="p-6">
        <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 border rounded shadow">
          <h1 className="text-xl font-bold mb-4">Costa DIFC Quiz 2026</h1>
          <input
            className="w-full border p-2 mb-2"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full border p-2 mb-2"
            placeholder="Invite Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          {loginError && (
            <p className="text-red-800 bg-red-100 p-2 rounded mb-4 text-sm">{loginError}</p>
          )}
          <button type="submit" className="w-full bg-red-800 text-white p-2 rounded">
            Verify &amp; Start Quiz
          </button>
        </form>
      </div>
    );
  }

  if (phase === 'finished') {
    return (
      <div className="p-6 max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Quiz Complete!</h1>
        <p className="mb-6">
          Final score: {totalCorrect} out of {quizData.length}
        </p>
        <button onClick={handleRestart} className="w-full bg-red-800 text-white p-2 rounded">
          Restart Quiz
        </button>
      </div>
    );
  }

  if (phase === 'batchSummary') {
    const batchScore = batchAnswers.filter((item) => item.isCorrect).length;
    const isLastBatch = batchStart + BATCH_SIZE >= quizData.length;

    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Batch Summary</h1>
        <p className="mb-4">
          You got {batchScore} out of {batchAnswers.length} correct in this batch.
        </p>
        {batchAnswers.map((item, index) => (
          <div
            key={index}
            className={`mb-4 p-4 border-2 rounded ${item.isCorrect ? 'border-green-600' : 'border-red-600'}`}
          >
            <h3 className="font-semibold mb-1">{item.qData.q}</h3>
            <p>Your answer: {item.selected}</p>
            {!item.isCorrect && (
              <p className="font-bold">Correct: {item.correctAnswer}</p>
            )}
          </div>
        ))}
        <button onClick={handleNextBatch} className="w-full bg-red-800 text-white p-2 rounded">
          {isLastBatch ? 'Finish Quiz' : 'Start Next 20'}
        </button>
      </div>
    );
  }

  // phase === 'question'
  const qData = quizData[currentIndex];
  const batchNumber = Math.floor(batchStart / BATCH_SIZE) + 1;
  const posInBatch = currentIndex - batchStart + 1;
  const batchLength = Math.min(BATCH_SIZE, quizData.length - batchStart);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Welcome, {name}!</h1>
      <p className="text-red-800 font-semibold mb-4">
        Batch {batchNumber} — Question {posInBatch} of {batchLength} (Overall {currentIndex + 1}/{quizData.length})
      </p>
      <div className="mb-6 p-4 border rounded shadow">
        <h3 className="font-semibold text-lg mb-2">
          {currentIndex + 1}. {qData.q}
        </h3>
        <div className="flex flex-col gap-2">
          {qData.a.map((option, i) => (
            <button
              key={i}
              onClick={() => setSelectedOption(option)}
              className={`p-2 border rounded text-left ${
                selectedOption === option ? 'bg-red-800 text-white' : 'hover:bg-gray-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleSubmit} className="w-full bg-red-800 text-white p-2 rounded">
        Submit
      </button>
    </div>
  );
}

export default App;
