import React from "react";

function Hero() {
  return (
    <div className="hero-wrapper h-screen w-full bg-white flex items-center justify-center overflow-hidden flex-wrap">
        <img src={`${process.env.PUBLIC_URL}/imgs/hero3.jpg`} alt='Coffee Mug' 
        className="hero-image w-[600px]"></img>
      <div className="hero-text text-black text-4xl bg-white/[0.1] w-64 py-10 text-center flex flex-col gap-10">
        <p>
          Unlock <i className="hero-text-italic text-brown-4  font-semibold">your true </i>potential with <i className="hero-text-italic text-brown-4 font-semibold">our </i>coffee
        </p>
        <h2 className="hero-button border-black border-2 p-2 w-40 text-center self-center text-lg cursor-pointer bg-brown-4/[0.7] text-black">Order now!</h2>
      </div>
    </div>
  );
}

export default Hero;
