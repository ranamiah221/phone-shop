import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import PhoneCard from "../../components/PhoneCard/PhoneCard";


const Home = () => {
    const phones=useLoaderData();
    return (
        <div className="">
             <SectionTitle titleText='Our Phones Collection'></SectionTitle>
             <div className="grid grid-cols-3 gap-5">
              {
                 phones.map(phone=> <PhoneCard key={phone.id} phone={phone}></PhoneCard>)  
              }
        </div>
        </div>
    );
};

export default Home;