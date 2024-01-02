import React from 'react';
import './style.css';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Reviews from '../components/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Slider from 'react-slick';

const Home = () => {
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
  const sliderImages = [
    {
      id: 1,
      photo: 'https://wallpapers.com/images/hd/real-estate-digital-art-0kmi22tcj2x60lim.jpg',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      photo: 'https://e1.pxfuel.com/desktop-wallpaper/657/834/desktop-wallpaper-real-estate-agent-broker-thumbnail.jpg',
      comment: 'Vivamus ullamcorper eros ut augue rhoncus, eget cursus purus fermentum.',
    },
    {
      id: 3,
      photo: 'https://img.freepik.com/free-photo/construction-concept-with-engineering-tools_1150-17809.jpg',
      comment: 'Suspendisse potenti. Nullam ac rhoncus risus. Integer nec odio justo.',
    },
  ];
  const happyCustomers = 150;
  const successfulDealings = 300;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <Header></Header>
      <Slider {...sliderSettings}>
          {sliderImages.map((member) => (
            <div key={member.id} className="homeSlider">
              <img className='homeSliderImg' src={member.photo} alt={member.id} />
            </div>
          ))}
        </Slider>
        <div className="additional-info">
        <div className="info-item">
          <h2>Happy Customers</h2>
          <p>{happyCustomers}+ Satisfied Customers</p>
        </div>

        <div className="info-item">
          <h2>Successful Dealings</h2>
          <p>{successfulDealings}+ Successful Dealings</p>
        </div>
      </div>
      <h1>Discover Your Dream Home</h1>
      <div className="property-list">
        {propertyListings.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.title} />
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p className="price">{property.price}</p>
          </div>
        ))}
      </div>

     

      <Services></Services>
<Reviews/>
      <a href="your-whatsapp-chat-link" className="whatsapp-icon">
              <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </a>
      <Footer/>
    </div>

  );
};


export default Home;
