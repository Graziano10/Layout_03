import Navbar from "./Navbar";

const Header = () => {
  const logoHeader02 = {
    backgroundImage:
      "url('/src/assets/646e47d24db12dab5466d03f250ec2b5-1000 (1).jpg')",
  };
  // const logoHeader02 = {
  //   backgroundImage:
  //     "url('/src/assets/free-photo-of-mare-paesaggio-natura-spiaggia (1).jpeg')",
  // };

  return (
    <>
      <Navbar />
      <div
        className="h-[48rem] bg-cover bg-center relavive z-20"
        style={logoHeader02}
      >
        <header className=" flex flex-col gap-8 justify-center items-center h-full">
          <div className="px-10 flex flex-col gap-8 justify-center items-center h-1/2">
            <h1 className="text-primary font-bold text-4xl md:text-6xl x:text-7xl text-center">
              ENJOY FREEDOM LAND
            </h1>
            {/* <p className="text-tertiary font-semibold text-lg text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              consectetur distinctio fuga consequatur quae tempora pariatur
              officia nulla totam dignissimos, quo voluptate dolores cumque
              suscipit! Numquam voluptates rem repellendus molestias.
            </p> */}
          </div>
          <div className="h-1/2 flex justify-center items-center x:h-0 x:relative">
            <div className="bg-primary w-full p-10 flex flex-col justify-center items-center gap-3 mdd:w-[50rem] mdd:flex-row mdd:gap-3 mdd:space-x-3 x:flex-row x:gap-9 x:space-x-5 x:w-auto x:h-[10rem] x:absolute x:top-[6rem] x:left-[-32rem] tracking-wider z-50">
              <select
                id="underline_select"
                className="block w-44 py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Hawai</option>
                <option value="US">Bali</option>
                <option value="CA">Mauritius</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

              <select
                id="underline_select"
                className="block w-44 py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option selected>Rooms</option>
                <option value="US">5 Badrooms</option>
                <option value="CA">6 Badrooms</option>
                <option value="FR">8 Badrooms</option>
                <option value="DE">2 Badrooms</option>
              </select>
              <input
                type="date"
                className="border-1 w-[11rem] h-10 border-b-2 border-gray-700 p-3 text-slate-400"
              />
              <input
                type="date"
                className="border-1 w-[11rem] h-10 border-b-2 border-gray-700 p-3 text-slate-400"
              />
              <div className="bg-invert w-12 h-12 flex justify-center items-center rounded-full hover:bg-red-400 mdd:h-10 x:h-12 x:ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
