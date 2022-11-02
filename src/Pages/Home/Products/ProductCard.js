import React from 'react';
import star from './assets/Group 46.png';

const ProductCard = ({ product }) => {
    console.log(product)
    const { name, price, img } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl flex justify-center align-middle">
            <figure><img src={img} alt="pictures" className='p-5 h-52 w-1/2 rounded-lg ' /></figure>
            <div>
                <div className="card-body">
                    <img src={star} alt="" className='w-1/4' />
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions text-color-custom font-semibold text-lg">
                        <p >Price : ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;