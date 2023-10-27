import { Link } from "react-router-dom";
import { BsCurrencyDollar } from 'react-icons/bs';
import { useLoaderData, useParams } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";





const ServiceDetail = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);

    console.log(detail);









    return (
        <div>
            <NavBar></NavBar>
            <div className="grid lg:grid-cols-4 gap-2">
                <div className="col-span-4 ">
                    <h2 className="font-extrabold text-3xl font-poppins text-gray-400 text-center mt-6 mb-6 ">{detail.name}</h2>
                    <div className="card card-compact  bg-base-100 shadow-xl">

                        <figure><img src={detail.image} alt="Shoes" /></figure>
                        <div className="card-body">



                            <h4>{detail.description}</h4>


                            <div className="flex">
                                <BsCurrencyDollar className="mt-1"></BsCurrencyDollar>
                                <p className="font-semibold">{detail.price}</p>
                            </div>

                            <div className="card-actions ">
                                <Link to={`/serviceDetails/${id}`}>
                                    <button className="btn btn-primary">{detail.button}</button>
                                </Link>



                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;