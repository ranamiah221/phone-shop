import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Phones from "../../components/Phones/Phones";


const Home = () => {
    const phones=useLoaderData();
    return (
        <div className="">
             <SectionTitle titleText='Our Phones Collection'></SectionTitle>
             <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;