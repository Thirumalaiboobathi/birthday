import React from 'react';
import Confetti from 'react-confetti';
import './happybirth.css';


const BirthdayPage = ({ name, gift }) => {
  // eslint-disable-next-line
  const [isConfettiActive, setIsConfettiActive] = React.useState(false);

 

  return (
    <div className="birthday-page">
      <Confetti
        particleCount={100}
        colors={['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#1e88e5']} // Customize confetti colors
        active={isConfettiActive}
      />
      <div className="container">
        <h1>Happy Birthday, {name}!</h1>
        <h2>Don't forget my UPI: 9361004066@apl</h2>
        <p>Here's a little something for you on your special day.</p>
        <img src={gift} alt={`${name}'s Birthday Gift`} className="gift-image" />
        
      </div>
    </div>
  );
};

BirthdayPage.defaultProps = {
  name: 'Officer',
  gift: 'https://cityfurnish.com/blog/wp-content/uploads/2023/07/wrapped-gift-box-with-shiny-gold-decoration-generated-by-ai-min.jpg'
};

export default BirthdayPage;
