import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser, logout } from '../utils/auth';
import '../styles/Dashboard.css';

export default function Dashboard() {
    const [documents, setDocuments] = useState([]);
    const [file, setFile] = useState(null);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [editingDocId, setEditingDocId] = useState(null);
    const [newFile, setNewFile] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const savedDocs = JSON.parse(localStorage.getItem('documents')) || [];
    //     setDocuments(savedDocs);
    // }, []);

    const handleUpload = () => {
        if (!file) return;
        const newDoc = { id: Date.now(), name: file.name };
        const updatedDocs = [...documents, newDoc];
        setDocuments(updatedDocs);
        localStorage.setItem('documents', JSON.stringify(updatedDocs));
        setFile(null);
    };

    const handleUpdate = (id) => {
        if (!newFile) {
            alert("Please select a file to update");
            return;
        }
        const updatedDocs = documents.map(doc => {
            if (doc.id === id) {
                return { ...doc, name: newFile.name };
            }
            return doc;
        });
        setDocuments(updatedDocs);
        localStorage.setItem('documents', JSON.stringify(updatedDocs));
        setEditingDocId(null);
        setNewFile(null);
    };

    const handleDelete = (id) => {
        const updatedDocs = documents.filter(doc => doc.id !== id);
        setDocuments(updatedDocs);
        localStorage.setItem('documents', JSON.stringify(updatedDocs));
    };

    const handleAsk = () => {
        if (!question.trim()) return;
        // Simulate AI answer
        setAnswer(`AI Answer to: "${question}"`);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2>Dashboard</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <div className="upload-section">
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <button onClick={handleUpload}>Upload Document</button>
            </div>

            <div className="documents-list">
                <h3>Uploaded Documents</h3>
                {documents.map(doc => (
                    <div key={doc.id} className="document-item">
                        <span>{doc.name}</span>

                        {editingDocId === doc.id ? (
                            <>
                                <input
                                    type="file"
                                    onChange={(e) => setNewFile(e.target.files[0])}
                                />
                                <button onClick={() => handleUpdate(doc.id)}>Save</button>
                                <button onClick={() => {
                                    setEditingDocId(null);
                                    setNewFile(null);
                                }}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => setEditingDocId(doc.id)}>Edit</button>
                                <button onClick={() => handleDelete(doc.id)}>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className="ai-question-section">
                <h3>Ask AI</h3>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a question about a document..."
                />
                <button onClick={handleAsk}>Ask</button>
                {answer && <p className="ai-answer">{answer}</p>}
            </div>
        </div>
    )
}
