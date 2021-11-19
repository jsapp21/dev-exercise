import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [leftNum, setLeftNum] = useState(0);
  const [rightNum, setRightNum] = useState(15);
  const [paginatedQuotes, setPaginatedQuotes] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json')
      .then(resp => resp.json())
      .then(data => {
        setQuotes(data)
        const pagQuotes = data.slice(leftNum, rightNum)
        setPaginatedQuotes(pagQuotes)
      });
  }, [leftNum, rightNum]);

  const handleNext = () => {
    if (paginatedQuotes.length < 15){
      setPaginatedQuotes(quotes)
      setLeftNum(0)
      setRightNum(15)
    } else {
      setLeftNum(leftNum + 15)
      setRightNum(rightNum + 15)
    }
  };
  
  return (
    <div>
      <button onClick={handleNext}>Next 15 Quotes</button>
    {paginatedQuotes.map(quote => {
      return (
        <ul>
          <li>"{quote.quote}" - {quote.source}, from {quote.context}, {quote.theme === 'movies' ? `🎥` : `👾`}</li>
        </ul>
      )
    })}
    </div>
    );
  }
  
export default App;
