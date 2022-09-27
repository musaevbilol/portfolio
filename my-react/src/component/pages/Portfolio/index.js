import Layout from "../../shared_components/Layout";

function Portfolio() {
  return (
    <Layout>
   <div className="sm:mb-[10px] mt-[60px]">
   <img
        src="./media/back3.jpg"
        className=" md:h-96 object-cover w-full bg-cover bg-center p-4"
      ></img>
   </div>
{/* ---------image----- */}

      <div name="skills" className="w-full h-[870px] bg-[#171717] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold text-[#075985]">Skills</p>
            <p className="py-4 text-4xl font-bold">
              // These are the technologies I've worked with
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src="./media/html.png"
                alt="html icon"
              />
              <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto mt-2"
                src="./media/css2.png"
                alt=" icon"
              />
              <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src="./media/java.png"
                alt="javascript icon"
              />
              <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src="./media/react2.png"
                alt="react js icon"
              />
              <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src="./media/git2.png"
                alt="github icon"
              />
              <p className="my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src="./media/next1.png"
                alt="nextjs icon"
              />
              <p className="my-4">NEXT js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto mt-6"
                src="./media/t.png"
                alt="nextjs icon"
              />
              <p className="my-4">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img
                className="w-20 mx-auto"
                src="./media/netlify .png"
                alt="nextjs icon"
              />
              <p className="my-4">Netlify</p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------card--------- */}


    </Layout>
  );
}

export default Portfolio;
