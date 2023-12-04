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
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: section.offsetTop,
            });
        }
    };

    return (
        <div>
            <Header scrollToSection={scrollToSection} />
            <Landing />
            <Features />
            <MoreFeatures />
            <FAQ />
            <Pricing />
            <TestimonialSection />
            <Footer />
        </div>
    );
};

export default Home;
