"use client";

import { Button, Card } from "@heroui/react";
import React from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa6";

const BookingCard = ({ car }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (!car) return null;

  const { carName, imageUrl, dailyPrice, pickupLocation, carType, _id } = car;

  const handleBooking = async () => {
 
    if (!user) {
      toast.error("Please login first to book a car!");
      return;
    }

    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      carId: _id,
      carName: carName,
      price: dailyPrice,
      imageUrl: imageUrl,
      pickupLocation: pickupLocation,
      carType: carType,
    };

    try {
      const tokenRes = await authClient.token();
      const token = tokenRes?.data?.token || tokenRes?.token;

      if (!token) {
        toast.error("Authentication failed. Please login again.");
        return;
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(bookingData),
      });

      if (res.status === 403) {
        toast.error("Forbidden: You don't have permission.");
        return;
      }

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to book");
      }

      toast.success("You booked successfully!");
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error(error.message || "Something went wrong.");
    }
  };

  return (
    <Card className="rounded-xl border shadow-md mt-5 p-6 bg-white">
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-medium italic">Starting from</p>
        <h2 className="text-4xl font-black text-cyan-600 tracking-tight">
          ${dailyPrice} <span className="text-sm text-gray-400 font-normal">/day</span>
        </h2>
      </div>

      <div className="mt-4 flex flex-col gap-4 p-5 bg-gray-900 rounded-2xl">
        <div className="flex flex-col">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            Price Estimate
          </p>
          <div className="flex items-center text-white">
            <FaDollarSign className="text-cyan-400 text-xl" />
            <span className="text-4xl font-black tracking-tighter">
              {dailyPrice}
            </span>
          </div>
        </div>

        <Button
          onClick={handleBooking}
          size="lg"
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-xl h-14 shadow-lg shadow-cyan-500/20 transition-transform active:scale-95"
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default BookingCard;

// "use client";

// import { Button, Card } from "@heroui/react";
// import React, { useState } from "react";
// import { DateField, Label } from "@heroui/react";
// import { authClient } from "@/lib/auth-client";
// import toast from "react-hot-toast";
// import { FaDollarSign } from "react-icons/fa6";

// const BookingCard = ({ car }) => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;
//   const [departureDate, setDepartureDate] = useState(null);

//   if (!car) return null;

//   const { carName, imageUrl, dailyPrice, pickupLocation, carType, _id } = car;

//   const formatHeroUIDate = (dateObj) => {
//     if (!dateObj) return null;
//     if (dateObj.year && dateObj.month && dateObj.day) {
//       return new Date(dateObj.year, dateObj.month - 1, dateObj.day);
//     }
//     return new Date(dateObj);
//   };

//   const handleBooking = async () => {
//     console.log("button clicked");
//     console.log("current user", user);

//     if (!user) {
//       toast.error("Please login first to book a car!");
//       return;
//     }
//  console.log("hello");

//     const bookingData = {
//       userId: user?.id,
//       userImage: user?.image,
//       userName: user?.name,
//       carId: _id,
//       carName: carName,
//       price: dailyPrice,
//       imageUrl: imageUrl,
//       pickupLocation: pickupLocation,
//       carType: carType,
//     };

//     console.log("object for backend data ", bookingData);

//     try {
//       const sessionToken =
//         localStorage.getItem("better-auth.session_token") || "";

//       console.log("fetch calling...");

//           const {data:tokenData} = await authClient.token()
//       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//           authorization: `Bearer ${tokenData?.token}`
//         },
//         body: JSON.stringify(bookingData),
//       });

//       console.log("server response status:", res.status);

//       if (!res.ok) {
//         const errText = await res.text();
//         console.error("error text from server:", errText);
//         throw new Error(`Server responded with status ${res.status}`);
//       }

//       const data = await res.json();
//       console.log("successful booking response data:", data);
//       toast.success("You booked successfully!");
//     } catch (error) {
//       console.error("Booking Error:", error);
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <Card className="rounded-none border mt-5 p-4">
//       <p className="text-sm text-muted">Starting from</p>
//       <h2 className="text-3xl font-bold text-cyan-500">${dailyPrice}</h2>
//       <p className="text-sm text-muted mb-4">per day</p>

     
//       <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gray-900 rounded-3xl shadow-lg">
//         <div className="text-center sm:text-left">
//           <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">
//             Price Per Day
//           </p>
//           <div className="flex items-center text-white">
//             <FaDollarSign className="text-cyan-400" />
//             <span className="text-4xl font-black tracking-tighter">
//               {car.dailyPrice}
//             </span>
//             <span className="text-gray-400 font-medium ml-1">/day</span>
//           </div>
//         </div>
//         <Button
//          onClick={handleBooking}
//           size="lg"
//           className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-white font-black rounded-2xl px-12 h-14 shadow-lg shadow-cyan-500/20"
//         >
//           Book Now
//         </Button>
//       </div>
      
//     </Card>
//   );
// };

// export default BookingCard;
