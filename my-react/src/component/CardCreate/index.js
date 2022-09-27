import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../shared_components/Layout";
import axios from "axios";
import MyInput from "../MyInput";

function CardCreate() {
    const [titleInp, settitleInp] = useState("");
    const [capacityInp, setcapacityInp] = useState("");
    const [locationInp, setlocationInp] = useState("");
    const [imageInp, setImageInp] = useState("");
    const [aboutInp, setAboutInp] = useState("");
    const [priceInp, setPriceInp] = useState("");
    const [ratingErr, setratingErr] = useState("");
  
    let navigate = useNavigate();
    
 
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
        <form class="max-w-3xl mx-auto shadow boder p-4 space-y-6 mt-10">
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
          labelText={"Image URL"}
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

export default CardCreate;