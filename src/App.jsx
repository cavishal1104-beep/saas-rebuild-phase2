import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState('');

  const handleClick = () => {
    setResult(`Button clicked at ${new Date().toISOString()}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>SaaS Frontend Alive</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Ping Backend
      </button>
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', minHeight: '50px' }}>
        <p>{result}</p>
      </div>
    </div>
  );
}
