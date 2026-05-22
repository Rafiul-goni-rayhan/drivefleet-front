import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { LuMapPin, LuUsers, LuFuel, LuSettings, LuChevronLeft } from "react-icons/lu";
import { FaDollarSign } from "react-icons/fa6";
import Link from "next/link";

const CarDetailesPage = async ({ params }) => {
  const { id } = await params;


  const res = await fetch(`http://localhost:5000/car/${id}`, {
    cache: 'no-store' 
  });
  
  if (!res.ok) return notFound();
  
  const car = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link href="/car" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-600 font-semibold mb-6 transition-colors group">
          <LuChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Explore</span>
        </Link>

        {/* Main Details Card */}
        <Card className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border-none">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Section: Hero Image */}
            <div className="relative h-[400px] lg:h-auto min-h-[450px]">
              <Image
                src={car.imageUrl}
                alt={car.carName}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 left-6 flex gap-2">
                <Chip 
                  variant="flat" 
                  className={`backdrop-blur-md font-bold text-white border-none ${car.availabilityStatus === "Available" ? "bg-green-500/80" : "bg-red-500/80"}`}
                >
                  {car.availabilityStatus === "Available" ? "● Available" : "● Booked"}
                </Chip>
                <Chip variant="flat" className="bg-black/40 text-white backdrop-blur-md border-none font-semibold">
                  {car.carType}
                </Chip>
              </div>
            </div>

            {/* Right Section: Information */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 uppercase">
                  {car.carName}
                </h1>
                <div className="flex items-center gap-2 text-gray-500 font-medium">
                  <LuMapPin className="text-cyan-600" size={20} />
                  <span>{car.pickupLocation}</span>
                </div>
              </div>

              {/* Custom Divider - HTML & Tailwind */}
              <div className="h-[1px] w-full bg-gray-200 my-8 opacity-60"></div>

              {/* Stats/Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-white text-cyan-600 rounded-xl shadow-sm"><LuUsers size={22}/></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Capacity</p>
                    <p className="font-bold text-gray-800">{car.seatCapacity} Seats</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-4">
                  <div className="p-3 bg-white text-blue-600 rounded-xl shadow-sm"><LuFuel size={22}/></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Fuel Type</p>
                    <p className="font-bold text-gray-800">Hybrid</p>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed italic">
                  {car.description || "No specific description provided for this vehicle."}
                </p>
              </div>

              {/* Price & Action Section */}
              <div className="mt-auto flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-gray-900 rounded-3xl shadow-lg">
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Price Per Day</p>
                  <div className="flex items-center text-white">
                    <FaDollarSign className="text-cyan-400" />
                    <span className="text-4xl font-black tracking-tighter">{car.dailyPrice}</span>
                    <span className="text-gray-400 font-medium ml-1">/day</span>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-white font-black rounded-2xl px-12 h-14 shadow-lg shadow-cyan-500/20"
                >
                  Book Now
                </Button>
              </div>

              <div className="mt-6">
                <Button variant="light" startContent={<LuSettings />} className="text-gray-400 hover:text-gray-900 font-semibold">
                    Listing Settings
                </Button>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default CarDetailesPage;