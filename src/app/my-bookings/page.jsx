import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { BookingCancelAlert } from "@/components/BookingCancelAlert";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-red-500">
          Please Login First
        </h2>
      </div>
    );
  }

 const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  // const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user.id}`,{
     headers: {
      authorization: `Bearer ${token}`
    }}
  );

  const bookings = await res.json();
  // total booking ar total cost calculate kora jabe ekhane
const totalBookings = bookings.length;

const totalCost = bookings.reduce((sum, booking) => {
  return sum + Number(booking.price || 0);
}, 0);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-black text-cyan-500 mb-10">
        My Bookings
      </h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
  <div className="p-5 rounded-2xl bg-gray-900 text-white">
    <h2 className="text-sm text-gray-400">Total Bookings</h2>
    <p className="text-3xl font-bold text-cyan-400">
      {totalBookings}
    </p>
  </div>

  <div className="p-5 rounded-2xl bg-gray-900 text-white">
    <h2 className="text-sm text-gray-400">Total Cost</h2>
    <p className="text-3xl font-bold text-cyan-400">
      ${totalCost}
    </p>
  </div>
</div>
      {bookings.length === 0 ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-500">
            No Booking Found
          </h2>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="border rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={booking.imageUrl}
                  alt={booking.carName}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 space-y-3">
                <h2 className="text-2xl font-bold">
                  {booking.carName}
                </h2>

                <p>
                  <span className="font-bold">
                    Pickup:
                  </span>{" "}
                  {booking.pickupLocation}
                </p>

                <p>
                  <span className="font-bold">
                    Car Type:
                  </span>{" "}
                  {booking.carType}
                </p>

                <p>
                  <span className="font-bold">
                    Price:
                  </span>{" "}
                  <span className="text-cyan-500 font-bold">
                    ${booking.price}
                  </span>
                </p>

                <p>
                  <span className="font-bold">
                    Departure Date:
                  </span>{" "}
                  {booking.departureDate
                    ? new Date(
                        booking.departureDate
                      ).toLocaleDateString()
                    : "Not Selected"}
                </p>
                 <BookingCancelAlert bookingId={booking._id} />
              </div>
            </div>
          ))}
         
        </div>
      )}
      
    </div>
  );
};

export default MyBookingPage;