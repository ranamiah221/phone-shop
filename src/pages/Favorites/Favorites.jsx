import { useEffect, useState } from "react";
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";
import NoItems from "../../components/NoIteams/NoItems";


const Favorites = () => {
    const [favoriteItems, setFavoriteItem]=useState([]);
    const [noData, setNodata]= useState(false);
    const [isShow, setIsShow]=useState('false')
     
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('favorites'))

    if(data){
       setFavoriteItem(data)
    }
    else{
        setNodata("No Data Found")
    }
  },[])
  console.log("nodata = ",noData)
   const handleDelete=()=>{
    localStorage.clear('favorites');
    setFavoriteItem([]);
    setNodata('No Data Found');

   }
    
    return (
        <>
        {/* delete button  */}
          {
            noData === "No Data Found" ? <NoItems></NoItems>:
           <>
            <div className="flex justify-center mt-10 mb-5">
        <button onClick={handleDelete} className="btn btn-accent hover:bg-green-400 w-40">Delete All</button>
        </div>
        <div className="text-center">
            <p className="text-2xl font-normal">Total Favorite items price : </p>
        </div>
        <div >
            <div className="grid grid-cols-2 gap-5 mt-5">
            { 
             isShow ? favoriteItems.map(favoriteItem=> <FavoriteCard key={favoriteItem.id} favoriteItem={favoriteItem}></FavoriteCard>) 
             :
             favoriteItems.slice(0,2).map(favoriteItem=> <FavoriteCard key={favoriteItem.id} favoriteItem={favoriteItem}></FavoriteCard>)
                
            }
            </div>
             <div className="flex justify-center">
                 {
                  favoriteItems.length > 2 && <button className="btn btn-accent hover:bg-green-500 mt-10 mb-5 text-white" onClick={()=>setIsShow(!isShow)}> { isShow ? 'See Less':'See More'}</button>
                 } 
             </div>
        </div>
           </>
          }
        </>
    );
};

export default Favorites;