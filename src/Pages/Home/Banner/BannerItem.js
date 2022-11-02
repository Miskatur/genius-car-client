import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import './BannerItem.css'


const BannerItem = ({ slide }) => {
    const { image, prev, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-screen h-screen rounded-lg" />
            </div>
            <div className="absolute flex flex-col justify-start transform -translate-y-1/2 left-24 right-5 top-1/3">
                <h1 className='text-6xl font-bold  text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>

            </div>
            <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-24 right-5 top-1/2  mt-5">
                <p className='text-white text-lg'>
                    There are many variations of passages of  available, but  the majority have suffered alteration in some form.
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-2/3">
                <button className="btn btn-custom mr-5">Discover More</button>
                <button className="btn btn-outline btn-color text-white">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 btn-color"><FaArrowLeft /></a>
                <a href={`#slide${next}`} className="btn btn-circle mr-12 btn-color"><FaArrowRight /></a>
            </div>
        </div>

    );
};

export default BannerItem;