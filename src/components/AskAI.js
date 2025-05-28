import React, { useState } from 'react'
import '../styles/AskAI.css';

export default function AskAI() {
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');

    const handleAsk = async () => {
        // Placeholder for real AI API call
        setResponse("This is a mock AI response to:" + question);
    }

  return (
    <div>
        <input value={question} onChange={e => setQuestion(e.target.value)} placeholder='Ask a question....'/>
        <button onClick={handleAsk}>Ask</button>
        <p><strong>Answer:</strong>{response}</p>
    </div>
  )
}
