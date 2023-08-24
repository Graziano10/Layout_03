import React, { useEffect, useState } from "react";
const Main02 = () => {
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
        <h1 className="text-tertiary p-7 font-semibold text-center text-3xl md:text-5xl x:text-6xl">
          Recent Holiday Location
        </h1>

        {/*  --- CARD --- */}
        <div className="w-full h-full x:w-full x:h-full x:grid x:grid-cols-2 x:gap-2 x:p-10 tracking-wide font-normal">
          {/* CARD 01 */}
          <div className="p-10 w-auto h-auto md:flex md:flex-col">
            <a
              href="#"
              className="flex flex-col items-center bg-primary border border-gray-200 shadow-tertiary md:flex-col"
            >
              <img
                className="bg-cover bg-center w-auto h-auto"
                src="src\assets\37c17c4202eec461148597a8becca327-1000.jpg"
                alt="Location 01"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-tertiary">
                  Thalie 5
                </h5>
                <p className="mb-3 font-normaltext-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto necessitatibus qui deleniti magni neque quia
                  quibusdam sit veritatis perferendis vitae.
                </p>
                <div className="w-auto h-auto flex justify-start items-center">
                  {/* ICON 01 */}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\bed_4731.png"
                      alt="Location 01"
                    />
                    <p className="ms-2">3</p>
                  </div>
                  {/* ICON 02*/}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\bathtub_icon_124396.svg"
                      alt="Location 01"
                    />
                    <p className="ms-2">3</p>
                  </div>
                  {/* ICON 03*/}
                  <div className="flex my-3">
                    <img
                      className="w-5 h-5 me-3"
                      src="src\assets\umbrella_vacation_summer_holiday_beach_icon_221566.svg"
                      alt="Location 01"
                    />
                  </div>
                  {/* ICON 04*/}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\tree_palm_summer_vacation_coconut_beach_island_icon_221564.svg"
                      alt="Location 01"
                    />
                  </div>
                </div>
                <button className="bg-invert hover:bg-red-500 text-start w-36 font-semibold text-primary flex justify-center items-center h-12 rounded-full">
                  BOOK NOW
                </button>
              </div>
            </a>
          </div>

          {/* CARD 02 */}

          <div className="p-10 w-full h-full">
            <a
              href="#"
              className="flex flex-col items-center bg-primary border border-gray-200 md:flex-col"
            >
              <img
                className="bg-cover bg-center w-full h-full"
                src="src\assets\OIP.jpg"
                alt="Location 02"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tighttext-tertiary">
                  Tropican House
                </h5>
                <p className="mb-3 font-normaltext-tertiary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  quia mollitia laudantium suscipit velit unde dignissimos dicta
                  fuga.
                </p>
                <div className="w-full h-full flex justify-start items-center">
                  {/* ICON 01 */}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\bed_4731.png"
                      alt="Location 01"
                    />
                    <p className="ms-2">4</p>
                  </div>
                  {/* ICON 02*/}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\bathtub_icon_124396.svg"
                      alt="Location 01"
                    />
                    <p className="ms-2">2</p>
                  </div>
                  {/* ICON 03*/}
                  <div className="flex my-3">
                    <img
                      className="w-5 h-5 me-3"
                      src="src\assets\umbrella_vacation_summer_holiday_beach_icon_221566.svg"
                      alt="Location 01"
                    />
                  </div>
                  {/* ICON 04*/}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\tree_palm_summer_vacation_coconut_beach_island_icon_221564.svg"
                      alt="Location 01"
                    />
                  </div>
                </div>
                <button className="bg-invert hover:bg-red-500 text-start w-36 font-semibold text-primary flex justify-center items-center h-12 rounded-full">
                  BOOK NOW
                </button>
              </div>
            </a>
          </div>

          {/* CARD 03 */}

          <div className="p-10 w-full h-full">
            <a
              href="#"
              className="flex flex-col items-center bg-primary border border-gray-200 md:flex-col"
            >
              <img
                className="bg-cover bg-center w-full h-full"
                src="src\assets\OIP (1).jpg"
                alt="Location 03"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tighttext-tertiary">
                  Hawaii Resort
                </h5>
                <p className="mb-3 font-normaltext-tertiary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi nostrum sint unde animi perferendis nesciunt
                  voluptate inventore.
                </p>
                <div className="w-full h-full flex justify-start items-center">
                  {/* ICON 01 */}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\bed_4731.png"
                      alt="Location 01"
                    />
                    <p className="ms-2">3</p>
                  </div>
                  {/* ICON 02*/}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\bathtub_icon_124396.svg"
                      alt="Location 01"
                    />
                    <p className="ms-2">2</p>
                  </div>
                  {/* ICON 03*/}
                  <div className="flex my-3">
                    <img
                      className="w-5 h-5 me-3"
                      src="src\assets\umbrella_vacation_summer_holiday_beach_icon_221566.svg"
                      alt="Location 01"
                    />
                  </div>
                  {/* ICON 04*/}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\tree_palm_summer_vacation_coconut_beach_island_icon_221564.svg"
                      alt="Location 01"
                    />
                  </div>
                </div>
                <button className="bg-invert text-start w-36 font-semibold text-primary flex justify-center items-center h-12 rounded-full hover:bg-red-500">
                  BOOK NOW
                </button>
              </div>
            </a>
          </div>

          {/* CARD 04 */}

          <div className="p-10 w-full h-full">
            <a
              href="#"
              className="flex flex-col items-center bg-primary border border-gray-200 md:flex-col"
            >
              <img
                className="bg-cover bg-center h-auto w-auto"
                src="src\assets\saadiyat-beach-club-abu-dhabi-8.jpg"
                alt="Location 04"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tighttext-tertiary">
                  Hilton
                </h5>
                <p className="mb-3 font-normal text-tertiary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore placeat, ipsam eum repudiandae fuga eius impedit fugit
                  pariatur.
                </p>
                <div className="w-full h-full flex justify-start items-center">
                  {/* ICON 01 */}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\bed_4731.png"
                      alt="Location 01"
                    />
                    <p className="ms-2">5</p>
                  </div>
                  {/* ICON 02*/}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\bathtub_icon_124396.svg"
                      alt="Location 01"
                    />
                    <p className="ms-2">5</p>
                  </div>
                  {/* ICON 03*/}
                  <div className="flex my-3">
                    <img
                      className="w-5 h-5 me-3"
                      src="src\assets\umbrella_vacation_summer_holiday_beach_icon_221566.svg"
                      alt="Location 01"
                    />
                  </div>
                  {/* ICON 04*/}
                  <div className="flex my-3 pe-3">
                    <img
                      className="w-5 h-5"
                      src="src\assets\tree_palm_summer_vacation_coconut_beach_island_icon_221564.svg"
                      alt="Location 01"
                    />
                  </div>
                </div>
                <button className="bg-invert text-start w-36 font-semibold text-primary flex justify-center items-center h-12 rounded-full hover:bg-red-500">
                  BOOK NOW
                </button>
              </div>
            </a>
          </div>
          {/* --- */}
        </div>
      </div>
    </>
  );
};

export default Main02;
