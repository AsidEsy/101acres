import React from 'react';
import './styles/Review.css';

const Reviews = () => {
  const reviewsList = [
    {
      id: 1,
      name: 'John Doe',
      image: 'https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M=',
      review: `Working with 101 Acres has been a transformative experience for me. Their dedication to understanding my needs and finding the perfect home was evident from day one. The team's professionalism, attention to detail, and commitment to customer satisfaction surpassed my expectations. I wholeheartedly recommend 101 Acres to anyone in search of their dream home. Thank you for making this journey seamless and enjoyable`,
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: 'https://i0.wp.com/brandcrunch.com.ng/wp-content/uploads/2017/08/Femi-Osobajo-2.jpg?fit=484%2C480&ssl=1',
      review: `As a first-time homebuyer, I was initially overwhelmed by the real estate process. 101 Acres not only simplified the complexities but also provided invaluable guidance at every step. Their expertise and personalized approach instilled confidence in my decisions. The team's responsiveness and transparent communication made the entire experience stress-free. I am immensely grateful for their support and highly recommend 101 Acres to anyone navigating the real estate landscape.`,
    },
    {
      id: 3,
      name: 'John Doe',
      image: 'https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?s=2048x2048&w=is&k=20&c=J-PEzTmJkg-2ngh-oKmIucEuzMX4l7C7lH2JG6U5NZw=',
      review: `Working with 101 Acres has been a transformative experience for me. Their dedication to understanding my needs and finding the perfect home was evident from day one. The team's professionalism, attention to detail, and commitment to customer satisfaction surpassed my expectations. I wholeheartedly recommend 101 Acres to anyone in search of their dream home. Thank you for making this journey seamless and enjoyable`,
    },
   
  ]

  return (
    <div className="reviews-container">
      <h1>Customer Reviews</h1>
      <div className="reviews-list">
        {reviewsList.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} />
            <h2>{review.name}</h2>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
