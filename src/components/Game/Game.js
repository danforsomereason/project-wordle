import React from 'react';
import GuessInput from '../GuessInput';
import PrevGuesses from '../PrevGuesses';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessesList, setGuessesList] = React.useState([]);

  function handleChange(e){
    const captitalizedValue = e.target.value.toUpperCase();
    const filteredValue = captitalizedValue.replace(/[^a-zA-Z]/g, '');
    setGuess(filteredValue)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(guess.length !== 5){
      window.alert("Sorry, you must enter a 5 letter word")
      return;
    }
    updateGuessesList()
    console.log(guessesList)
    setGuess("")
  }

  function updateGuessesList(){
    setGuessesList(prevGuesses => 
      [...prevGuesses, guess]
    )
  }

  return <>
          <Guess guessesList={guessesList} />
          <GuessInput handleChange={handleChange} handleSubmit={handleSubmit} guess={guess}/>
          <PrevGuesses guessesList={guessesList}/>
        </>;
}

export default Game;
