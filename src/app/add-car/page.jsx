"use client";
import {
  FieldError,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
  Button,
  Card,
} from "@heroui/react";
import React from 'react';

const AddCarPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const carData = Object.fromEntries(formData.entries());
    
    carData.dailyPrice = Number(carData.dailyPrice);
    carData.seatCapacity = Number(carData.seatCapacity);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/car`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(carData)
      });
      const data = await res.json();
      if(data.insertedId) {
           toast.success("🚀 Car added successfully!");
          e.target.reset(); 
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Card className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 md:p-12">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              List Your <span className="text-cyan-600">Car</span>
            </h1>
            <p className="mt-3 text-gray-500 font-medium">
              Share your vehicle with the community and start earning.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              
              {/* Car Name */}
              <div className="md:col-span-2">
                <TextField isRequired className="w-full">
                  <Label className="text-gray-700 font-semibold mb-2 ml-1 text-sm">Vehicle Name</Label>
                  <Input 
                    name="carName" 
                    placeholder="e.g. Tesla Model 3 Performance" 
                    className="rounded-2xl shadow-sm" 
                  />
                  <FieldError className="text-red-500 text-xs mt-1" />
                </TextField>
              </div>

              {/* Daily Rent Price */}
              <TextField isRequired>
                <Label className="text-gray-700 font-semibold mb-2 ml-1 text-sm">Daily Rent ($)</Label>
                <Input 
                  name="dailyPrice" 
                  type="number" 
                  placeholder="0.00" 
                  className="rounded-2xl shadow-sm" 
                />
                <FieldError />
              </TextField>

              {/* Car Type Dropdown */}
<div className="flex flex-col">
  <Label className="text-gray-700 font-semibold mb-2 ml-1">Category</Label>
  <Select
    name="carType"
    isRequired
    className="w-full"
    placeholder="Choose Car Type"
    aria-label="Select Car Category"
  >
    {/* Trigger box - এখানে সিলেক্টেড ভ্যালু দেখাবে */}
    <Select.Trigger className="rounded-2xl border-gray-200 min-h-[48px] px-4 flex items-center justify-between hover:border-cyan-500 transition-colors bg-white">
      <Select.Value className="text-gray-900 font-medium" />
      <Select.Indicator className="text-gray-400" />
    </Select.Trigger>

    {/* Dropdown Options */}
    <Select.Popover className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
      <ListBox className="p-2">
        <ListBox.Item id="SUV" textValue="SUV" className="rounded-lg hover:bg-cyan-50 p-2 cursor-pointer outline-none">
          <div className="flex items-center gap-3">
            <span className="text-xl">🚙</span>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">SUV</span>
              <span className="text-xs text-gray-400 font-normal">Perfect for families & off-road</span>
            </div>
          </div>
        </ListBox.Item>
        
        <ListBox.Item id="Sedan" textValue="Sedan" className="rounded-lg hover:bg-cyan-50 p-2 cursor-pointer outline-none">
          <div className="flex items-center gap-3">
            <span className="text-xl">🚗</span>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">Sedan</span>
              <span className="text-xs text-gray-400 font-normal">Comfortable daily commuter</span>
            </div>
          </div>
        </ListBox.Item>

        <ListBox.Item id="Hatchback" textValue="Hatchback" className="rounded-lg hover:bg-cyan-50 p-2 cursor-pointer outline-none">
          <div className="flex items-center gap-3">
            <span className="text-xl">🚕</span>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">Hatchback</span>
              <span className="text-xs text-gray-400 font-normal">Compact and fuel efficient</span>
            </div>
          </div>
        </ListBox.Item>

        <ListBox.Item id="Luxury" textValue="Luxury" className="rounded-lg hover:bg-cyan-50 p-2 cursor-pointer outline-none">
          <div className="flex items-center gap-3">
            <span className="text-xl">✨</span>
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">Luxury</span>
              <span className="text-xs text-gray-400 font-normal">Premium experience & style</span>
            </div>
          </div>
        </ListBox.Item>
      </ListBox>
    </Select.Popover>
  </Select>
</div>

              {/* Seat Capacity */}
              <TextField isRequired>
                <Label className="text-gray-700 font-semibold mb-2 ml-1 text-sm">Passenger Capacity</Label>
                <Input 
                  name="seatCapacity" 
                  type="number" 
                  placeholder="e.g. 5" 
                  className="rounded-2xl shadow-sm" 
                />
                <FieldError />
              </TextField>

              {/* Availability Status Dropdown */}
             {/* Availability Status Dropdown */}
<div className="flex flex-col">
  <Label className="text-gray-700 font-semibold mb-2 ml-1 text-sm">Availability</Label>
  <Select
    name="availabilityStatus"
    isRequired
    placeholder="Current Status"
    aria-label="Select Car Availability"
  >
    {/* Trigger box - এখানে সিলেক্টেড স্ট্যাটাস দেখাবে */}
    <Select.Trigger className="rounded-2xl border-gray-200 min-h-[48px] px-4 flex items-center justify-between hover:border-cyan-500 transition-colors bg-white shadow-sm">
      <Select.Value className="text-gray-900 font-medium" />
      <Select.Indicator className="text-gray-400" />
    </Select.Trigger>

    {/* Dropdown Options */}
    <Select.Popover className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
      <ListBox className="p-2">
        <ListBox.Item 
          id="Available" 
          textValue="Available Now" 
          className="rounded-lg hover:bg-green-50 p-3 cursor-pointer outline-none transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <div className="flex flex-col">
              <span className="font-semibold text-green-700">Available Now</span>
              <span className="text-xs text-green-600/70">Ready for instant booking</span>
            </div>
          </div>
        </ListBox.Item>
        
        <ListBox.Item 
          id="Unavailable" 
          textValue="Not Available" 
          className="rounded-lg hover:bg-red-50 p-3 cursor-pointer outline-none transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
            <div className="flex flex-col">
              <span className="font-semibold text-red-700">Not Available</span>
              <span className="text-xs text-red-600/70">Currently under maintenance or booked</span>
            </div>
          </div>
        </ListBox.Item>
      </ListBox>
    </Select.Popover>
  </Select>
</div>

              {/* Pickup Location */}
              <div className="md:col-span-2">
                <TextField isRequired className="w-full">
                  <Label className="text-gray-700 font-semibold mb-2 ml-1 text-sm">Pickup Address</Label>
                  <Input 
                    name="pickupLocation" 
                    placeholder="e.g. Barishal City, Bangladesh" 
                    className="rounded-2xl shadow-sm" 
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <TextField isRequired className="w-full">
                  <Label className="text-gray-700 font-semibold mb-2 ml-1 text-sm">Image Link</Label>
                  <Input 
                    name="imageUrl" 
                    type="url" 
                    placeholder="https://i.ibb.co/..." 
                    className="rounded-2xl shadow-sm" 
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField isRequired className="w-full">
                  <Label className="text-gray-700 font-semibold mb-2 ml-1 text-sm">Description</Label>
                  <TextArea 
                    name="description" 
                    placeholder="Tell us more about your car's features..." 
                    className="rounded-3xl shadow-sm min-h-[100px]" 
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 hover:opacity-90 text-white font-bold text-lg shadow-xl transition-all duration-200"
            >
              Post Your Car Listing
            </Button>
          </form>
      </Card>
    </div>
  );
};

export default AddCarPage;