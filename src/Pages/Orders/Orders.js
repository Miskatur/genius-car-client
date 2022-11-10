import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow/OrderRow';

const Orders = () => {
    const { user, logout } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://genius-car-server-sigma-two.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('token')
                    return logout()
                }
                return res.json()
            })
            .then(data => setOrders(data))

    }, [user?.email, logout])

    const handleDeleteBtn = id => {
        const proceed = window.confirm('Are You Sure Want To Delete This Service?');
        if (proceed) {
            fetch(`https://genius-car-server-sigma-two.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }


    const handleStatusUpdate = id => {
        fetch(`https://genius-car-server-sigma-two.vercel.app/orders/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id)
                    const approving = orders.find(odr => odr._id === id)
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining]
                    setOrders(newOrders)
                }
            })

    }



    return (
        <div>
            <h2 className='text-3xl text-center my-20'> You have {orders.length} orders. </h2>

            {
                orders.length > 0 &&
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                    Delete
                                </th>
                                <th>Customer Details</th>
                                <th>Orders Details</th>
                                <th>Phone Number</th>
                                <th>Messages</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <OrderRow
                                    key={order._id}
                                    order={order}
                                    handleDeleteBtn={handleDeleteBtn}
                                    handleStatusUpdate={handleStatusUpdate}
                                ></OrderRow>)
                            }
                        </tbody>

                    </table>
                </div>
            }

        </div>
    );
};

export default Orders;