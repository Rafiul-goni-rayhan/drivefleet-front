
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
        <div>
            <h1>all Cars</h1>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    car?.map(c => <CarCard key={c._id} car ={c}/>)
                }

            </div>
        </div>
    );
};

export default CarPage;