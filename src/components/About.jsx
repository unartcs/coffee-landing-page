import React from "react";

function About() {
  return (
    <div className="about-wrapper flex  justify-center items-center text-black text-center gap-20 h-full flex-wrap h-[50vh]">
      <div className="about-box flex flex-col gap-10 bg-brown-4/[0.3] w-[200px] rounded-md h-[300px] items-center justify-center p-1">
        <img src={`${process.env.PUBLIC_URL}/imgs/qa.png`} width='100px' alt="Quality"></img>
        <p className="about-box-text w-[160px]">Guaranteed the highest quality of organic coffee</p>
      </div>
      <div className="about-box flex flex-col gap-10 bg-brown-4/[0.3] w-[200px] rounded-md h-[300px] items-center justify-center p-1">
        <img src={`${process.env.PUBLIC_URL}/imgs/price.png`} width='100px' alt="Prices"></img>
        <p className="about-box-text w-[160px]">The cheapest and best coffee in the world - by a mile!</p>
      </div>
      <div className="about-box flex flex-col gap-10 bg-brown-4/[0.3] w-[200px] rounded-md h-[300px] items-center justify-center p-1">
        <img src={`${process.env.PUBLIC_URL}/imgs/delivery.png`} width='100px' alt="Delivery"></img>
        <p className="about-box-text w-[160px]">Fastest and eco friendly delivery all across the globe</p>
      </div>
      <div className="about-box flex flex-col gap-10 bg-brown-4/[0.3] w-[200px] rounded-md h-[300px] items-center justify-center p-1">
        <img src={`${process.env.PUBLIC_URL}/imgs/service.png`} width='100px' alt="Service"></img>
        <p className="about-box-text w-[160px]">Professional service team that works 24/7 around the clock</p>
      </div>
    </div>
  );
}

export default About;
