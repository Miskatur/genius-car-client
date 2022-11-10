import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard';
const ServicesPage = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://genius-car-server-sigma-two.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='py-10'>
            <h2 className='text-3xl text-center  font-bold text-black pb-5'> The Service We Are Providing Right Now </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12' >
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default ServicesPage;