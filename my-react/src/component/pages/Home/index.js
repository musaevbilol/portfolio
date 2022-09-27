import { useEffect, useState } from "react";
import Layout from "../../shared_components/Layout";
import axios from "axios";
import HomePage from "../HomePage";
import Card from "../../Card";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Name")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <HomePage />
      <div className="flex justify-around my-8 ml-10 mr-12">
        <h1 className="font-semibold text-4xl text-gray-700">Card about me</h1>
        <Link className="py-2 px-6 rounded text-white bg-gray-500" to={"/name/create"}>+</Link>
        </div>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 p-8">
        {data.map((Name) => {
          return (
            <Card
              title={Name.title}
              description={Name.description}
              about={Name.about}
              id={Name.id}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default Home;
