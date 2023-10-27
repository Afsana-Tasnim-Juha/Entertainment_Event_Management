import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');

        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);



        //reset error

        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('The password is less than 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('The password do not have a capital letter');
            return;
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            setRegisterError('The password do not have a special character');
            return;
        }






        //create user

        createUser(email, password)
            .then(result => {

                console.log(result.user);
                setSuccess('successfully registered');


            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            });
    }
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>

            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>

                <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input type="name" required name="name" placeholder="Enter your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Enter your photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>


                <p className=" text-center mt-4">Have an account? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link> </p>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-600" >{success}</p>
                }



            </div>
        </div>
    );
};

export default Register;