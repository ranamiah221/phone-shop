import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const Phone = ({phoneDetails, handleAddToFavorites}) => {
    
    
    return (
        <div className="relative flex flex-col md:flex-row w-1/2 mx-auto my-6 bg-white shadow-2xl rounded-lg h-96">
        <div className="relative p-2.5 md:w-3/5 shrink-0 overflow-hidden">
          <img
            src={phoneDetails?.img}
            alt="card-image"
            className="h-full w-full rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="p-6 flex items-center justify-start">
                 <div>
                 <p className="mb-2 text-slate-600 leading-normal font-normal">{phoneDetails?.brand_name} </p>
          <h4 className="mb-4 text-slate-800 text-xl font-semibold">
           {phoneDetails?.model}
          </h4>
          
          <div>
              <button onClick={()=>handleAddToFavorites()} className="inline-flex items-center gap-2 btn btn-accent hover:bg-green-400">Add To Favorites <span className="text-xl"><FaArrowRight /></span> </button>   
          </div>
         

          </div>
          
          
        </div>
        </div> 
    );
};

export default Phone;