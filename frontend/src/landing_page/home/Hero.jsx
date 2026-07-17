function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="/images/homeHero.png" alt="" className="mb-5" />
        <h1 className="mt-5">Invest in everything.</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds and
          more.
        </p>
        <button
          className=" p-2 fs-5 mb-5 btn btn-primary"
          style={{ width: "17%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
