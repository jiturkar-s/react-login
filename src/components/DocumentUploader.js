import React, { useState } from 'react'
import '../styles/DocumentUploader.css';

export default function DocumentUploader({onUpload}) {

    const [file, setFile] = useState(null);

    const handleUpload = () => {
        if(file){
            const doc = {
                id : Date.now(),
                name: file.name,
                content: URL.createObjectURL(file),
            }
            onUpload(doc);
        }
    }
  return (
    <div>
        <input type='file' onChange={e => setFile(e.target.files[0])}/>
        <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
