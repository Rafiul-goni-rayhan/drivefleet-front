
import React from 'react';
import CarCard from './../../components/CarCard';

const CarPage = async() => {
    //api call kortechi backend theke sob car data niye asbo jeta database e save ache.
    const res=await fetch('http://localhost:5000/car')
    const car=await res.json()
    // console.log(car)
    return (
        <div>
            <h1>all Cars</h1>
             <div className="grid grid-cols-4 gap-5">
                {
                    car.map(c => <CarCard key={c._id} car ={c}/>)
                }

            </div>
        </div>
    );
};

export default CarPage;