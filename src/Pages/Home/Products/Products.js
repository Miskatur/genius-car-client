import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className='py-10'>
            <div className='text-center pt-12'>
                <p className='text-xl font-bold pb-5 text-color-custom'> Popular Products</p>
                <h2 className='text-5xl font-bold text-black pb-5'> Browse Our Products </h2>
                <p className='pb-12 text-black'>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised <br />
                    Words Which Don't Look Even Slightly Believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12' >
                {
                    products.map(product => <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='flex justify-center my-20'>
                <button className="btn btn-outline text-color-custom btn-color ">More Services</button>
            </div>
        </div>
    );
};

export default Products;