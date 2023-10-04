import React from 'react'
import { useNavigate } from 'react-router-dom';

const PropertyCard = (props) => {
  const navigate = useNavigate();
  const handleReadMoreClick = () => {
    // Navigate to the property details page with the property ID as a URL parameter
    navigate(`/property/${props.propertyId}`);
    // window.location.reload();
    console.log(props.propertyId);
  };
  return (
    <div className='w-[70%] m-auto flex flex-col my-2 border rounded-2xl px-2 py-3 bg-white'>
      <img src={props.image} alt="" className='w-[100%] rounded-xl h-[15rem]'/>
      <div className="flex my-1"><img src="https://cdn-icons-png.flaticon.com/128/3179/3179068.png" alt="" className='w-[10%]'/> <span>{props.location}</span></div>
      <div className='font-bold my-1 mx-2'>{props.name}</div>
      <div className="flex mb-2">
        <div className="flex flex-col w-[25%]"><img src="https://cdn-icons-png.flaticon.com/128/489/489874.png" alt="" className='w-[50%] m-auto'/> <span className='text-2vw text-center'> {props.rooms} rooms</span></div>
        <div className="flex flex-col w-[25%]"><img src="https://cdn-icons-png.flaticon.com/128/2284/2284001.png" alt="" className='w-[50%] m-auto'/> <span className='text-2vw text-center'> {props.bed} bed</span></div>
        <div className="flex flex-col w-[25%]"><img src="https://cdn-icons-png.flaticon.com/128/2176/2176564.png" alt="" className='w-[50%] m-auto'/> <span className='text-2vw text-center'> {props.bath} bath</span></div>
        <div className="flex flex-col w-[25%]"><img src="https://t3.ftcdn.net/jpg/02/00/18/68/240_F_200186804_8bfvN4jrl7BtyDrSpUSmy7YZDxYd4ZE3.jpg" alt="" className='w-[50%] m-auto'/> <span className='text-2vw text-center'> {props.area} sq feet</span></div>
      </div>
      <div className='flex justify-between mt-3 mb-1'>
        <p className='font-bold pl-2 text-[#3739db]'>${props.rent}/month</p>
        <button className='border rounded-3xl w-[40%] px-2 py-1 font-bold border-[#3739db] text-[#3739db]' onClick={handleReadMoreClick}>Read More</button>
      </div>
    </div>
  )
}

export default PropertyCard
