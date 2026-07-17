function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic Investment Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/streaklogo2.png" alt="" />
          <p>Algo & Strategy Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/images/sensibullLogo.svg"
            alt=""
            style={{ width: "210px", height: "60px" }}
          />
          <p>Options Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "199px", height: "55px" }}
          />
          <p>Options Trading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="/images/goldenpiLogo.png"
            alt=""
            style={{ width: "220px", height: "60px" }}
          />
          <p>Bonds Tading Platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="/images/dittoL.png" alt="" />
          <p>Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-3 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
