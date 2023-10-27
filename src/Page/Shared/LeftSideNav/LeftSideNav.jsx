
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
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
                <h1 className='font-poppins font-bold text-center text-2xl text-gray-400 mt-6'>Why Choose Us</h1>

                {
                    chooseUs?.map(choose => <Link
                        key={choose.id}
                        choose={`/choose/${choose.id}`}
                    >

                        <div className="card bg-base-100 shadow-x  gap-x-2 ">


                            <div className="mb-4 ">

                                <h2 className="card-title pl-4 font-poppins text-lg  ">{choose.feature}</h2>
                                <figure><img className="w-[300px]" src={choose.image} alt="Movie" /></figure>


                            </div>
                        </div>


                    </Link>)
                }
            </div>
            <div>
                <div className="px-4 space-y-2 mb-4">
                    <h2 className="font-poppins font-bold text-center text-2xl text-gray-400 mt-6  mb-4">Login With</h2>
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

            <div className="font-poppins font-bold text-center text-2xl text-black">
                <h2 className="font-poppins font-bold text-center text-2xl text-gray-400 mt-6 mb-4">Touch With Us</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                    <BsFacebook className="mr-3 "></BsFacebook>
                    <span>Facebook</span>
                </a>

                <a className="p-4 flex text-lg items-center border-x " href="">
                    <BsTwitter className="mr-3 "></BsTwitter>
                    <span>Twitter</span>
                </a>

                <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-3 "></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>

            <div>
                <h2 className="font-poppins  font-bold text-center text-2xl text-gray-400 mt-6 mb-4">Rating...</h2>
                <div className="flex gap-2 pl-2">
                    <h2 className="font-poppins text-sm ">User Interface (UI)</h2>
                    <div className="rating rating-sm mr-2">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />

                    </div>
                </div>
                <div className="flex gap-2 pl-2">
                    <h2 className="font-poppins text-sm">Customer Reviews</h2>
                    <div className="rating rating-sm mr-2">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />

                    </div>
                </div>
                <div className="flex gap-2 pl-2">
                    <h2 className="font-poppins text-sm">Innovation and Uniqueness</h2>
                    <div className="rating rating-sm mr-2">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />

                    </div>
                </div>
            </div>

        </div>

    );
};

export default LeftSideNav;

