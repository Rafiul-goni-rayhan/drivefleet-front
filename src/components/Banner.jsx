import { Button } from "@heroui/react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden min-h-[650px] flex items-center justify-center bg-black text-white px-6">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-slate-900" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full" />

      {/* Grid Effect */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-sm text-gray-200 tracking-wide">
            Premium Car Rental Experience
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Drive the Future with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
            DriveFleet
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
          Experience luxury, comfort, and performance with our premium fleet of
          modern vehicles. Your next adventure starts here.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          
          <Link href={"/car"}>
            <Button
              size="lg"
              radius="full"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-10 shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore Cars
            </Button>
          </Link>

          <Button
            size="lg"
            radius="full"
            variant="bordered"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-10 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-cyan-400">500+</h2>
            <p className="text-gray-400 text-sm mt-2">Premium Cars</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-cyan-400">24/7</h2>
            <p className="text-gray-400 text-sm mt-2">Customer Support</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-cyan-400">100%</h2>
            <p className="text-gray-400 text-sm mt-2">Secure Booking</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-cyan-400">50K+</h2>
            <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}