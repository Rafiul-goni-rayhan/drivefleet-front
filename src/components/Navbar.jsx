"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/signin";
          },
        },
      });
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/cars.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full object-cover border-2 border-primary shadow-md"
            />

            <div className="leading-4">
              <h1 className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Drivefleet
              </h1>
              <span className="text-xs text-gray-500">
                Premium Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-2 items-center text-sm font-medium">
            <li>
              <Link
                href="/"
                className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/car"
                className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition"
              >
                My Added Cars
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition"
              >
                My Booking
              </Link>
            </li>

            <li>
              <Link
                href="/add-car"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
              >
                Add Car
              </Link>
            </li>
          </ul>

          {/* Desktop User Section */}
          <div className="hidden md:flex items-center gap-4">
            {!isPending && (
              <>
                {!user ? (
                  <div className="flex gap-2">
                    <Link href="/signin">
                      <Button radius="full" variant="light">
                        Sign In
                      </Button>
                    </Link>

                    <Link href="/signup">
                      <Button
                        radius="full"
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      >
                        Signup
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl shadow-md">
                    <Avatar
                      src={user?.image || "https://i.pravatar.cc/150"}
                    />

                    <div>
                      <p className="text-sm font-semibold">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Welcome Back 👋
                      </p>
                    </div>

                    <Button
                      size="sm"
                      radius="full"
                      onClick={handleSignOut}
                      className="bg-red-50 text-red-500"
                    >
                      Sign Out
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg border p-4">
            
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/car"
                  onClick={() => setMenuOpen(false)}
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  My Added Cars
                </Link>
              </li>

              <li>
                <Link
                  href="/my-bookings"
                  onClick={() => setMenuOpen(false)}
                  className="block p-2 rounded hover:bg-gray-100"
                >
                  My Booking
                </Link>
              </li>

              <li>
                <Link
                  href="/add-car"
                  onClick={() => setMenuOpen(false)}
                  className="block p-2 rounded bg-blue-600 text-white"
                >
                  Add Car
                </Link>
              </li>
            </ul>

            <hr className="my-4" />

            {!user ? (
              <div className="flex flex-col gap-2">
                <Link href="/signin">
                  <Button className="w-full" variant="bordered">
                    Sign In
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button className="w-full bg-blue-600 text-white">
                    Signup
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Avatar
                    src={user?.image || "https://i.pravatar.cc/150"}
                  />

                  <div>
                    <p className="font-semibold">{user?.name}</p>
                    <p className="text-xs text-gray-500">
                      Welcome Back 👋
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleSignOut}
                  className="bg-red-50 text-red-500"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// "use client";

// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   const { data: session, isPending } = authClient.useSession();

//   const user = session?.user;

//   const handleSignOut = async () => {
//     try {
//       await authClient.signOut({
//         fetchOptions: {
//           onSuccess: () => {
//             window.location.href = "/signin";
//           },
//         },
//       });
//     } catch (error) {
//       console.error("Sign out error:", error);
//     }
//   };

//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
//         {/* Left Side */}
//         <div className="flex items-center gap-10">
          
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src={"/assets/cars.png"}
//               alt="Logo"
//               width={55}
//               height={55}
//               className="rounded-full object-cover border-2 border-primary shadow-md"
//             />

//             <div className="leading-4">
//               <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
//                 Drivefleet
//               </h1>
//               <span className="text-xs text-gray-500">
//                 Premium Service
//               </span>
//             </div>
//           </Link>

//           {/* Nav Links */}
//           <ul className="hidden md:flex gap-2 items-center text-sm font-medium">
//             <li>
//               <Link
//                 href="/"
//                 className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
//               >
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/car"
//                 className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
//               >
//                 Cars
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/my-bookings"
//                 className="px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
//               >
//                 My Booking
//               </Link>
//             </li>

//             <li>
//               <Link
//                 href="/add-car"
//                 className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 transition-all duration-300 shadow-md"
//               >
//                 Add Car
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-4">
//           {!isPending && (
//             <>
//               {!user ? (
//                 <div className="flex items-center gap-3">
                  
//                   <Link href={"/signin"}>
//                     <Button
//                       radius="full"
//                       variant="light"
//                       className="font-semibold"
//                     >
//                       Sign In
//                     </Button>
//                   </Link>

//                   <Link href={"/signup"}>
//                     <Button
//                       radius="full"
//                       className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg"
//                     >
//                       Signup
//                     </Button>
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-2xl shadow-md border border-gray-100">
                  
//                   <Avatar
//                     size="md"
//                     // isBordered
//                     color="primary"
//                     src={user?.image || "https://i.pravatar.cc/150"}
//                     className="shadow-md"
//                   />

//                   <div className="hidden sm:flex flex-col">
//                     <span className="text-sm font-bold text-gray-800">
//                       {user?.name}
//                     </span>

//                     <span className="text-xs text-gray-500">
//                       Welcome Back 👋
//                     </span>
//                   </div>

//                   <Button
//                     onClick={handleSignOut}
//                     size="sm"
//                     radius="full"
//                     className="bg-red-50 text-red-500 hover:bg-red-100 font-semibold"
//                   >
//                     Sign Out
//                   </Button>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;