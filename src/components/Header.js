import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
        <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>CRUNCH</h3>
            <h1>LET US SHAPE YOU</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus distinctio omnis exercitationem
            </p>
            <div className="banner__btn">
                <a href="" className="btn btn-smart">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
