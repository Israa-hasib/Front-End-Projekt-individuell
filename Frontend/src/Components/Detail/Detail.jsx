import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRooms } from '../../Context/RoomContext'; 

function DetailPage() {
  const params = useParams();
  const rooms = useRooms(); 
  const { detailRoom, getDetailRoom } = rooms; 
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    if (params.id) {
      getDetailRoom(params.id); 
    }
  }, [params]);

  if (!detailRoom) {
    return <div>Loading...</div>; 
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <Card>
            <Card.Img variant="top" src={detailRoom.imageUrl} /> 
            <Card.Body>
              <Card.Title>{detailRoom.title}</Card.Title> 
              <Card.Text>{detailRoom.description}</Card.Text> 
              <Card.Text>
                Host: {detailRoom.host}<br /> 
                Location: {detailRoom.location}<br /> 
                Price/Night: ${detailRoom.price} 
              </Card.Text>
              <div className="mb-3">
                <label className="mr-3">Check-in:</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="mr-3">Check-out:</label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="form-control"
                />
              </div>
              <Button className='btn btn-primary'>Book</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
