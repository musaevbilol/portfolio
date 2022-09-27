import { Link } from "react-router-dom";



function Card({title,description,about,id}) {
    return ( 
        <Link to={`Name/${id}`}>
        <div className="flex items-center justify-center h-screen bg-gradient-to-br ">
   <div className=" font-semibold text-center rounded-3xl border shadow-2xl p-12 max-w-xs">
     <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src="./media/mylogo.png" alt="logo"/>
     <h1 className="text-lg text-black">{title}</h1>
     <h3 className="text-sm text-gray-700 ">{description}</h3>
     <p className="text-xs text-gray-700 mt-4">{about}</p>
     <button className="bg-black rounded-lg border-2 hover:text-black hover:bg-white px-8 py-2 mt-8  text-gray-100 font-semibold uppercase tracking-wide">Hire Me</button>
   </div>
 </div>
        </Link>
     );
}

export default Card;