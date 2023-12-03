import React from "react";
import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Features from "../Features/Features";
import MoreFeatures from "../More/MoreFeatures";
import FAQ from "../FAQ/FAQ";
import Pricing from "../Pricing/Pricing";
import TestimonialSection from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
const Home = () => {    
    return (
        <div>
            <Header/>
            <Landing/>
            <Features/>
            <MoreFeatures/>
            <FAQ/>
            <Pricing/>
            <TestimonialSection/>
            <Footer/>
        </div>
    )
}

export default Home;