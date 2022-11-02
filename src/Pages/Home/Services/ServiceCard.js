import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { title, price, img, _id } = service
    return (
        <div >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="pictures" className='p-5 h-64 w-full rounded-lg' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions items-center justify-between text-color-custom font-semibold text-lg">
                        <p >Price : ${price}</p>
                        <span>
                            <Link to={`/checkout/${_id}`}> <FaArrowRight /></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;