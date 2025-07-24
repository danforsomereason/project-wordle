import React from 'react';

function GuessInput({ gameStatus, handleChange, handleSubmit, guess }) {
  

  return <form className='guess-input-wrapper' onSubmit={handleSubmit}> 
      <label htmlFor='guess-input'>Enter guess: </label>
      <input type='text' id='guess-input' name="guess" value={guess}
      onChange={handleChange} disabled={gameStatus !== 'running'}
      />
  </form>;
}

export default GuessInput;
