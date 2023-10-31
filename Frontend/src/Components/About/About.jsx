import Figure from 'react-bootstrap/Figure';
import "bootstrap/dist/css/bootstrap.min.css";
import './about.css'

function FigureExample() {
  return (
    <Figure>
      <Figure.Image
        width={600}
        height={300}
        src="https://neuro.se/media/13372/computer-4795762_1280.jpg?center=0.57062146892655363,0.44736842105263158&mode=crop&width=830&height=440&rnd=132816084000000000"
      />
      <Figure.Caption>
      Welcome to DevBnb: Where Developers Feel at Home

Are you a developer looking for a comfortable and inspiring space to code, collaborate, and connect with like-minded individuals? Look no further than DevBnb - your ultimate Airbnb for developers!

At DevBnb, we understand the unique needs of developers. Whether you're a seasoned pro or just starting your coding journey, our platfora offers a curated selection of developer-friendly accommodation around the world.

From cozy coding corners to fully-equipped tech havens, each listing is vetted to ensure it meets the standards of the coding community.

Why DevBnb?
Developer-Focused Amenities: Enjoy high-speed internet, ergonomic workstation, and coding-friendly environment tailored to boost your productivity.

Community Networking: Connect with fellow developers, attend coding meetups, and collaborate on exciting projects, all within the comfort of your DevBnb space.

Global Reach: Explore coding-friendly accommodations in tech hubs worldwide, allowing you to work and travel seamlessly.

Secure and Trusted: Rest easy knowing that your stay is secure, with reliable hosts and verified listings designed specifically for developers. Make DevBnb your home away from home and elevate your coding experience.

Book your stay today and unlock a world of opportunities for learning, collaboration, and innovation.

      </Figure.Caption>
    </Figure>
  );
}

export default FigureExample;