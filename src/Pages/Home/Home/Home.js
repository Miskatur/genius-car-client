import React from 'react';
import About from '../About/About';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Team from '../Team/Team';
import './home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <About></About>
                <Services></Services>
                <Address></Address>
                <Products></Products>
                <Team></Team>
            </div>
        </div >
    );
};

export default Home;