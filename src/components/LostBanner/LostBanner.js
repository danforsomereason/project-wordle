import React from 'react';
import Banner from '../Banner';


function LostBanner({answer}) {
  return ( <Banner status='sad'>
    <div class="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
  </Banner>);
}

export default LostBanner;
