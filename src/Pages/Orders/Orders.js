import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [user?.email])

    return (
        <div>
            <h2 className='text-3xl text-center my-20'> You have {orders.length} orders. </h2>

        </div>
    );
};

export default Orders;