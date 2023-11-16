import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRooms } from '../../Context/RoomContext';
import './homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
  const { rooms } = useRooms();

  if (!rooms.length) {
    return <div>Loading...</div>; // Loading indicator while data is being fetched
  }

  return (
    <div className="my-4"> {/* Add margin top and bottom here */}
      <h1 className='h1-home'>HOME</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {rooms.map(room => (
          <Col key={room._id}>
            <Link to={`/Detail/${room._id}`} style={{ textDecoration: 'none' }}>
              <Card className='card'>
                {room.imageUrl && <Card.Img variant="top" src={room.imageUrl} alt={room.title} style={{ height: '200px' }} />}
                <Card.Body className='card-body'>
                  <Card.Title className='card-title'>{room.title}</Card.Title>
                  <p className='p-home'>Private host<p className='p-home'>Date</p></p>
                  <span>{room.price}kr SEK night</span>
                  <div className='wifi-icon-container'>
                  <FontAwesomeIcon icon={faWifi} className='wifi-icon' />
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homepage;
