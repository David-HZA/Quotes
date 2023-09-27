import { useState } from 'react';
import quotes from '../quotes.json'
import Author from './Author'



const getRandom = () => Math.floor(Math.random() * quotes.length)

const colors = ["#C34A36", "#936EC6", "#4B4453", "#845EC2", "#D65DB1", "#D63423",
                "#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#296073", "#B0A8B9",
                "#3596B5", "#D23927", "#00C9A7", "#936C00", "#BEA6A0", "#FF8066" ]

const QuoteBox = () => {

   const [ quote, setQuote ] = useState(quotes[getRandom()]);
   //const quote = quotes[0];
   const changeQuote = () => {
       setQuote(quotes[getRandom()]);
   }
  
   const color = colors[Math.floor(Math.random() * 18)];

   document.body.style = `background: ${color}`;
  
   console.log(quote);

    return (
        <div className='card' style={{color:color}}>
            <i className='fas fa-quote-left' id='quotes'></i>
            <h1>{quote.quote}</h1>
            <br />
            <Author />
            <h4>{quote.author}</h4>
            <button onClick={changeQuote } style={{color:color}} ><i className='bx bx-shuffle'></i></button>

            
        </div>
    );
};


export default QuoteBox;

