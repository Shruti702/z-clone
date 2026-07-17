function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-1 mb-5">Trust with Confidence!</h1>
          <h2 className="fs-3">Customer-first Always:</h2>
          <p className="text-muted">
            That's why 1.3+ crores customer trust Zerodha with ₹3.5+ Lakh Crores
            worth of equity investments.
          </p>
          <h2 className="fs-3">No spams or gimmicks:</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-3">The Zerodha Universe:</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offfer you tailored services specific to your
            needs.
          </p>
          <h2 className="fs-3">Do better with Money:</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="/images/ecosystem.png" alt="" style={{ width: "100%" }} />
          <div className="text-center">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our Products
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite Demo
              <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
