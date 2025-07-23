import React from 'react';

function PrevGuesses({guessesList}) {
  return <div className='guess-results'>
    {guessesList.map((item, index) =>
     (<p className='guess' key={index}>{item}</p>)
    )}
  </div>;
}

export default PrevGuesses;
