import React, { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const OrderRow = ({ order, handleDeleteBtn, handleStatusUpdate }) => {
    const { _id, serviceName, email, price, customerName, phone, service, status } = order
    const [orderService, setOrderService] = useState({})
    useEffect(() => {
        fetch(`https://genius-car-server-sigma-two.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])


    return (
        <tr>
            <th>
                <button onClick={() => handleDeleteBtn(_id)} className='btn btn-ghost'><FaTrashAlt className='text-red-600 text-2xl'></FaTrashAlt></button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                Price :
                <span className="badge badge-ghost badge-sm">$ {price}</span>
            </td>
            <td>{phone}</td>
            <th>
                <button onClick={() => handleStatusUpdate(_id)} className="btn btn-ghost btn-xs"
                >{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;