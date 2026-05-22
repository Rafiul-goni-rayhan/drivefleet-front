import { Button } from "@heroui/react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import Link from "next/link";

const CarCard = ({ car }) => {
 
  const { Name, imageUrl, dailyPrice, pickupLocation, Type, _id } = car;

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      {/* Image Section with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <Image
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          alt={Name}
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Car Type Badge */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-cyan-600 shadow-sm uppercase tracking-wider">
          {Type || "Luxury"}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-extrabold text-gray-800 line-clamp-1 group-hover:text-cyan-600 transition-colors">
              {Name}
            </h2>
            <div className="flex items-center gap-1.5 text-gray-500 mt-1">
              <LuMapPin className="text-cyan-500" size={16} />
              <span className="text-sm font-medium line-clamp-1">{pickupLocation}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-cyan-600 font-black text-2xl">
              <span className="text-sm mt-1">$</span>
              {dailyPrice}
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Per Day</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-auto pt-4 border-t border-gray-50">
          <Link href={`/car/${_id}`} className="w-full">
            <Button 
              variant="solid" 
              className="w-full h-12 bg-gray-900 hover:bg-cyan-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-cyan-200"
            >
              View Details
              <FiExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;