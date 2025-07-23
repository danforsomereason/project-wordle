import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import {range} from '../../utils'

function Guess({guessesList}) {
    return <div className='guess-results'>
    {range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => (
      <p className='guess' key={guessIndex}>
        {range(5).map((letterIndex) => {
          const word = guessesList[guessIndex] || "";
          const letter = word[letterIndex];

           return (
            <span className='cell'>
              {letter}
            </span>
            );
      })}
      </p>
    ))}
  </div>;
}

export default Guess;
