import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-white/10">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              DriveFleet
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-6">
              Premium car rental service with luxury vehicles, affordable
              pricing, and 24/7 customer support for your perfect journey.
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap">
              
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 transition-all duration-300 hover:scale-110"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-5">Useful Links</h3>

            <ul className="space-y-3 text-gray-400 text-sm sm:text-base">
              
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/car"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  Explore Cars
                </Link>
              </li>

              <li>
                <Link
                  href="/my-bookings"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  My Bookings
                </Link>
              </li>

              <li>
                <Link
                  href="/add-car"
                  className="hover:text-cyan-400 transition-all duration-300"
                >
                  Add Car
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-5">Contact Info</h3>

            <ul className="space-y-4 text-gray-400 text-sm sm:text-base">
              
              <li className="flex items-center sm:items-start justify-center sm:justify-start gap-3">
                <FaMapMarkerAlt className="text-cyan-400 mt-1 shrink-0" />
                <span>Barishal, Bangladesh</span>
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-3">
                <FaPhoneAlt className="text-cyan-400 shrink-0" />
                <span>+880 1234-567890</span>
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-3 break-all">
                <FaEnvelope className="text-cyan-400 shrink-0" />
                <span>support@drivefleet.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-gray-500 text-xs sm:text-sm text-center lg:text-left">
          
          <p>
            © {new Date().getFullYear()} DriveFleet. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            
            <Link
              href="#"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="#"
              className="hover:text-cyan-400 transition-all duration-300"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}