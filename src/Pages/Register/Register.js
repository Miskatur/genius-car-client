import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginPic from '../../assets/images/login/login.svg'
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { setAuthToken } from '../../Utilities/auth';

const Register = () => {
    const navigate = useNavigate();

    const { createUser, updateUser } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                handleUpdateUser(name)
                setAuthToken(user)
                navigate('/')

            })
            .catch(err => console.error(err))
    }

    const handleUpdateUser = name => {
        updateUser(name)
            .then(res => {
                const user = res.user;
                console.log(user)
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
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 ">
                        <h1 className="text-3xl text-center pt-5 font-semibold">Sign Up </h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
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
                                    <input className="btn btn-custom" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <div className='text-center py-5'>
                                <p>Or Sign In with</p>
                                <div className='flex justify-center py-5 align-middle'>
                                    <button><FaFacebook className='text-xl mr-5' /></button>
                                    <button> <FaTwitter className='text-xl mr-5' /></button>
                                    <button> <FaGoogle className='text-xl' /></button>
                                </div>
                                <p>Have an Account? <Link to={'/login'} className="text-color-custom"> Login </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;