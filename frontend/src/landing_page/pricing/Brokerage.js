import React from 'react';

function Brokerage() {
    return ( 
        <div className='container mb-5 mt-5'>
            <div className='row p-2 mt-5 border-top'>
                <div className='col-8'>
                    <a href='@' style={{textDecoration:"none"}}><h4 className='text-center'>Brokerage calculator</h4></a>
                    <ul className='mt-3 text-muted' style={{lineHeight:2}}>
                        <li>Equity delivery Zero Brokerage</li>
                        <li>Equity intraday 0.03% or Rs. 20/executed order whichever is lower</li>
                        <li>F&O - Futures 0.03% or Rs. 20/executed order whichever is lower</li>
                        <li>F&O - Options Flat Rs. 20 per executed order</li>
                        <li>Currency futures 0.03% or ₹ 20/executed order whichever is lower</li>
                        <li>Currency options ₹ 20/executed order</li>
                        <li>Commodity futures 0.03% or Rs. 20/executed order whichever is lower</li>
                        <li>Commodity options ₹ 20/executed order</li>
                    </ul>
                </div>
                <div className='col-4 text-center'>
                    <a href='@' style={{textDecoration:"none"}}><h4>List of charges</h4></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;