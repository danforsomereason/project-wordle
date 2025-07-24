import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import {range} from '../../utils'
import { checkGuess } from '../../game-helpers';


function Guess({guessesList, answer}) {


    return <div className='guess-results'>
    {range(NUM_OF_GUESSES_ALLOWED).map((guessIndex) => (
      <p className='guess' key={guessIndex}>
        {range(5).map((letterIndex) => {
          const word = guessesList[guessIndex];
          const checkedLetter = checkGuess(word, answer)
           return (
            <span className={`cell ${word ? checkedLetter[letterIndex].status : undefined}`} key={letterIndex}>
              {word ? checkedLetter[letterIndex].letter: undefined}
            </span>
            );
      })}
      </p>
    ))}
  </div>;
}

export default Guess;
