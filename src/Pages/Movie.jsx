import { Link } from "react-router-dom"

const Movie=({items})=>{
    return <>
     <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-3 lg:grid-cols-4 gap-12 px-4">
     {items.map((movie,idx)=>(
<Link to={`/movies/${movie.id}`}>
 <div className="w-60 rounded-2xl flex flex-col items-start hover:p-2 hover:rounded">
       <img className="w-56 h-64 hover:opacity-75 " src={movie.image} alt="" />
       <div class="p-2 text-left">
    <h2 class="text-lg font-semibold text-gray-800">{movie.name}</h2>
    <p class="text-sm text-gray-500">{movie.category} | {movie.language}</p>
    <p class="text-sm text-gray-500">{movie.duration}</p>
    <p class="text-sm text-yellow-500 font-medium">⭐ {movie.rating}</p>
    <button class="mt-2 bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">View Details</button>
  </div>
     </div>
</Link>
     ))}
    </div>

    </>
}

export default Movie