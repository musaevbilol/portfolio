import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* ---------------------------------------- */}

      <div className="w-full h-screen bg-[#171717]">
        <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full ">
          <p className="text-white">Hi, my name is</p>
          <h1 className="text-4xl sm:text-4xl font-bold text-white">
            Bilol Musaev
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            I'm <span className="text-red-700">Frontend</span> Developer
          </h2>
          <p className="text-white py-4 max-w-[780px]">
            I'm Frontend developer specializing in building and ocassionally
            designing exceptional digital experiences. Currently, i am focused
            on building responsive Frontend web applications .
          </p>
          <div>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-black font-semibold">
              View Work
              <HiArrowNarrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* ------------------ */}
      <section className=" text-gray-100 bg-[#050505]">
        <div className="max-w-6xl mx-auto px-5 py-24 ">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-center sm:text-2xl sm:leading-none md:text-4xl">
              LEARN MORE
            </h1>
            {/* <p className="lg:w-1/2 w-full leading-relaxed text-base">
                  Get all the latest updates from the Jaguar family, as they
                  happen.
                </p> */}
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6   hover:bg-white hover:text-black">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-200  mb-4"></div>
                <h2 className="text-lg font-bold title-font mb-2">
                  FRONTEND DEVELOPER
                </h2>
                <p className="leading-relaxed text-base">
                  You will begin to realise why this exercise is called the
                  Dickens Pattern with reference to the ghost showing Scrooge
                  some different futures
                </p>
                <div className="text-center mt-2 leading-none flex justify-between w-full">
                  <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                    <Link className="hover:text-red-900" to="/">
                      DISCOVER NOW
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 p-6   hover:bg-white hover:text-black">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4 italic"></div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  PERSONAL DETAILS
                </h2>
                <p className="leading-relaxed text-base">
                  Here, I focus on a range of items and features that we use in
                  life without giving them a second thought. such as Coca Cola.
                </p>

                <div className="text-center mt-2 leading-none flex justify-between w-full">
                  <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                    <Link to="/">DISCOVER NOW</Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4 ">
              <div className="border border-gray-300 p-6  hover:bg-white hover:text-black">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100  mb-4"></div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  INFORMATION
                </h2>
                <p className="leading-relaxed text-base">
                  Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.I have a
                  experiences from Frontend
                </p>

                <div className="text-center mt-2 leading-none flex justify-between w-full ">
                  <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                    <Link to="/">DISCOVER NOW</Link>
                  </span>
                  <span className=" inline-flex items-center leading-none text-sm"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------- */}
 


    </>
  );
}

export default HomePage;
