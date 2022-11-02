import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginPic from '../../assets/images/login/login.svg'
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Login = () => {

    const { userSignIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content flex-col gap-20 grid md:grid-cols-2 lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={loginPic} alt="" className='w-10/12' />
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 ">
                        <h1 className="text-3xl text-center pt-5 font-semibold">Login </h1>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-custom" type="submit" value="Sign In" />

                                </div>
                            </form>
                            <div className='text-center py-5'>
                                <p>Or Sign In with</p>
                                <div className='flex justify-center py-5 align-middle'>
                                    <button><FaFacebook className='text-xl mr-5' /></button>
                                    <button> <FaTwitter className='text-xl mr-5' /></button>
                                    <button> <FaGoogle className='text-xl' /></button>
                                </div>
                                <p>New to Genius car? <Link to={'/register'} className="text-color-custom"> Sign Up </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;