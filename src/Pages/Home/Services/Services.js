import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true)
    const [search, setSearch] = useState('')
    const searchRef = useRef()

    useEffect(() => {
        fetch(`https://genius-car-server-sigma-two.vercel.app/services?search=${search}&order=${isAsc ? 'asc' : 'des'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    }

    return (
        <div className='py-10'>
            <div className='text-center pt-12'>
                <p className='text-xl font-bold pb-5 text-color-custom'> Services</p>
                <h2 className='text-5xl font-bold text-black pb-5'> Our Service Area </h2>
                <p className='pb-12 text-black'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex justify-between items-center mr-6'>
                <div className='flex'>
                    <input type="text" placeholder="Search here" className="input input-bordered rounded-none" ref={searchRef} />
                    <div>
                        <button onClick={handleSearch} type='submit' className='btn btn-outline btn-color rounded-none'>Search <FaSearch className='ml-3' /></button>
                    </div>
                </div>
                <div>
                    <div className="dropdown dropdown-hover dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost m-1">Sort by Price</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><button onClick={() => setIsAsc(true)} className="btn-ghost">Higher to Lower</button></li>
                            <li><button onClick={() => setIsAsc(false)} className="btn-ghost">Lower to Higher</button></li>
                        </ul>
                    </div>
                </div>
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