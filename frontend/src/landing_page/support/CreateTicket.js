import React from "react";

function createTicket() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row p-5 mt-5">
        <h4>To create a ticket, select a relevant topic</h4>
        <div className="col-4 p-5  mb-2 mt-2">
          <h5 className=""><i class="fa-solid fa-circle-plus"></i> Account Opening</h5>
          <ul>
            <li>Resident individual</li>
            <li>Minor</li>
            <li>Non Resident Indian (NRI)</li>
            <li>Company, Partnership, HUF and LLP</li>
            <li>Glossary</li>
          </ul>
        </div>
        <div className="col-4 p-5  mb-2 mt-2">
          <h5 className=""><i class="fa-solid fa-user"></i>  Your InvestaX Account</h5>
          <ul>
            <li>Your Profile</li>
            <li>Account modification</li>
            <li>Client Master Report (CMR) and Depository Participant (DP)</li>
            <li>Nomination</li>
            <li>Transfer and conversion of securities</li>
          </ul>
        </div>
        <div className="col-4 p-5  mb-2 mt-2">
          <h5 className=""><i class="fa-solid fa-cubes-stacked"></i> Kite</h5>
          <ul>
            <li>IPO</li>
            <li>Trading FAQs</li>
            <li>Margin Trading Facility (MTF) and Margins</li>
            <li>Charts and orders</li>
            <li>Alerts and Nudges</li>
            <li>General</li>
          </ul>
        </div>
        <div className="col-4 p-5  mb-2">
          <h5 className=""><i class="fa-solid fa-wallet"></i>   Funds</h5>
          <ul>
            <li>Add money</li>
            <li>Withdraw money</li>
            <li>Add bank accounts</li>
            <li>eMandates</li>
          </ul>
        </div>
        <div className="col-4 p-5  mb-2">
          <h5 className=""><i class="fa-solid fa-terminal"></i>  Console</h5>
          <ul>
            <li>Portfolio</li>
            <li>Corporate actions</li>
            <li>Funds statement</li>
            <li>Reports</li>
            <li>Reports</li>
            <li>Profile</li>
            <li>Segments</li>
          </ul>
        </div>
        <div className="col-4 p-5  mb-2">
          <h5 className=""><i class="fa-solid fa-coins"></i> Coin</h5>
          <ul>
            <li>Understanding mutual funds and Coin</li>
            <li>Coin app</li>
            <li>Coin web</li>
            <li>Charts and orders</li>
            <li>National Pension Scheme (NPS)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default createTicket;
