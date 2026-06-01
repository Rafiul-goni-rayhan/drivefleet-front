
import React from 'react';
import CarCard from './../../components/CarCard';

const CarPage = async() => {
    //api call kortechi backend theke sob car data niye asbo jeta database e save ache.
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`,{
        cache:'no-store'
    })
    const car=await res.json()
    // console.log(car)
    return (
       <div className="max-w-7xl mx-auto px-4 py-10">
   
    <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight sm:text-4xl uppercase relative inline-block pb-3">
            All Cars
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></span>
        </h1>
        <p className="mt-2 text-sm text-gray-500">Explore our wide range of premium vehicles</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {
            car && car.length > 0 ? (
                car.map(c => <CarCard key={c._id} car={c} />)
            ) : (
                <div className="col-span-full text-center py-12 text-gray-400 font-medium">
                    No cars available at the moment.
                </div>
            )
        }
    </div>
</div>
    );
};

export default CarPage;