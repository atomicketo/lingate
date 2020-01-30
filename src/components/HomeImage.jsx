import React from "react";

const HomeImage = () => {
  return (
    <section
      id="hero"
      className="blue lighten-4"
      style={{
        backgroundImage:
          "url(" +
          "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
          ")"
      }}
    >
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <p className="flowtext hide-on-small-only">
            We give your business an internet presence
          </p>
          <h3>Develop, Deploy, Done</h3>

          <p className="big">
            We build your website using cutting edge frameworks
            <br />
            entirely customized and made to order
          </p>

          <a className="btn waves-light waves-effect m-r-16">Features</a>
          <a className="btn waves-light waves-effect">Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default HomeImage;
