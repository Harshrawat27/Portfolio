// app/page.jsx
'use client';
import { useState } from 'react';

export default function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setGeneratedImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    setLoading(true);
    setGeneratedImage(null);

    try {
      const res = await fetch('/api/ghibli', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setGeneratedImage(data.url);
      } else {
        alert('Error generating image: ' + data.error);
      }
    } catch (error) {
      console.error(error);
      alert('An unexpected error occurred.');
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Ghibli Image Creator</h1>
      <p>
        Upload a photo and watch it transform into a Studio Ghibli style
        artwork!
      </p>
      <form onSubmit={handleSubmit}>
        <input type='file' accept='image/*' onChange={handleFileChange} />
        <br />
        <br />
        <button type='submit'>Create Ghibli Image</button>
      </form>
      {loading && <p>Generating image...</p>}
      {generatedImage && (
        <div>
          <h2>Your Ghibli Image</h2>
          <img
            src={generatedImage}
            alt='Ghibli style'
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      )}
    </div>
  );
}
