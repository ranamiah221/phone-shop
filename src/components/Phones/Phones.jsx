import PhoneCard from "../PhoneCard/PhoneCard";


const Phones = ({phones}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
              phones?.map(phone=> <PhoneCard key={phone.id} phone={phone}></PhoneCard>)  
            }
        </div>
    );
};

export default Phones;