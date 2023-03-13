import React from "react";
import Timer from "./Timer";
import Typed from "react-typed";
import Carousel from "./Carousel";

const Featured = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">
          <Typed
            strings={["Sherin Valestrand", "Web Developer", "Thank you for your Attention!"]}
            typeSpeed={50}
            backSpeed={90}
            loop
          />
        </div>
      </div>
  {/*     <Timer /> */}
    </div>
  );
};

export default Featured;
