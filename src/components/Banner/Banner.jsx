import Swal from 'sweetalert2';
import myImage from '../../assets/banner/mobile_phone.jpg'
import { useState } from 'react';

const Banner = () => {
  const [inputValue, setInputValue]=useState('')
  const handleSearch=()=>{
    Swal.fire({
      title: "Sorry!",
      text: "This Functionality is not available",
      icon: "error"
    });
    setInputValue('')
  }

    return (
        <div
        className="bg-cover bg-center h-96 opacity-75 mt-1 rounded-lg shadow-lg shadow-sky-500 flex justify-center items-center"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <div className='flex items-center justify-end w-5/6 mx-auto h-20 static'>
        <input onChange={(e)=>{
          setInputValue(e.target.value)
        }} className='bg-white w-full rounded-md h-16 pl-5' type="text" placeholder='Search..... ' value={inputValue} />
            <div className='absolute mr-4'>
            <button onClick={handleSearch} className='btn btn-primary'>Search</button>
            </div>
        </div>
      </div>
    );
};

export default Banner;