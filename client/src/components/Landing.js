import React from "react"
import "./Landing.css"
import Logo1 from "../../static/images/logo1.png"
import Landing1 from "../../static/images/landing1.png"
import Mentor from "../../static/images/mentor.png"
import Financial from "../../static/images/financial.png"
import Reviews from "../../static/images/reviews.png"

function Landing() {
  return (
    <div className="landing">
      {/* Landing Page 1 */}
      <div className="hero">
        <div>
          <img className="logo1" alt="logo1" src={Logo1} />
          <p>
            Create Study Cards!
          </p>
          <button>Get Started</button>
        </div>
        <img className="landing1" alt="landing1" src={Landing1} />
      </div>

      {/* Effects */}
      <div>

      </div>

      {/* Landing Page 2 */}
      <div className="hero2">
        <p>
          Create cards for anything you are studying for!{" "}
        </p>

        <button>Learn More</button>
      </div>
    </div>

  )
}

export default Landing