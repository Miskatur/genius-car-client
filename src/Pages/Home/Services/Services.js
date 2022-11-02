import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-10'>
            <div className='text-center pt-12'>
                <p className='text-xl font-bold pb-5 text-color-custom'> Services</p>
                <h2 className='text-5xl font-bold text-black pb-5'> Our Service Area </h2>
                <p className='pb-12 text-black'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12' >
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center my-20'>
                <button className="btn btn-outline text-color-custom btn-color ">More Services</button>
            </div>
        </div>
    );
};

export default Services;