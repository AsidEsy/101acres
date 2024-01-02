import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faHandshake, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Property Valuation',
      description: 'Accurate property valuation services for buying, selling, or refinancing.',
      icon: faHome,
    },
    {
      id: 2,
      title: 'Real Estate Consultation',
      description: 'Expert consultation to guide you through real estate decisions and investments.',
      icon: faBuilding,
    },
    {
      id: 3,
      title: 'Home Loans Assistance',
      description: 'Assistance in finding and securing the best home loan options for your needs.',
      icon: faHandshake,
    },
    {
      id: 4,
      title: 'Legal Support',
      description: 'Legal advice and support throughout the real estate buying or selling process.',
      icon: faBalanceScale,
    },
    // Add more dummy items as needed
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <FontAwesomeIcon icon={service.icon} size="3x" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
