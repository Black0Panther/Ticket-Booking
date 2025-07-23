import Movie from "./Movie"

const Home = ({items}) =>{
   return <>
     <div className=" min-h-[calc(100vh-70px)] overflow-hidden bg-[#1A0024">
       <div className=" max-w-6xl w-full mx-auto">
          <h2 className="text-center font-bold text-2xl mt-8 md:mt-16 mb-6 md:text-left">Trending Now</h2>
          <div className=" grid grid-cols-1 gap-2 md:grid-cols-[repeat(auto-fit,minmax(270px,1fr))]">
            <Movie items={items}></Movie>
          </div>
       </div>
     </div>
   </>
}

export default Home