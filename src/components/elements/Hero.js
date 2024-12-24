import React from "react";
import NavBar from "./NavBar";
import Resume from "../../resume.json";


function Hero() {
  return (
    <section className="hero is-dark is-fullheight has-bg-image">
      <div className="hero-head">
        <NavBar />
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="subtitle is-5 has-text-weight-light text-outline">I'm a</p>
          <h1 className="title text-outline">{Resume.basics.label}</h1>
          <h2 className="subtitle text-outline">
            {Resume.basics.location.region}, {Resume.basics.location.country}
          </h2>
        </div>
      </div>
      <div className="hero-foot" style={{ paddingBottom: "20px" }}>
        <div className="columns is-mobile">
          <div className="column"></div>
          {Resume.basics.profiles.map((value, index) => (
            <div key={index} className="column">
              <a href={value.url} target="_blank" rel="noopener noreferrer">
                <span className={value.x_icon}></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;