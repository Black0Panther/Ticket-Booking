import { useParams } from "react-router-dom"
import { useState } from "react";
import { handlePayment } from "./handlePayment"; 
import { useNavigate } from "react-router-dom";

const Booking = ({movieItems}) => {
  const navigate = useNavigate();
  const {movieId} = useParams();
const movie = movieItems.find((s) => s.id === movieId);

  const [selectedSeats, setSelectedSeats] = useState([]);

const row = 6;
const col = 8;
 const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter(s => s !== seatId) : [...prev, seatId]
    );
  };

   const handleClick = () => {
    handlePayment(selectedSeats, "Alex", navigate);
  };
    return <>
      <div className="min-h-[calc(100vh-80px)] bg-gray-100">
        <h1 className="text-2xl font-bold text-center mb-6 mt-4">{movie.name} : Book Your seat</h1>
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
        <div className="bg-gray-300 rounded font-black px-10 py-1 mb-6">Screen</div>
        {/* seats */}
        <div className="grid grid-cols-8 gap-4 cursor-pointer">
       {[...Array(row * col)].map((_, i) => {
            const seatId = `S${i + 1}`;
            const isSelected = selectedSeats.includes(seatId);

            return (
              <div
                key={seatId}
                onClick={() => toggleSeat(seatId)}
                className={`w-10 h-10 rounded cursor-pointer flex items-center justify-center 
                ${isSelected ? 'bg-green-500' : 'bg-gray-400'} hover:bg-green-400`}
              >
                {seatId}
              </div>
            );
          })}
        </div>
  {selectedSeats.length > 0 && (
          <button
            className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            onClick={() => {
            //   alert(`Proceeding with seats: ${selectedSeats.join(", ")}`);
        console.log("Selected Seat:", selectedSeats);

            handleClick()
              // navigate to checkout page or call API
            }}
          >
            Proceed to Checkout
          </button>
        )}
        </div>
      </div>
    </>
}

export default Booking 