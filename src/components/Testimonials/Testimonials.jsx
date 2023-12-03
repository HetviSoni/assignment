import './testimonial.css';
import Logo from '../../assets/logo.webp';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSection = () => {
    // Sample testimonial data
    const testimonials = [
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Logo // Assuming Logo is imported correctly
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Logo // Assuming Logo is imported correctly
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Logo // Assuming Logo is imported correctly
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Logo // Assuming Logo is imported correctly
        },
        {
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            name: "John Doe",
            designation: "CEO, Company A",
            profilePic: Logo // Assuming Logo is imported correctly
        },
        // Add more testimonials as needed
    ];

    return (
        <div className='faq-container'>
            <div className='faq-header'>
                <div> TESTIMONIALS </div>
                <div className='faq-heading'>
                    Hear from our Satisfied clients
                </div>
                <p className='faq-para'>
                    Discover why our clients love working with us. Read their<br></br>
                    testimonials and learn how we have helped businesses.
                </p>
            </div>
            <div className="testimonial-carousel">
                {/* Render TestimonialCarousel component */}
                <TestimonialCarousel testimonials={testimonials} />
            </div>
        </div>
    );
};

const TestimonialCarousel = ({ testimonials }) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000, // Adjust the speed for smoothness
      slidesToShow: 4, // Number of cards visible initially
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000, // Time for each slide
      cssEase: 'linear', // For smoother sliding effect
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
            <img src={profilePic} alt={`${name}'s profile`} className="profile-pic" />
            <div className="content">
                <p className="review">{review}</p>
                <p className="name">{name}</p>
                <p className="designation">{designation}</p>
            </div>
        </div>
    );
};
export default TestimonialSection;