import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const service = useLoaderData()
    const { _id, title, price } = service;
    const { user } = useContext(AuthContext)

    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregisterd';
        const phone = form.phone.value;
        const message = form.message.value || 'No Message';

        if (phone.length < 10) {
            return alert('Phone Number must be contains 10 or more characters')
        }
        else {

            const order = {
                service: _id,
                serviceName: title,
                price: price,
                customerName: name,
                email: email,
                phone: phone,
                message: message
            }

            fetch(`http://localhost:5000/orders`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert("You have successfully Purchased The Service!")
                        form.reset()
                    }
                })
                .catch(err => console.error(err))
        }


    }


    return (
        <div>
            <form className='my-32' onSubmit={handlePlaceOrder}>
                <div className='my-12'>
                    <h2 className='text-4xl text-center font-semibold'>You are about to order : <span className='text-color-custom font-bold'>{title}</span></h2>
                    <h4 className='text-2xl text-center my-5'> Price :  <span className='text-color-custom font-bold'>{price}</span></h4>
                </div>
                <div className='w-1/2 mx-auto border bg-gray-100 p-12'>

                    <input name='name' type="text" placeholder="Full Name" className="input input-bordered  w-full mt-5" required />

                    <input name='email' type="text" placeholder="Your Email" className="input input-bordered  w-full mt-5" defaultValue={user?.email} readOnly />

                    <input name='phone' type="Number" placeholder="Phone Number" className="input input-bordered  w-full mt-5" required />

                    <textarea name='message' className="textarea input input-bordered  h-52 w-full mt-5" placeholder="Your Message" ></textarea>

                    <button type='submit' className='btn btn-custom w-full my-5'>Confirm Order</button>
                </div>

            </form>

        </div>
    );
};

export default Checkout;