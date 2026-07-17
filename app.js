import React, { useState } from 'react';
import quizData from './questions.json';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && code === "BARISTA99") { // Set your required code here
      setIsLoggedIn(true);
    } else {
      alert("Please enter a valid name and invite code.");
    }
  };

  return (
    <div className="p-6">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 border rounded shadow">
          <h1 className="text-xl font-bold mb-4">Costa DIFC Quiz 2026</h1>
          <input className="w-full border p-2 mb-2" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
          <input className="w-full border p-2 mb-4" placeholder="Invite Code" onChange={(e) => setCode(e.target.value)} />
          <button type="submit" className="w-full bg-red-800 text-white p-2 rounded">Verify & Start Quiz</button>
        </form>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Welcome, {name}!</h1>
          {quizData.slice(0, 20).map((item, index) => (
            <div key={item.id} className="mb-6 p-4 border rounded shadow">
              <h3 className="font-semibold text-lg mb-2">{index + 1}. {item.q}</h3>
              <div className="flex flex-col gap-2">
                {item.a.map((option, i) => (
                  <button key={i} className="p-2 border rounded hover:bg-gray-100 text-left">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
