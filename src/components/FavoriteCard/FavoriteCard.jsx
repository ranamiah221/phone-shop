const FavoriteCard = ({ favoriteItem }) => {
  const { img, model, price } = favoriteItem;
  return (
    <div className="card glass w-full h-80">
      <figure>
        <img className="h-52 w-72 mx-auto"
          src={img}
          alt="car!"
        />
      </figure>
      <div className="px-5 flex flex-col">
        <div className="flex justify-between items-center">
           <h2 className="card-title">{model}</h2>
           <p className="text-base font-medium">${price}</p>
        </div>
        <button className="flex-grow btn btn-accent hover:bg-green-500 w-full mt-4">See Details</button>
        
      </div>
    </div>
  );
};

export default FavoriteCard;
