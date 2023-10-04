// PropertyDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';


const propertyDetailsData = {
    1: {
      id: 1,
      name: 'Cozy Apartment in Downtown',
      description: 'A comfortable apartment located in the heart of the city.',
      rent: 80000,
      image: 'image_url_1.jpg',
      location: 'Downtown, City',
      rooms: 2,
      bed: 4,
      bath: 2,
      area: 1000,
    },
    2: {
      id: 2,
      name: 'Luxury Villa with Pool',
      description: 'A luxurious villa with a private pool and scenic views.',
      rent: 800,
      image: 'image_url_2.jpg',
      location: 'Suburban Hills',
      rooms: 3,
      bed: 6,
      bath: 3,
      area: 2000,
    },
    3: {
      id: 3,
      name: 'Charming Cottage by the Lake',
      description: 'A charming cottage overlooking a serene lake.',
      rent: 400,
      image: 'image_url_3.jpg',
      location: 'Lakefront, Countryside',
      rooms: 1,
      bed: 2,
      bath: 1,
      area: 3000,
    },
    4: {
      id: 4,
      name: 'Modern City Apartment',
      description: 'A modern apartment in a bustling urban area.',
      rent: 800,
      image: 'image_url_4.jpg',
      location: 'City Center',
      rooms: 2,
      bed: 4,
      bath: 2,
      area: 4000,
    },
    5: {
      id: 5,
      name: 'Spacious Family Home',
      description: 'A spacious family home with a large backyard.',
      rent: 1200,
      image: 'image_url_5.jpg',
      location: 'Suburban Neighborhood',
      rooms: 3,
      bed: 6,
      bath: 3,
      area: 5000,
    },
    6: {
      id: 6,
      name: 'Sunny Beachfront Condo',
      description: 'A sunny condo with beachfront access and ocean views.',
      rent: 400,
      image: 'image_url_6.jpg',
      location: 'Beachfront, Coastal Town',
      rooms: 1,
      bed: 2,
      bath: 1,
      area: 6000,
    },
    7: {
      id: 7,
      name: 'Rustic Mountain Cabin',
      description: 'A cozy cabin nestled in the mountains.',
      rent: 800,
      image: 'image_url_7.jpg',
      location: 'Mountain Retreat',
      rooms: 2,
      bed: 4,
      bath: 2,
      area: 7000,
    },
    8: {
      id: 8,
      name: 'Urban Studio Loft',
      description: 'A stylish studio loft in an urban setting.',
      rent: 1200,
      image: 'image_url_8.jpg',
      location: 'Downtown Loft District',
      rooms: 3,
      bed: 6,
      bath: 3,
      area: 8000,
    },
    9: {
      id: 9,
      name: 'Country Farmhouse Retreat',
      description: 'A charming farmhouse in a peaceful rural setting.',
      rent: 400,
      image: 'image_url_9.jpg',
      location: 'Rural Countryside',
      rooms: 1,
      bed: 2,
      bath: 1,
      area: 9000,
    },
  };
  


const PropertyDetailsPage = () => {
const { propertyId } = useParams();
  const propertyDetails = propertyDetailsData[propertyId];

  return (
    <div className="property-details">
      {propertyDetails ? (
        <>
          <div className='w-[70%] m-auto flex flex-col my-2 border rounded-2xl px-1 py-2'>
      <img src={propertyDetails.image} alt="" className='w-[100%] rounded-xl h-[15rem]'/>
      <div className="flex my-3"><img src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" alt="" className='w-[10%]'/> <span>{propertyDetails.location}</span></div>
      <div className='font-bold my-2'>{propertyDetails.name}</div>
      <div className="flex mb-2">
        <div className="flex flex-col w-[25%]"><img src="https://cdn-icons-png.flaticon.com/128/489/489874.png" alt="" className='w-[50%] m-auto'/> <span className='text-2vw text-center'> {propertyDetails.rooms} rooms</span></div>
        <div className="flex flex-col w-[25%]"><img src="https://cdn-icons-png.flaticon.com/128/2284/2284001.png" alt="" className='w-[50%] m-auto'/> <span className='text-2vw text-center'> {propertyDetails.bed} bed</span></div>
        <div className="flex flex-col w-[25%]"><img src="https://cdn-icons-png.flaticon.com/128/2176/2176564.png" alt="" className='w-[50%] m-auto'/> <span className='text-2vw text-center'> {propertyDetails.bath} bath</span></div>
        <div className="flex flex-col w-[25%]"><img src="https://t3.ftcdn.net/jpg/02/00/18/68/240_F_200186804_8bfvN4jrl7BtyDrSpUSmy7YZDxYd4ZE3.jpg" alt="" className='w-[50%] m-auto'/> <span className='text-2vw text-center'> {propertyDetails.area} sq feet</span></div>
      </div>
      <div className='flex justify-between mt-3 mb-1'>
        <p className='font-bold pl-2'>${propertyDetails.rent}/month</p>
        
      </div>
    </div>
        </>
      ) : (
        <p>Property not found</p>
      )}
    </div>
  );
};

export default PropertyDetailsPage;
