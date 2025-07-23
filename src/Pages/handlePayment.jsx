import { db } from "../firebase";
import { ref, set } from "firebase/database";



export const handlePayment = (seat,user,navigate) => {
  

  const options = {
    key: "rzp_test_oie2Vyygz0RujK",
    amount: 50000,
    currency: "INR",
    name: "Movie Booking",
    description: "Test Transaction",
    handler: function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      // You can redirect or store booking here
            const bookingId = response.razorpay_payment_id;
      const seatNumber = seat[0]; // example seat — you can make this dynamic
      const userName = user; // you can also pass this dynamically

      // Realtime Database path: /bookings/{bookingId}
      set(ref(db, "bookings/" + bookingId), {
        seat: seatNumber,
        user: userName,
        paymentId: bookingId,
        status: "confirmed",
      })
        .then(() => {
          console.log("Booking saved in Firebase");
          // You can also redirect to a confirmation page here
        })
        .catch((error) => {
          console.error("Error saving booking:", error);
        });
navigate("/receipt", {
  state: {
    paymentId: bookingId,
    seat: seat[0],
    username: user,
  },
});
    },

    prefill: {
      name: "Test User",
      email: "test@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};