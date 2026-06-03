"use client";

import React, { useEffect, useState } from "react";
import CarCard from "../../components/CarCard";

const CarPage = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [carType, setCarType] = useState("All");

useEffect(() => {
  console.log("Current Search State:", search); // চেক করুন স্টেট আপডেট হচ্ছে কি না

  const delay = setTimeout(() => {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    
    const finalUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/car?search=${encodeURIComponent(search)}&type=${carType}`;
    
    console.log("Request going to:", finalUrl); 

    fetch(finalUrl)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Frontend Fetch Error:", err));
  }, 300);

  return () => clearTimeout(delay);
}, [search, carType]);


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-blue-700">
          All Cars
        </h1>
      </div>

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by car name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        />

        <select
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="All">All Types</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarPage;


// import React from "react";
// import CarCard from "./../../components/CarCard";

// const CarPage = async () => {
//   //api call kortechi backend theke sob car data niye asbo jeta database e save ache.
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`, {
//     cache: "no-store",
//   });
//   const car = await res.json();
//   // console.log(car)
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="text-center mb-10">
//         <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight sm:text-4xl uppercase relative inline-block pb-3">
//           All Cars
//         </h1>
//         <p className="mt-2 text-sm text-gray-500">
//           Explore our wide range of premium vehicles
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
//         {car && car.length > 0 ? (
//           car.map((c) => <CarCard key={c._id} car={c} />)
//         ) : (
//           <div className="col-span-full text-center py-12 text-gray-400 font-medium">
//             No cars available at the moment.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CarPage;
