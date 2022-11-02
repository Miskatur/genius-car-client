import React from 'react';
import icon1 from './assets/Group 32.png'
import icon2 from './assets/Group.png'
import icon3 from './assets/Group 35.png'

const Address = () => {
    return (
        <div className='bg-black my-16 lg:flex justify-evenly align-middle py-24  rounded-lg'>
            <div className='lg:flex justify-center align-middle'>
                <div className='mr-5'>
                    <img src={icon1} alt="" />
                </div>
                <div>
                    <p className='text-sm text-white'>We are open monday-friday</p>
                    <h2 className='text-xl font-bold text-white'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='lg:flex justify-center align-middle'>
                <div className='mr-5'>
                    <img src={icon2} alt="" />
                </div>
                <div>
                    <p className='text-sm text-white'>Have a question?</p>
                    <h2 className='text-xl font-bold text-white'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='lg:flex justify-center align-middle'>
                <div className='mr-5'>
                    <img src={icon3} alt="" />
                </div>
                <div>
                    <p className='text-sm text-white'>Need a repair? our address</p>
                    <h2 className='text-xl font-bold text-white'>Liza Street, New York</h2>
                </div>
            </div>

        </div>
    );
};

export default Address;