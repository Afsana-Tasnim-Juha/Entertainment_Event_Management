import contact from "../../assets/contact.jpg"
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import NavBar from "../Shared/NavBar/NavBar";


const Contact = () => {
    return (
        <div>

            <NavBar></NavBar>

            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-[650px]" src={contact} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><h2>Contact Us</h2></h2>
                    <input type="text" name="" placeholder="Your name" id="" />
                    <input type="email" name="" placeholder="Your email" id="" />
                    <input type="text" name="" placeholder="Your number" id="" />



                    <div className="card-actions flex justify-between ">
                        <div className="flex gap-4 text-center mt-4">
                            <BsFacebook></BsFacebook>
                            <BsInstagram></BsInstagram>
                            <AiOutlineTwitter></AiOutlineTwitter>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;