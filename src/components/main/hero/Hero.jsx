import React from "react";
import hero from "../../../assets/hero.jpg";
import { Link } from "react-router";
function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Watch Movies</h1>
          <p className="mb-5">
            Discover a world of cinematic wonders with our movie streaming platform. From timeless classics to the latest blockbusters, we bring you an extensive collection of films from every genre imaginable. Whether you're a fan of heart-pounding action, side-splitting comedies, or thought-provoking dramas, our platform has something for everyone.
          </p>
          <button className="btn btn-outline btn-info"><Link to="/movies">Explore Movies</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
