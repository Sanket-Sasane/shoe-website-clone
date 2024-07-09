import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={680}
          alt=""
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {" "}
          <span className="text-coral-red"> Special </span> offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-start">
          Embark on a shopping journey that redefines experience with unbeatable
          deals. From premier selection to incredible savings, we offer
          unparalleled value that set us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text text-start">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="shop now" iconURL={arrowRight} />
          <Button label="learn more" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray' />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
