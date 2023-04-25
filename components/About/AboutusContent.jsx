import React from "react";

function AboutusContent() {
  return (
    <div className="container mx-auto lg:px-14 px-5 mt-10">
      <h1 className="text-center font-ssp text-3xl font-semibold text-black">
        Welcome to <span className="text-blue-500">Fabricatology !</span>
      </h1>
      <div className="flex flex-col gap-3 ">
        <p className="font-lato font-medium text-base mx-10 text-center">
          The leading metal fabricator in the industry. We specialize in
          creating high-quality metal products that meet the unique needs of our
          clients.
        </p>
        <p className="font-lato font-medium text-base mx-10 text-center">
          With years of experience and a commitment to excellence, we have
          become the go-to choice for businesses and individuals looking for
          reliable and professional metal fabrication services.
        </p>
      </div>
    </div>
  );
}

export default AboutusContent;
