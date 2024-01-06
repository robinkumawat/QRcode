import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './qr.css'

const Qrcode = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>QR Code Generator</h2>
      <div>
        <label htmlFor="textInput">Enter text for QR code: </label>
        <input
          id="textInput"
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={handleChange}
        />
      </div>
      {text && (
        <div style={{ marginTop: '20px' }}>
          <QRCode value={text} size={200} />
          <p style={{ marginTop: '10px' }}>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Qrcode;
