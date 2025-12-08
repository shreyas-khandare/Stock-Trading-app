import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The InvestaX Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" alt="smallcase" />
          <p className="text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="streak"
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/dittoLogo.png"
            alt="smallcase"
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sensibull"
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/tijoriLogo.svg"
            alt="tijori"
            style={{ width: "40%" }}
          />
          <p className="text-muted text-small">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
