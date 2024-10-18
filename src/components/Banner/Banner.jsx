import myImage from '../../assets/banner/mobile_phone.jpg'

const Banner = () => {

    return (
        <div
        className="bg-cover bg-center h-96 opacity-75 mt-1 rounded-lg shadow-lg shadow-sky-500 flex justify-center items-center"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        <div className='w-5/6 mx-auto'>
            <input className='bg-white w-full rounded-md h-10' type="text" />
        </div>
      </div>
    );
};

export default Banner;