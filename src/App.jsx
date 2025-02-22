import { useState } from 'react'
import './App.css'

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [paslength, setPaslength] = useState(8);
  const [finalpass, setFinalpass] = useState('');
  const [alert, setAlert] = useState(false);

  let upperChr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerChr = 'abcdefghijklmnopqrstuvwxyz';
  let num = '0123456789';
  let specialChr = '@#%-&!?/';

  const createPasswrod = () => {
    let finalPasswrod = '';
    let charSet = '';
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += upperChr;
      if (lowercase) charSet += lowerChr;
      if (number) charSet += num;
      if (symbols) charSet += specialChr;

      for (let i = 0; i < paslength; i++) {
        finalPasswrod += charSet.charAt(Math.floor(Math.random() * charSet.length))
      }
      setFinalpass(finalPasswrod);

    }
    else {
      setAlert(true);
    }
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(finalpass)
  }

  return (
    <>
      <div className={`alret-box ${alert ? 'show-alert' : ''}`}>
        <h3>Please select atleast one check box...</h3>
        <button className='alert-btn' onClick={() => setAlert(false)}>ok</button>
      </div>
      <div className='container'>
        <h1>Password Generator</h1>

        <div className="display">
          <input type="text" readOnly value={finalpass} />
          <i className="fa-regular fa-copy" onClick={copyPassword}></i>
        </div>

        <div className="box">
          <label>Password Length</label>
          <input type="number" max={20} min={8} value={paslength}
            onChange={(event) => setPaslength(event.target.value)} />
        </div>

        <div className="box">
          <label>Include Uppercase letters</label>
          <input type="checkbox" checked={uppercase}
            onChange={() => setUppercase(!uppercase)} />
        </div>

        <div className="box">
          <label>Include Lowercase letters</label>
          <input type="checkbox" checked={lowercase}
            onChange={() => setLowercase(!lowercase)} />
        </div>

        <div className="box">
          <label>Include Number</label>
          <input type="checkbox" checked={number}
            onChange={() => setNumber(!number)} />
        </div>

        <div className="box">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbols}

            onChange={() => setSymbols(!symbols)} />
        </div>

        <button className='btn' onClick={createPasswrod}>Generate password</button>
      </div>
    </>
  )
}

export default App
