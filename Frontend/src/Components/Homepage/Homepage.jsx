import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRooms } from '../../Context/RoomContext';

function Homepage() {
  const { rooms } = useRooms();

  if (!rooms.length) {
    return <div>Loading...</div>; // Loading indicator while data is being fetched
  }

  return (
    <div className="my-4"> {/* Add margin top and bottom here */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {rooms.map(room => (
          <Col key={room._id}>
            <Link to={`/Detail/${room._id}`} style={{ textDecoration: 'none' }}>
              <Card>
                {room.imageUrl && <Card.Img variant="top" src={room.imageUrl} alt={room.title} />}
                <Card.Body>
                  <Card.Title>{room.title}</Card.Title>
                  <span>${room.price}/night</span>
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
