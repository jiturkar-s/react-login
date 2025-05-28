import React from 'react'
import '../styles/DocumentList.css';

export default function DocumentList({documents, onDelete, onUpdate}) {
  return (
    <ul>
        {documents.map(doc => (
            <li key={doc.id}>
                <a href={doc.content} target='_blank' rel='noopener noreferrer'>{doc.name}</a>
                <button onClick={() => onDelete(doc.id)}>Delete</button>
                <button onClick={() => onUpdate(doc)}>Update</button>
            </li>
        ))}
    </ul>
  )
}
