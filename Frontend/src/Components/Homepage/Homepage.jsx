import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import './homepage.css';

function Homepage() {
  const cards = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div>
      <h1 className='h1 home'>Home</h1>
      <Link to="/detail" className="card-link"></Link>
      <div className="card-container">
        {cards.map((card) => (
          <div className="card" key={card}>
            <img 
              src={`https://news.airbnb.com/wp-content/uploads/sites/4/2019/06/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.jpg`} 
              alt={`Card ${card}`}
              className="card-image"
            />
            <div className="card-body">
              <h5 className="card-title">Titel - Country</h5>
              <div className="card-text">
                <div>
                  <p>Private host</p>
                  <p>Date</p>
                  <p>1000kr SEK night</p>
                </div>
                <div className="wifi-icon">
                  <FontAwesomeIcon icon={faWifi} style={{color: "#000000"}} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
