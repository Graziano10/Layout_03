import React, { useEffect, useState } from "react";
import Main02 from "./Main02";
import Main03 from "./Main03";

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === numSlides - 1 ? numSlides - 1 : prevSlide + 1
    );
  };

  const numSlides = 5; // Total number of slides

  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    const slideIndicators = document.querySelectorAll(
      "[data-carousel-slide-to]"
    );

    carouselItems.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });

    slideIndicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.setAttribute("aria-current", "true");
      } else {
        indicator.setAttribute("aria-current", "false");
      }
    });
  }, [currentSlide]);

  return (
    <>
      <div className="h-full bg-fourth relative z-10">
        <div
          id="default-carousel"
          className="relative w-full p-7 x:top-24"
          data-carousel="slide"
        >
          <h1 className="text-tertiary mb-9 font-semibold text-center text-3xl md:text-5xl x:text-6xl">
            See Latest Vacation Ideas
          </h1>
          <div className="relative h-56 overflow-hidden rounded-lg s:h-[20rem] md:h-96 x:h-[50rem]">
            {/* Slide 1 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="\src\assets\4ca061def4d171ffab20262accd26e6a-1000.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Slide 1"
              />
            </div>
            {/* Slide 2*/}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="\src\assets\6a1b58a2564897fd42cacf060e14ee1f-1000.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Slide 1"
              />
            </div>
            {/* Slide 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="\src\assets\fb2497a7c96ca57c250c2c38bd6502b4-1000.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Slide 1"
              />
            </div>
            {/* Slide 4 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="\src\assets\86d2862e51496f7db4cffa80f9452b75-1000.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Slide 1"
              />
            </div>
            {/* Slide 5*/}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="\src\assets\37c17c4202eec461148597a8becca327-1000.jpg"
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="Slide 1"
              />
            </div>
            {/* ... Repeat similar structure for other slides ... */}
          </div>

          {/* Slide indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-2 left-1/2">
            {[...Array(numSlides)].map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full border-2 block ${
                  index === currentSlide ? "border-invert" : "border-black"
                }`}
                aria-current={index === currentSlide ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>

          {/* Slider bcontrols */}
          <button
            type="button"
            className="absolute top-[14rem] z-30 h-auto px-4 cursor-pointer s:top-[15rem] md:top-[19rem] md:left-[3rem] x:top-[32rem] x:left-[5rem]"
            data-carousel-prev
            onClick={handlePrevSlide}
          >
            <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center x:w-20 x:h-20">
              <svg
                className="w-4 h-4 text-tertiary x:w-6 x:h-6 hover:text-invert"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </div>
          </button>
          <button
            type="button"
            className="absolute top-[14rem] right-[2rem] z-30 h-auto px-4 cursor-pointer bg-trasparent s:top-[15rem] md:top-[19rem] md:rig-[3rem] x:top-[32rem] x:right-[5rem]"
            data-carousel-next
            onClick={handleNextSlide}
          >
            <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center x:w-20 x:h-20">
              <svg
                className="w-4 h-4 text-tertiary x:w-6 x:h-6 hover:text-invert"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>


      

      {/* MAIN 02  */}
      <Main02/>
      {/* MAIN 03 */}
      <Main03/>
    </>
  );
};

export default Main;
