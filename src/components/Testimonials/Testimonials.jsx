import './testimonial.css';
import Logo from '../../assets/logo.webp';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Try from '../Try/Try';
import Emily from '../../assets/emily.webp';
import Alex from '../../assets/alex.webp';
import David from '../../assets/david.webp';

const TestimonialSection = () => {
   
    const testimonials = [
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Emily 
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Alex 
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: David 
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Logo 
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Logo 
        },
        
    ];

    return (
        <div className='faq-container' id='testimonials'>
            <div className='faq-header'>
                <div> 
                    <button className='welcome-button'>🧡TESTIMONIALS</button>
                 </div>
                <div className='faq-heading'>
                    Hear from our <span style={{ color: '#fe8162' }}>Satisfied</span>  clients
                </div>
                <p className='faq-para'>
                    Discover why our clients love working with us. Read their<br></br>
                    testimonials and learn how we have helped businesses.
                </p>
            </div>
            <div className="testimonial-carousel">
                <TestimonialCarousel testimonials={testimonials} />
            </div>
            <Try />
        </div>
    );
};

const TestimonialCarousel = ({ testimonials }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, 
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 950, 
        cssEase: 'linear', 
        rtl: true, 

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
                <div key={index}>
                    <Testimonial
                        review={testimonial.review}
                        name={testimonial.name}
                        designation={testimonial.designation}
                        profilePic={testimonial.profilePic}
                    />
                </div>
            ))}
        </Slider>
    );
};

const Testimonial = ({ review, name, designation, profilePic }) => {
    return (
        <div className="testimonial-card">
            <div className='review'>
                {review}
            </div>
            <div className='author'>
                <div className='author-img'>
                    <img src={profilePic} alt="Author" />
                </div>
                <div className='author-name'>
                    {name} <br></br>
                    {designation}
                </div>
            </div>            
        </div>
    );
};
export default TestimonialSection;