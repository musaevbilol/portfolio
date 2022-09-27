import Layout from "../../shared_components/Layout";

function About() {
  return (
    <Layout>
      <>
      
        {/* ---------------- */}
        <div
          name="about"
          className="w-full h-screen bg-[#171717] text-gray-300"
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-6xl font-bold inline border-b-4 border-red-800">
                  About
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>
                  Hi. I'm Clint, nice to meet you. Please take a look around.
                </p>
              </div>
              <div>
                <p>
                  I am passionate about building excellent software that
                  improves the lives of those around me. I specialize in
                  creating software for clients ranging from individuals and
                  small-businesses all the way to large enterprise corporations.
                  What would you do if you had a software expert available at
                  your fingertips?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////// */}

        <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <h1 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                Front-end Web Developer
              </h1>
              <div class="mt-8 space-y-5">
                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span class="mx-2">Clean and Simple Layout</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span class="mx-2">Just Copy Paste Codeing</span>
                </p>

                <p class="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span class="mx-2">Easy to Use</span>
                </p>
              </div>
            </div>

            <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              
            </div>
          </div>

          <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src="./media/front.jpeg"
              alt="glasses photo"
            />
          </div>
        </div>
       
      </>
    </Layout>
  );
}

export default About;
