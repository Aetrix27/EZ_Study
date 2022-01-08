import React from "react"
import "./Landing.css"

function Landing() {
  return (
    <div className="landing">
      {/* Landing Page 1 <img className="logo1" alt="logo1" src={Logo1} />*/}
      <div className="hero">
        <div>
          <p>
            Create Study Cards!
          </p>
          <button>Get Started</button>
        </div>
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