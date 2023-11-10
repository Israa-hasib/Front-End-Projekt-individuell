import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRooms } from '../../Context/RoomContext';
import { useUser } from '../../Context/UserContext';

function DetailPage() {
  const userState = useUser();
  const navigate = useNavigate(); // useNavigate hook for navigation
  const params = useParams();
  const rooms = useRooms();
  const { detailRoom, getDetailRoom } = rooms;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {


    if (params.id) {
      getDetailRoom(params.id);
    }
  }, [params, userState, navigate]);

  if (!detailRoom) {
    return <div>Loading...</div>; // Handle loading state if user is not authenticated or accommodation data is not available yet
  }

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };


  const handleBooking = async () => {

    if (!userState.token) return navigate('/login');

    if (startDate && endDate) {
      console.log("room", detailRoom)
      const bookingData = {
        room: detailRoom._id,
        checkin: startDate,
        checkout: endDate,
      };

      try {
        const response = await fetch('http://localhost:2323/api/bookings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add authorization header with user token if needed
            Authorization: `Bearer ${userState.token}`
          },
          body: JSON.stringify(bookingData),
        });

        if (response.ok) {
          // Handle successful reservation, e.g., show a success message to the user
          console.log('Booking successful!');

          navigate("/booking")
        } else {
          // Handle failed reservation, e.g., show an error message to the user
          console.error('Reservation failed');
          console.log(response);
        }
      } catch (error) {
        // Handle network error, e.g., show a generic error message to the user
        console.error('Error:', error);
      }
    } else {
      // Handle invalid reservation dates, e.g., show an error message to the user
      console.error('Invalid reservation dates');
    }
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
            <Button className='btn btn-primary' onClick={handleBooking}>
              Reserve
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
  );
}

export default DetailPage;