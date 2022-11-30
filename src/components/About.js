import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About US</h3>
            <h1>WELCOME TO THE CRUNCH GYM</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              error at facere quo dolores cumque aliquid dolore. lets fit with
              us and pay to us.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
              <div className="about__img">
                  <img src="/img/gym.jpg" alt="GYM" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
