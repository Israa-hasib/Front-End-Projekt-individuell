import React from 'react';
import Figure from 'react-bootstrap/Figure';
import "bootstrap/dist/css/bootstrap.min.css";
import './about.css';

function FigureExample() {
  return (
    <div className="about-container">
      <Figure>
        <h1 className='h1 about'>ABOUT</h1>
        <Figure.Image className='img'
          width={600}
          height={300}
          src="https://neuro.se/media/13372/computer-4795762_1280.jpg?center=0.57062146892655363,0.44736842105263158&mode=crop&width=830&height=440&rnd=132816084000000000"
        />
        <Figure.Caption className='caption'>
          <p className='cp1'>
            Welcome to DevBnb: Where Developers Feel at Home
          </p>

          <p>
            Are you a developer looking for a comfortable and inspiring space to code, collaborate, and connect with like-minded individuals? Look no further than DevBnb - your ultimate Airbnb for developers!
          </p>

          <p>
            At DevBnb, we understand the unique needs of developers. Whether you're a seasoned pro or just starting your coding journey, our platform offers a curated selection of developer-friendly accommodation around the world.
          </p>

          <p>
            From cozy coding corners to fully-equipped tech havens, each listing is vetted to ensure it meets the standards of the coding community.
          </p>

          <p className='cp2'>
          Why DevBnb?
          </p>

          <p>
          Developer-Focused Amenities: Enjoy high-speed internet, ergonomic workstation, and coding-friendly environment tailored to boost your productivity.
          </p>

          <p>
          Community Networking: Connect with fellow developers, attend coding meetups, and collaborate on exciting projects, all within the comfort of your DevBnb space.
          </p>

          <p>
          Global Reach: Explore coding-friendly accommodations in tech hubs worldwide, allowing you to work and travel seamlessly.
          </p>

          <p>
            Secure and Trusted: Rest easy knowing that your stay is secure, with reliable hosts and verified listings designed specifically for developers.
          </p>

          <p>
          Make DevBnb your home away from home and elevate your coding experience.
          Book your stay today and unlock a world of opportunities for learning, collaboration, and innovation.
          </p>
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default FigureExample;
