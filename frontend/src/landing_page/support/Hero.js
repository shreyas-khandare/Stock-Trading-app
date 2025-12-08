import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 mb-8" id="supportWrapper">
        <h4>Support Portal</h4>
        <a className="text-center" href="@">
          Track Tickets
        </a>
      </div>
      <div className="row p-3 m-2">
        <div className="col-6 ">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="mt-3 mb-3"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
          />
          <br />
          <a href="@">Track account opening </a>
          <br />
          <a href="@">Track segment activation </a>
          <br />
          <a href="@">Intraday margins </a>
          <br />
          <a href="@">Kite user manual</a>
          <br />
        </div>
        <div className="col-6">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <a href="@">
              <li>Surveillance measure on scrips - March 2025</li>
            </a>
            <a href="@">
              <li>Latest Intraday leverages and Square-off timings</li>
            </a>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
