import React from 'react';
import Banner from '../Banner';

function WonBanner({guessesList}) {
  return <Banner status="happy">
    <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{' '}{guessesList.length === 1 ? '1 guess' : `${guessesList.length} guesses`}</strong>.
        </p>
      </div>
  </Banner>;
}

export default WonBanner;
