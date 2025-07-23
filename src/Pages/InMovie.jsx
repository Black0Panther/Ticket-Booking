
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const InMovie=({movieItems})=>{

const nav = useNavigate();
// console.log("storeId:", storeId);
// console.log("items:", items);
// console.log("store:", store1);

// const [query, setQuery] = useState("");

//   const filteredItems = storeProducts.filter((item) =>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );
  const {movieId} = useParams();
const movie1 = movieItems.find((s) => s.id === movieId);
if (!movie1) {
  return <div className="text-center text-red-500 mt-10">Movie not found</div>;
}

   return <>
    
    <div className="min-h-[calc(100vh-70px)] bg-[#F8FAFC]  ">
    <div className="max-w-6xl m-auto  flex flex-col p-10 gap-5">
        <div className="flex flex-col gap-4">
        <p onClick={()=>nav('/')} className="text-2xl font-bold text-gray-800"><IoMdArrowRoundBack /></p>
       </div>
       <div className="flex flex-col items-center md:flex-row md:items-start gap-24  px-32 mt-6 ">
       <img className="w-80" src={movie1.image} alt="" />
        <div className="flex flex-col gap-8  max-w-xl p-10"> 
       <p className="text-xl font-semibold  tracking-widest">{movie1.name}</p>

    <p class="text-md text-gray-500  tracking-widest">Category : {movie1.category}</p>
        <p class="text-md text-gray-500 tracking-widest">Language : {movie1.language}</p>
    <p class="text-md text-gray-500  tracking-widest">Duration : {movie1.duration}</p>
    <p class="text-md text-yellow-500 font-medium  tracking-widest">Rating : ⭐ {movie1.rating}</p>
    <button onClick={() => window.location.href = `/book/${movie1.id}`} class="mt-2 bg-indigo-600 text-white px-3 rounded hover:bg-indigo-700 py-2">Book Now</button>
       </div>
       </div>
      

    </div>

    </div>
 
    </>
}

export default InMovie