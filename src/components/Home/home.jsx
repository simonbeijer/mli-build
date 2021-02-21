import React from "react";
import "./home.scss";
import ControlledCarousel from "../Carousel/carousel";

function Home() {
  return (
    <main className="App-home container-fluid">
      <ControlledCarousel className="carousel" />
      <div className="row">
        <div className="text-center">
          <div className="col-8 mx-auto">
            <h1 className="homeH1">Middle Lake Industries</h1>
            <div className="col-8 mx-auto">
              <p>
                Welcome to middle lake industries. Since 2015 I ‘we built
                fishing lures specifically for predator fishing. On this website
                along with my Instagram and Facebook accounts I want to share my
                craft, inspire and get your creativity going. I’ll also display
                some of the lures I ‘we built and some that’s available to
                purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
