import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex justify-between max-container items-center max-lg:flex-col gap-9"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] font-palanquin lg:max-w-lg font-bold">
        Subscribe for <span className="text-coral-red"> updates </span> &
        newsletter{" "}
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full font-montserrat">
        <input
          type="text"
          placeholder="subscribe to nike.com"
          className="input"
          name=""
          id=""
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="subscribe" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
