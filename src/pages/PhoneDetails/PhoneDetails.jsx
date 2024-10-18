import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Phone from "./Phone/Phone";
import Swal from "sweetalert2";


const PhoneDetails = () => {
    
    const {id}=useParams();
    const intId=parseInt(id);
    const [phones, setPhones]=useState([]);
    const phoneDetails =phones.find(phone =>phone.id ===intId)
    useEffect(()=>{
        fetch('../phones.json')
        .then(res=>res.json())
        .then(data=> setPhones(data))
    },[])
    // add to dada local storage...
    const handleAddToFavorites=()=>{
        const addFavoritesArray=[];
        const favoritesItems= JSON.parse(localStorage.getItem('favorites'))
        if(!favoritesItems){
            addFavoritesArray.push(phoneDetails)
            localStorage.setItem('favorites', JSON.stringify(addFavoritesArray))
            Swal.fire({
                title: "Good job!",
                text: "Added Favorites Page",
                icon: "success"
              });
        }
        else{
            const isExits= favoritesItems.find(phone => phone.id === intId);
            console.log(isExits, intId , favoritesItems);
            if(!isExits){
                addFavoritesArray.push(...favoritesItems,phoneDetails)
                localStorage.setItem('favorites', JSON.stringify(addFavoritesArray))
                Swal.fire({
                    title: "Good job!",
                    text: "Added Favorites Page",
                    icon: "success"
                  });
            }
            else{
                Swal.fire({
                    title: "Error",
                    text: "Already Exits",
                    icon: "error"
                  });
            }
        }
    }
    // Go Home button functionality
    
    return (
        <>
         <div className="flex justify-center items-center h-40 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-md shadow-lg shadow-sky-600 mt-1">
            <div>
                <h2 className="text-2xl font-semibold">Phone Details</h2>
            </div>
         </div>
         <Phone phoneDetails={phoneDetails} handleAddToFavorites={handleAddToFavorites} ></Phone>
        </>
       
    );
};

export default PhoneDetails;