import React from 'react';
import GuessInput from '../GuessInput';
import PrevGuesses from '../PrevGuesses';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessesList, setGuessesList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  console.log("Game Status", gameStatus)

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
    console.log("Guess on update:", guess)
    const nextGuesses = [...guessesList, guess]
    console.log("Guess list:", nextGuesses)
    setGuessesList( nextGuesses )

    if(guess === answer){
      setGameStatus('won')
    } else if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    }
  }
  
  return <>
          {gameStatus === 'won' && (
            <WonBanner guessesList={guessesList}/>
          )}
          {gameStatus === 'lost' && (
            <LostBanner answer={answer}/>
          )}
          <Guess guessesList={guessesList} answer={answer}/>
          <GuessInput handleChange={handleChange} handleSubmit={handleSubmit} guess={guess} gameStatus={gameStatus}/>
          <PrevGuesses guessesList={guessesList}/>
        </>;
}

export default Game;
