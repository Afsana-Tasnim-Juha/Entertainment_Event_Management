import moment from 'moment';
import shiny from "../../../assets/Shiny.svg";

const Header = () => {
    const backgroundStyle = {
        backgroundImage: `url(${shiny})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

    };

    return (
        <div style={backgroundStyle} className="text-center gap-4 mt-4">
            <div className="mt-2">
                <h2 className="text-3xl font-poppins font-bold pt-20 text-white">
                    <span className="text-gray-400 ">Masterful</span> Entertainment Event Management
                </h2>
                <p className='mt-2 text-white'>Elevate events with our masterful touch in entertainment management</p>
                <p className='mt-2 pb-20 text-white'>
                    {moment().format("dddd, MMMM Do YYYY")}
                </p>
            </div>
        </div>
    );
};

export default Header;
