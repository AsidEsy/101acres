import React from 'react';
import Slider from 'react-slick';
import './styles/AboutUs.css';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesList } from './Services';
import Branches from './Branches';

const AboutUs = () => {
    const managementTeam = [
        {
            id: 1,
            name: 'John Smith',
            position: 'CEO',
            photo: 'https://img.freepik.com/premium-photo/coffee-job-males-happy-smile-office-men-person-indian-businessman-sitting-lifestyle-laptop-technology-manager-success_163305-210011.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703980800&semt=ais',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            name: 'Jane Doe',
            position: 'COO',
            photo: 'https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-modern-office-building-generative-ai-aig20_31965-117685.jpg',
            comment: 'Vivamus ullamcorper eros ut augue rhoncus, eget cursus purus fermentum.',
        },
        {
            id: 3,
            name: 'Mark Johnson',
            position: 'CFO',
            photo: 'https://maxicus.com/wp-content/uploads/2021/10/Outsourcing-in-India-The-hub-of-IT-Support-Talent-Innovation.jpg',
            comment: 'Suspendisse potenti. Nullam ac rhoncus risus. Integer nec odio justo.',
        },
    ];

    const majorClients = [
        'ABC Corporation',
        'XYZ Industries',
        '123 Enterprises',
    ];



    return (
        <div className="about-us-container">
            <section className="management-team">
                <h2>Management Team</h2>
                <section className="management-team2">
                    {managementTeam.map((member) => (
                        <div key={member.id} className="slider-item">
                            <img style={{ objectFit: 'cover' }} src={member.photo} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                            <p className="comment">{member.comment}</p>
                        </div>
                    ))}
                </section>
            </section>
            <div className="services-container">
                <h1>Our Services</h1>
                <div className="services-list" style={{columnCount:2}}>
                    {servicesList.map((service) => (
                        <div key={service.id} className="service-card" style={{columnCount:2}}>
                            <FontAwesomeIcon icon={service.icon} size="3x" />
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
           
            <Branches/>
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
