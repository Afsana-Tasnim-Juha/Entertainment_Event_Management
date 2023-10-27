
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

const LeftSideNav = () => {
    const [chooseUs, setChooseUs] = useState([]);

    useEffect(() => {
        fetch('choose.json')
            .then(res => res.json())
            .then(data => setChooseUs(data))
    }, [])
    return (

        <div>
            <div className='grid '>
                <h1 className='font-poppins font-bold text-center text-2xl text-black mt-6'>Why Choose Us</h1>

                {
                    chooseUs?.map(choose => <Link
                        key={choose.id}
                        choose={`/choose/${choose.id}`}
                    >

                        <div className="card bg-base-100 shadow-x mt-2 gap-x-2">


                            <div className="card-body">

                                <h2 className="card-title">{choose.feature}</h2>
                                <figure><img src={choose.image} alt="Movie" /></figure>


                            </div>
                        </div>


                    </Link>)
                }
            </div>
            <div>
                <div className="px-4 space-y-3 mb-6">
                    <h2 className="font-poppins font-bold text-center text-2xl text-black ">Login With</h2>
                    <button className="btn btn-outline w-full">
                        <FcGoogle></FcGoogle>

                        Login with Google
                    </button>
                    <button className="btn btn-outline w-full">
                        <AiFillGithub></AiFillGithub>

                        Login with GitHub
                    </button>
                </div>
            </div>
            <div>
                <h2 className="font-poppins font-bold text-center text-2xl text-black mt-6">Rating...</h2>
                <div className="rating rating-md mr-2">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;