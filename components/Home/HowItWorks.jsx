import React from "react";

function HowItWorks() {
  return (
    <div className="container mx-auto md:px-14 px-5 mt-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div>
          <p className="font-lato md:text-3xl font-semibold text-2xl md:text-start text-center underline underline-offset-2">
            How it works
          </p>
          <div className="mt-6">
            <p className="font-lato font-semmibold md:text-xl text-lg text-gray-700">
              Its Easy, <br />
              <span className="font-ssp font-medium md:text-sm text-xs text-gray-700">
                Explore our best product in all time. Select your product, add
                to the cart. Place your order. And tdatda. You have booked your
                service at your doorstep. Second Step will be that you will get
                confirmation email from us and one of our representive will
                visit at your doorstep. And check with requirement. Third Step
                will be the representive will quote you the amount. Fourth Step
                will be the payment, if you agry working with us the
                representive will give contract form to deal with our company.
                Our policies is that you have pay half money in advance. Fifth
                step will be that you pay the representive half amount, with any
                mode, online or offline depends on your requirment
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center p-5">
          <p className="text-2xl font-lato font-semibold">Book Our Services</p>
          <button className="border px-8 py-3 rounded-md hover:bg-black hover:text-white bg-white text-black transition ease-in-out">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
