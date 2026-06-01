import React from 'react';
import CarCard from './CarCard'; 

const AvailableCars = async () => {
    // ডাটাবেজ থেকে ডাটা নিয়ে আসা
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`, {
       
    });
    const allCars = await res.json();

    const displayCars = allCars.slice(0, 6);

    return (
        <section className="container mx-auto py-16 px-4">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800">Available Cars</h2>
                   
                </div>
                <button className="px-6 py-2 border-2 border-cyan-600 text-cyan-600 font-bold rounded-full hover:bg-cyan-600 hover:text-white transition-all">
                    View All
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {
                    displayCars.map(c => (
                        <CarCard key={c._id} car={c} />
                    ))
                }
            </div>
        </section>
    );
};

export default AvailableCars;