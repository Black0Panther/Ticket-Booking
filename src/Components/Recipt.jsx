import { useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Receipt = () => {
  const { state } = useLocation();
  const nav = useNavigate();
  return (
    <div className=" mx-auto w-full max-w-xl mt-6 flex flex-col gap-6">
          <p onClick={()=>nav('/')} className="text-2xl font-bold text-gray-800"><IoMdArrowRoundBack /></p>
      <h2 className="text-xl font-bold">🎟️ Booking Receipt</h2>
      <p>Payment ID: {state.paymentId}</p>
      <p>Seat: {state.seat}</p>
      <p>User: {state.username}</p>
    </div>
  );
};

export default Receipt;
