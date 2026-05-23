"use client";

import { Button, Card } from "@heroui/react";
import React, { useState } from "react";
import { DateField, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaDollarSign } from "react-icons/fa6";

// ১. প্রপস হিসেবে 'car' নেওয়া হয়েছে কারণ ভেতরে আপনি কার-এর ডেটা ব্যবহার করছেন
const BookingCard = ({ car }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);

  // যদি car অবজেক্ট না আসে, তাহলে ক্র্যাশ এড়াতে সেফগার্ড
  if (!car) return null;

  // ২. আপনার ডেটাবেজের ফিল্ডের সাথে মিল রেখে ডিস্ট্রাকচারিং ঠিক করা হয়েছে
  const { carName, imageUrl, dailyPrice, pickupLocation, carType, _id } = car;

  // HeroUI এর Date অবজেক্টকে স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট ডেটে রূপান্তর করার ফাংশন
  const formatHeroUIDate = (dateObj) => {
    if (!dateObj) return null;
    if (dateObj.year && dateObj.month && dateObj.day) {
      return new Date(dateObj.year, dateObj.month - 1, dateObj.day);
    }
    return new Date(dateObj);
  };

  const handleBooking = async () => {
    console.log("button clicked");
    console.log("current user", user);
    console.log("র ডেট (HeroUI):", departureDate);

    if (!user) {
      toast.error("Please login first to book a car!");
      return;
    }
   

    // if (!departureDate) {
    //   toast.error("Please select a departure date!");
    //   return;
    // }
 console.log("hello");
    const formattedDate = formatHeroUIDate(departureDate);
    console.log("ফরম্যাটেড জাভাস্ক্রিপ্ট ডেট:", formattedDate);

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
      departureDate: formattedDate,
    };

    console.log("object for backend data ", bookingData);

    try {
      const sessionToken =
        localStorage.getItem("better-auth.session_token") || "";

      console.log("fetch calling...");

          const {data:tokenData} = await authClient.token()
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(bookingData),
      });

      console.log("server response status:", res.status);

      if (!res.ok) {
        const errText = await res.text();
        console.error("error text from server:", errText);
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();
      console.log("successful booking response data:", data);
      toast.success("You booked successfully!");
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Card className="rounded-none border mt-5 p-4">
      <p className="text-sm text-muted">Starting from</p>
      {/* ৪. ${price} এর বদলে ${dailyPrice} করা হয়েছে */}
      <h2 className="text-3xl font-bold text-cyan-500">${dailyPrice}</h2>
      <p className="text-sm text-muted mb-4">per day</p>

     
      <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gray-900 rounded-3xl shadow-lg">
        <div className="text-center sm:text-left">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">
            Price Per Day
          </p>
          <div className="flex items-center text-white">
            <FaDollarSign className="text-cyan-400" />
            <span className="text-4xl font-black tracking-tighter">
              {car.dailyPrice}
            </span>
            <span className="text-gray-400 font-medium ml-1">/day</span>
          </div>
        </div>
        <Button
         onClick={handleBooking}
          size="lg"
          className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-white font-black rounded-2xl px-12 h-14 shadow-lg shadow-cyan-500/20"
        >
          Book Now
        </Button>
      </div>
      
    </Card>
  );
};

export default BookingCard;
