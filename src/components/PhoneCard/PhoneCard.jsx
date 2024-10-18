import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const PhoneCard = ({ phone }) => {
  console.log(phone);
  const { id, brand_name, model, img, price, rating } = phone;
  return (
    <div className="relative flex flex-col my-3 bg-white shadow-sm border border-slate-200 rounded-lg w-full">
      <div className="relative p-2.5 h-96 overflow-hidden rounded-xl bg-clip-border">
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        {/* rating */}
        <Rating style={{ maxWidth: 180 }} value={rating} readOnly />

        <h2 className="text-xl font-semibold bg-green-400 p-1 rounded-sm px-2 mt-2">
          {brand_name}
        </h2>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-slate-800 text-base font-semibold">{model}</p>
          <p className="text-cyan-600 text-base font-semibold">${price}</p>
        </div>

        <button
          className="rounded-md w-full mt-2 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default PhoneCard;
