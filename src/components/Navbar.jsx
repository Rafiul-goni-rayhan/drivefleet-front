import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        
        {/* বাম পাশের নেভিগেশন লিংকসমূহ */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <li>
              <Link href={"/"} className="hover:text-blue-600 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/car"} className="hover:text-blue-600 transition-colors duration-200">
                Cars
              </Link>
            </li>
            <li>
              <Link href={"/my-bookings"} className="hover:text-blue-600 transition-colors duration-200">
                My Bookings
              </Link>
            </li>
            <li>
              <Link href={"/add-car"} className="hover:text-blue-600 transition-colors duration-200">
                Add Car
              </Link>
            </li>
          </ul>
        </div>

        {/* মাঝখানে লোগো */}
        <div className="flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
          <Link href={"/"}>
            <Image
              src={"/assets/cars.png"}
              height={50} // লোগোর হাইট ও উইডথ কিছুটা সামঞ্জস্যপূর্ণ করা হয়েছে
              width={130}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>

        {/* ডান পাশের প্রোফাইল ও অথেনটিকেশন */}
        <div>
          <ul className="flex items-center gap-4 text-sm font-medium">
            <li>
              <Link href={"/profile"} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Profile
              </Link>
            </li>
            <span className="text-gray-300">|</span>
            <li>
              <Link href={"/login"} className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Login
              </Link>
            </li>
            <li>
              <Link 
                href={"/signup"} 
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 shadow-md shadow-blue-200 transition-all duration-200 active:scale-95"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;