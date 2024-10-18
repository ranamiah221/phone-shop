import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import PhoneCard from "../../components/PhoneCard/PhoneCard";
import { useState } from "react";
import Banner from "../../components/Banner/Banner";


const Home = () => {
    const phones=useLoaderData();
    const [isShow, setIsShow]= useState(false);
    return (
        <div className="">
            <Banner></Banner>
             <SectionTitle titleText='Our Phones Collection'></SectionTitle>
             <div className="grid grid-cols-3 gap-5">
              { 
              isShow
               ? phones?.map(phone=> <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
               : phones?.slice(0,3).map(phone=> <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
              }
              
        </div>
           <div className="w-2/6 mx-auto px-2">
                {
                    phones.length >=4 && <button className="btn btn-accent w-full hover:bg-green-500 mt-5 mb-5 text-white" onClick={()=>setIsShow(!isShow)}> { isShow ? 'See Less':'See More'}</button>
                }
           </div>
        </div>
    );
};

export default Home;