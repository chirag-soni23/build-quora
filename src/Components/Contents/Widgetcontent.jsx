import React from 'react';
import "../css/Widgetcontent.css";

function Widgetcontent() {
  return (
    <div className='widget__contents'>
      <div className="widget__content">
        <img src="https://qph.cf2.quoracdn.net/main-thumb-t-848-100-IkNAu2I9jQLevf07tCwT0bGI58gBQhR5.jpeg" alt="" srcset="" />
        <div className="widget__contentTitle">
          <h5>Musician</h5> {/* Title displaying "Musician" */}
          <p>The best Musician</p> {/* Description displaying "The best Musician" */}
        </div>
      </div>
    </div>
  );
}

export default Widgetcontent; // Export the Widgetcontent component for use in other parts of your application
