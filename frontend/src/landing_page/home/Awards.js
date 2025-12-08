import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='largestBroker'/>
                </div>
                <div className='col-6 p-5 mt-5' >
                    <h1 className='mb-3 fs-1 fw-bolder'>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ milloin InvestaX clients contribute to over 15% of al retail orders volumes in India daily by trading and investing</p>
                    <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li><p>Future and options</p></li>
                            <li><p>Comodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Govt. Securities</p></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <img src='media\images\press-logos.png' alt='presslogo' style={{width:"60%", margin:"0 auto"}}/>
            </div>
        </div>
     );
}

export default Awards;