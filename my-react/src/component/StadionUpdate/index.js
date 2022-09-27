import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyInput from "../MyInput";
import Layout from "../shared_components/Layout";

function StadionUpdate() {
  const [titleInp, settitleInp] = useState("");
  const [capacityInp, setcapacityInp] = useState("");
  const [locationInp, setlocationInp] = useState("");
  const [imageInp, setImageInp] = useState("");
  const [aboutInp, setAboutInp] = useState("");
  const [priceInp, setPriceInp] = useState("");
  const [ratingErr, setratingErr] = useState("");

  let navigate = useNavigate();

  const [data, setData] = useState();
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Name/${params.id}`)
      .then(function (response) {
        settitleInp(response.data.title);
        setcapacityInp(response.data.capacity);
        setImageInp(response.data.imageURL);
        setlocationInp(response.data.location);
        setPriceInp(response.data.price);
        // setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onCreate = (e) => {
    e.preventDefault();
    if (capacityInp > 10000 || capacityInp < 1) {
      setratingErr("10 and 100 between");
      return;
    }

    axios
      .post("http://localhost:3000/Name", {
        title: titleInp.trim(),
        capacity: capacityInp,
        location: locationInp.trim(),
        imageURL: imageInp.trim(),
        about: aboutInp.trim(),
        price: priceInp,
      })
      .then(function (response) {
        navigate("/");
        console.log(response);
      })
      .catch(function (error) {
        alert("something went wrong please try again");
      });
  };

  return (
    <Layout>
      <form class="max-w-3xl mx-auto shadow boder p-4 space-y-6 mt-28">
        <MyInput
          labelText={"Title"}
          myValue={titleInp}
          mySetValueChange={settitleInp}
          type={"text"}
        />
        <div>
          <MyInput
            labelText={"Capacity"}
            myValue={capacityInp}
            mySetValueChange={setcapacityInp}
            type={"number"}
          />
          {ratingErr && <p className="text-red-700">{ratingErr}</p>}
        </div>
        <MyInput
          labelText={"Location"}
          myValue={locationInp}
          mySetValueChange={setlocationInp}
          type={"text"}
        />
        <MyInput
          labelText={"ImageURL"}
          myValue={imageInp}
          mySetValueChange={setImageInp}
          type={"text"}
        />
        <MyInput
          labelText={"About"}
          myValue={aboutInp}
          mySetValueChange={setAboutInp}
          type={"text"}
        />
        <MyInput
          labelText={"Price"}
          myValue={priceInp}
          mySetValueChange={setPriceInp}
          type={"number"}
        />
        <div className="flex justify-end  ">
          <button
            onClick={onCreate}
            className="mx-2 my-2 transition duration-150 ease-in-out hover:bg-white hover:text-black bg-black rounded border border-gray-600 text-white px-6 py-2 text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Create
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default StadionUpdate;
