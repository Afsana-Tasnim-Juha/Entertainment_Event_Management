import { Link } from "react-router-dom";
import { BsCurrencyDollar } from 'react-icons/bs';


const Service = ({ service }) => {
    const { name, image, price, description, button, id } = service;
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>

                {
                    description.length > 180 ? <h4>{description.slice(0, 180)} <Link className="text-blue-600 font-bold" to="/">Read More...</Link></h4>
                        : <h4>{description}</h4>
                }

                <div className="flex">
                    <BsCurrencyDollar className="mt-1"></BsCurrencyDollar>
                    <p className="font-semibold">{price}</p>
                </div>

                <div className="card-actions ">
                    <Link to={`/serviceDetails/${id}`}>
                        <button className="btn btn-primary">{button}</button>
                    </Link>



                </div>
            </div>
        </div>

    );
};

export default Service;