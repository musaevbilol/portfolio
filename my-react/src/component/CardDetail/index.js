import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../shared_components/Layout";
import { Link } from "react-router-dom";

function CardDetail() {
  const [data, setData] = useState();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Name/${params.id}`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Layout>
      {data &&
      
      <div className="container flex flex-col px-6 py-10 mt-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
            {data.title}
          </h1>
          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200 font-semibold text-lg border-b-2 border-red-900">
              <span className="mx-2">{data.description}</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200 border-b-2 border-red-900 font-semibold text-lg">
              <span className="mx-2">{data.about}</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200 border-b-2 border-red-900 font-semibold text-lg">
              <span className="mx-2">{data.releaseDate}</span>
            </p>
          </div>
        </div>

        <div className="w-full mt-8 bg-transparent  lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
          {data.information}
        </div>
        <div className="mt-4 mb-4">
  <Link to={`/name/update/${params.id}`}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="px-8 py-2.5 bg-blue-600 text-white font-semibold hover:bg-blue-100 border-2 hover:text-black"
  >Update</Link>
</div>
      </div>
     
      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover w-full h-full mx-auto lg:max-w-2xl"
          src={data.imageURL}
          alt="photo"
        />
      </div>
      
    </div>}
    </Layout>
  );
}

export default CardDetail;
