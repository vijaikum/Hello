// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page page1">
      <div className="flagTop" />
      <div className="flagCenter">
        <h1 className="country">Home Page</h1>
        <div className="otherLinks">
          <Link to="/page1">Argentina</Link>
          <Link to="/page2">Nigeria</Link>
          <p>Hi Guys Testing the automted deployment</p>
        </div>
      </div>
      <div className="flagBottom" />
    </div>
  );
};

export default Home;