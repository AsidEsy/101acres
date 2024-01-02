import React from 'react';
import Slider from 'react-slick';
import './styles/AboutUs.css';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const managementTeam = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO',
      photo: 'https://placekitten.com/200/200',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Doe',
      position: 'COO',
      photo: 'https://placekitten.com/201/200',
      comment: 'Vivamus ullamcorper eros ut augue rhoncus, eget cursus purus fermentum.',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      position: 'CFO',
      photo: 'https://placekitten.com/202/200',
      comment: 'Suspendisse potenti. Nullam ac rhoncus risus. Integer nec odio justo.',
    },
  ];

  const branches = [
    {
      id: 1,
      location: 'New York',
    },
    {
      id: 2,
      location: 'Los Angeles',
    },
    {
      id: 3,
      location: 'Chicago',
    },
  ];

  const majorClients = [
    'ABC Corporation',
    'XYZ Industries',
    '123 Enterprises',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="about-us-container">
      <h1>About 101 Acres</h1>
      <section className="management-team">
        <h2>Management Team</h2>
        <Slider {...sliderSettings}>
          {managementTeam.map((member) => (
            <div key={member.id} className="slider-item">
              <img src={member.photo} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p className="comment">{member.comment}</p>
            </div>
          ))}
        </Slider>
      </section>

      <section className="branches">
        <h2>Branches</h2>
        <ul>
          {branches.map((branch) => (
            <li key={branch.id}>{branch.location}</li>
          ))}
        </ul>
      </section>

      <section className="contact-form">
        <h2>Contact Us</h2>
        <form>
          {/* Add your contact form fields here */}
        </form>
      </section>

      <section className="major-clients">
        <h2>Major Clients</h2>
        <ul>
          {majorClients.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
