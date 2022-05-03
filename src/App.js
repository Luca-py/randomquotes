import './App.css';
import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import { Typography } from '@material-ui/core';

function App() {
  const [quote, setQuote] = useState([]);
  const [bg, setBg] = useState('');
  const symbols = "0123456789ABCDEF";
  const getQuoteAndPhoto = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data);
    setBg(randomColor());
    console.log(bg)
  };

  useEffect(() => {
    getQuoteAndPhoto();
  }, []);

  return (
    <div className="App" style={{
      backgroundColor: `${bg}`,
    }}>
      <div className='Quote'>
        <Typography variant='h6' style={{textAlign: "center"}}>{quote.content}</Typography>
        <Typography variant='subtitle1' style={{textAlign: "right"}}>-{quote.author}</Typography>
        <div className='buttons'>
          <button className='but' style={{backgroundColor: `${bg}`}} variant="extended" onClick={getQuoteAndPhoto}>Get a new quote</button>
          <button className='but' style={{backgroundColor: `${bg}`}} href={`https://twitter.com/intent/tweet?text="${quote.content}" -${quote.author}`}>
            Share via Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
