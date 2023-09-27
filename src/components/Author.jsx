
import quotes from '../quotes.json'

const Author = () => {

    const quote = quotes[0];
  
   
    console.log(quote);
    
    return (
        <div>
            <h4>{quotes.author}</h4>
        </div>
    );
};

export default Author;