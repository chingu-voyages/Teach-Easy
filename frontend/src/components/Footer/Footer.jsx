import React from "react";

const Footer = () => {
  return (
    <div className="section4 bg-[#19004E] text-white">
      <div className="container px-5 m-auto lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px] h-full">
        <h2 className="text-4xl sm:text-3xl lg:text-5xl text-center dark:text-white py-10 font-semibold">
          Teach easy
        </h2>
        <div className="w-full md:px-[20%] flex flex-wrap gap-[7%] py-14 items-center justify-center justify-self-center">
          <div className="text-3xl">About Us</div>
          <div className="text-3xl">Help</div>
          <div className="text-3xl">Privacy</div>
          <div className="text-3xl">Contact Us</div>
        </div>
        <div className="w-full flex flex-wrap gap-[5%] py-14 items-center justify-center md:justify-between">
          <div className="">Facebook</div>
          <div className="">tw</div>
          <div className="">link</div>
          <div className="">github</div>
        </div>
        <div className="content w-full md:w-[50%] md:order-1 text-center">
          <p className="mt-6 text-lg lg:text-xl text-center md:text-left max-w-3xl mx-auto dark:text-slate-400">
            Copyright &copy; 2022 v41-bears-team-27 at Chingu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
