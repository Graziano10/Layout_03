import React, { useEffect, useState } from "react";

const Main03 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide2 = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 0 : prevSlide - 1));
  };

  const handleNextSlide2 = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === numSlides2 - 1 ? numSlides2 - 1 : prevSlide + 1
    );
  };

  const numSlides2 = 5; // Total number of slides

  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item2]");
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
          className="relative w-full p-7"
          data-carousel="slide"
        >
          <h1 className="text-tertiary mb-9 font-semibold text-center text-3xl md:text-5xl x:text-6xl">
            We Are Different
          </h1>

          <div className="relative h-full p-3 overflow-hidden rounded-lg ">
            <div data-carousel-item2>
              <div className="flex flex-col justify-center items-center gap-3 h-full x:flex-row">
                {/* Slide 1 */}

                <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg">
                  <div className="h-36 w-36 flex flex-col justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.0"
                      stroke="white"
                      class="w-20 h-20"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>

                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    earum alias minima vel nam.
                  </p>
                </div>

                {/* ---02--- */}
                <div className="flex flex-col justify-center items-center h-full my-10 text-lg">
                  <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint natus eos unde dolorem?
                  </p>
                </div>

                {/* ---03--- */}

                <div className="flex flex-col justify-center items-center h-full">
                  <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, molestiae.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2*/}
          <div data-carousel-item2>
            <div className="flex flex-col h-full ">
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg x:flex-row">
                <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg">
                  <div className="h-36 w-36 flex flex-col justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="White"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusantium eaque, amet repellendus.
                  </p>
                </div>

                {/* ---02--- */}
                <div className="flex flex-col justify-center items-center h-full my-10 text-lg">
                  <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM15 5.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zm-8.5 6a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM8.584 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm3.58-1.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem voluptatum repudiandae ad.
                  </p>
                </div>

                {/* ---03--- */}

                <div className="flex flex-col justify-center items-center h-full">
                  <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
                      <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus, molestiae.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3*/}

          <div data-carousel-item2>
            <div className="flex flex-col h-full">
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg x:flex-row">
                <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg">
                  <div className="h-36 w-36 flex flex-col justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae ad voluptatum beatae doloribus?
                  </p>
                </div>

                {/* ---02--- */}
                <div className="flex flex-col justify-center items-center h-full my-10 text-lg">
                  <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint natus eos unde dolorem?
                  </p>
                </div>

                {/* ---03--- */}

                <div className="flex flex-col justify-center items-center h-full">
                  <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odio repudiandae perspiciatis cum sit!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4*/}

          <div data-carousel-item2>
            <div className="flex flex-col h-full">
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg x:flex-row">
                <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg">
                  <div className="h-36 w-36 flex flex-col justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae ad voluptatum beatae doloribus?
                  </p>
                </div>

                {/* ---02--- */}
                <div className="flex flex-col justify-center items-center h-full my-10 text-lg">
                  <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, in!
                  </p>
                </div>

                {/* ---03--- */}

                <div className="flex flex-col justify-center items-center h-full text-lg">
                  <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5*/}
<div data-carousel-item2>
          <div className="flex flex-col h-full">
            <div
              className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg x:flex-row"
              
            >
              <div className="duration-700 ease-in-out flex flex-col justify-center items-center h-full text-lg">
                  <div className="h-36 w-36 flex flex-col justify-center items-center bg-green-500 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="white"
                      class="w-20 h-20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-center p-3 font-normal tracking-wide">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae ad voluptatum beatae doloribus?
                  </p>
                </div>

              {/* ---02--- */}
              <div className="flex flex-col justify-center items-center h-full my-10">
                <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    class="w-20 h-20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.798 7.45c.512-.67 1.135-.95 1.702-.95s1.19.28 1.702.95a.75.75 0 001.192-.91C12.637 5.55 11.596 5 10.5 5s-2.137.55-2.894 1.54A5.205 5.205 0 006.83 8H5.75a.75.75 0 000 1.5h.77a6.333 6.333 0 000 1h-.77a.75.75 0 000 1.5h1.08c.183.528.442 1.023.776 1.46.757.99 1.798 1.54 2.894 1.54s2.137-.55 2.894-1.54a.75.75 0 00-1.192-.91c-.512.67-1.135.95-1.702.95s-1.19-.28-1.702-.95a3.505 3.505 0 01-.343-.55h1.795a.75.75 0 000-1.5H8.026a4.835 4.835 0 010-1h2.224a.75.75 0 000-1.5H8.455c.098-.195.212-.38.343-.55z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-center p-3 font-normal tracking-wide">
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>

              {/* ---03--- */}

              <div className="flex flex-col justify-center items-center h-full">
                <div className="h-36 w-36 flex justify-center items-center bg-green-500 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    class="w-20 h-20"
                  >
                    <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-center p-3 font-normal tracking-wide">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. In!
                </p>
              </div>
            </div>
          </div>
          </div>

          {/* ... Repeat similar structure for other slides ... */}

          {/* Slide indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-2 left-1/2">
            {[...Array(numSlides2)].map((_, index) => (
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
            className="absolute top-[50%] left-[3%] z-30 h-auto px-4 cursor-pointer"
            data-carousel-prev
            onClick={handlePrevSlide2}
          >
            <div className="w-12 h-12 rounded-full bg-primary hover:border-4 hover:border-invert flex justify-center items-center x:w-20 x:h-20">
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
            className="absolute top-[50%] right-[3%] z-30 h-auto px-4 cursor-pointer bg-trasparent"
            data-carousel-next
            onClick={handleNextSlide2}
          >
            <div className="w-12 h-12 rounded-full bg-primary hover:border-4 hover:border-invert flex justify-center items-center x:w-20 x:h-20">
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
    </>
  );
};

export default Main03;
