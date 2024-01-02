import React from 'react';
import './style.css';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Reviews from '../components/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AboutUs from '../components/AboutUs';

const About = () => {
  const propertyListings = [
    {
      id: 1,
      imageUrl: 'https://cdn.confident-group.com/wp-content/uploads/2023/07/20093309/Elevation-slider-fairfield.jpg',
      title: 'Beautiful Villa',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$500,000',
    },
    {
      id: 2,
      imageUrl: 'https://cordialproperty.com/wp-content/uploads/2022/02/exterior-22-1024x576.webp',
      title: 'Modern Apartment',
      description: 'Nulla gravida facilisis neque, vel efficitur nunc scelerisque nec.',
      price: '$300,000',
    },
    {
      id: 3,
      imageUrl: 'https://img.staticmb.com/mbimages/project/Photo_h310_w462/2021/03/19/Project-Photo-6-Thakshashila-Trivandrum-5239405_600_800_310_462.jpg',
      title: 'Cozy Cottage',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: '$250,000',
    },
  ];
  const happyCustomers = 150;
  const successfulDealings = 300;

  const services = [
    'Property Valuation',
    'Real Estate Consultation',
    'Home Loans Assistance',
    'Legal Support',
  ];

  return (
    <div className="home">
      <Header></Header>
      <AboutUs />
      <Services></Services>
      <Reviews />
      <a href="your-whatsapp-chat-link" className="whatsapp-icon">
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </a>
      <Footer />
    </div>

  );
};


export default About;
