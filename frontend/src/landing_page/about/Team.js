import React from 'react';

function Team() {
    return ( 
        <div className="container">
        <div className="row border-top">
            <h1 className=" text-center">
            People
            </h1>
        </div>
        <div className="row p-5 mt-5 border-top text-muted" style={{fontSize:"1.2em", lineHeight:"1.8"}}>
          <div className="col-6 p-3 text-center">
            <img src="media/images/nithinKamath.jpg" alt="nithinKamath" style={{borderRadius:"100%", width:"70%"}}/>
            <h3 className="text-center mt-4 p-1">Nithin Kamath</h3>
            <p className="text-center">Founder, CEO</p>
          </div>
          <div className="col-6 p-3">
            <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
            Playing basketball is his zen.
            </p>
          </div>
        </div>
    </div>
     );
}

export default Team;