import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";

// rsf
function Home(props) {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $444">
                <Link to="/rooms" className="btn-primary">our rooms</Link>
            </Banner>
        </Hero>
            <Services/>
        </>
    );
}

export default Home;
