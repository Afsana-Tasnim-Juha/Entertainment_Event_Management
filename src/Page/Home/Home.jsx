import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
//import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import about from "../../assets/about.jpg";
import { useLoaderData } from "react-router-dom";
import Service from "./Service/Service";
import Footer from "../Shared/Footer/Footer";



const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div>
                <h1 className="font-extrabold text-3xl font-poppins text-gray-400 text-center mt-6 mb-6">About Us</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <p className="pt-20 text-center">Welcome to Masterful Entertainment Event Management, where we specialize in crafting extraordinary experiences that transcend the ordinary. Our team, a collective of seasoned event professionals, is dedicated to transforming your visions into remarkable realities. With a meticulous approach, creative flair, and an unwavering commitment to perfection, we go beyond traditional event planning. What sets us apart is our ability to infuse every occasion with a masterful touch, turning gatherings into magical moments. Choose us as your partner, and let's embark on a journey together, creating unforgettable memories, one event at a time.</p>
                    <img src={about} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2  ">
                    <h2 className="font-extrabold text-3xl font-poppins text-gray-400 text-center mt-6 mb-6">Services</h2>
                    <div className="grid lg:grid-cols-2 gap-6 space-x-2">


                        {
                            services?.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)
                        }
                    </div>

                </div>
                <div className="mt-6">
                    <LeftSideNav></LeftSideNav>
                </div>

            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;