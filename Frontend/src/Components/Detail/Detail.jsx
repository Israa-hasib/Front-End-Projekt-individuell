import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './detail.css';
import { useRooms } from '../../Context/RoomContext';
import { useUser } from '../../Context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faFan } from '@fortawesome/free-solid-svg-icons';



function DetailPage() {
  const userState = useUser();
  const navigate = useNavigate(); 
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
    return <div>Loading...</div>; 
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
            
            Authorization: `Bearer ${userState.token}`
          },
          body: JSON.stringify(bookingData),
        });

        if (response.ok) {
          
          console.log('Booking successful!');

          navigate("/booking")
        } else {
          
          console.error('Booking failed');
          console.log(response);
        }
      } catch (error) {
        
        console.error('Error:', error);
      }
    } else {
      
      console.error('Invalid Booking dates');
    }
  };

  console.log("Detail room", detailRoom)
  return (
    <div className="card-container">
      <h1 className='h1-detail'>DETAIL</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="image-gallery">
            {/* Display multiple images here */}
            <div className="image-container">
              <img className='card1' src={detailRoom.imageUrl} alt="Room 1" />
              <div className="small-images">
              {detailRoom?.images?.map((image, index) => (
                <img key={image} className={`card${index+2}`} src={image} alt={`Room ${index+2}`}/>
              ))}
                {/* <img className='card2' src={detailRoom.imageUrl} alt="Room 2" />
                <img className='card3' src={detailRoom.imageUrl} alt="Room 3" />
                <img className='card4' src={detailRoom.imageUrl} alt="Room 4" />
                <img className='card5' src={detailRoom.imageUrl} alt="Room 5" /> */}
              </div>
            </div>
          </div>
          <Card style={{ borderRadius: '16px', background: 'var(--background-black-50, rgba(0, 0, 0, 0.50))', margin: 0, width: "unset" }}>
            <Card.Body className='card-detailbody'>
              <Card.Title className='title-detail'>{detailRoom.title} <br/>2 guests - 1 bedroom - 2 bed - 2 baths </Card.Title>
              {/* <Card.Text>{detailRoom.description}</Card.Text> */}
              {/* <Card.Text>
              <FontAwesomeIcon icon={faUserCircle} style={{"--fa-primary-color": "#000000", "--fa-secondary-color": "#ffffff", marginRight: '8px'}} size='2x' /> {detailRoom.host} is your host <br />Superhost - 4 år som värd <br />
              <FontAwesomeIcon icon={faLocationDot} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#000000", marginRight: '8px'}} size='2x' /> Location: {detailRoom.location}<br />
              </Card.Text> */}
              <Card.Text>
              <FontAwesomeIcon icon={faUserCircle} style={{"--fa-primary-color": "#000000", "--fa-secondary-color": "#ffffff", marginRight: '8px'}} size='2x' />
              {detailRoom.host} is your host <br />
              Superhost - Minst 5 år som värd <br /><br />
              <FontAwesomeIcon icon={faMapLocationDot} style={{color: "#ffffff", marginRight: '8px'}} size='2x' />              
              Adress: {detailRoom.location}<br />
              </Card.Text>
              <div>
                <p><FontAwesomeIcon icon={faDoorOpen} style={{ color: "#ffffff", marginRight: '8px'}} size='2x'/>Self checkin <br />You can check in with the building staff </p>
                <p><FontAwesomeIcon icon={faMedal} style={{color: "#ffffff", marginRight: '8px'}} size='2x'/>Your host is a Superhost <br />Superhost are experienced, highly rated hosts </p>
                <p><FontAwesomeIcon icon={faLocationDot} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#000000", marginRight: '8px'}} size='2x'/> Great location <br />90% of recent guests gave the location a 5-star rating </p>
                <Card.Text> <p>Desctription</p>{detailRoom.description}</Card.Text>
                <p>Where you'll sleep<br /><FontAwesomeIcon icon={faBed} style={{color: "#ffffff",}}/>
                <br />Bedroom
                <br />1 queen bed
                </p>
                <p>What this place offer
                <br /><FontAwesomeIcon icon={faWifi} style={{color: "#ffffff",}} /> WiFi
                <br /><FontAwesomeIcon icon={faCartFlatbedSuitcase} style={{color: "#ffffff",}} /> Luggage drop-off allowed
                <br /><FontAwesomeIcon icon={faCar} style={{color: "#ffffff",}} /> Free parking on premises
                <br /><FontAwesomeIcon icon={faWater} style={{color: "#ffffff",}} /> Beach access
                <br /><FontAwesomeIcon icon={faMugSaucer} style={{color: "#ffffff",}} /> Coffe maker
                <br /><FontAwesomeIcon icon={faPizzaSlice} style={{color: "#ffffff",}} /> Food delivery
                <br /><FontAwesomeIcon icon={faBath} style={{color: "#ffffff",}} /> Bathub/Shower 
                <br /><FontAwesomeIcon icon={faFan} style={{color: "#ffffff",}} /> Courtyard view
                </p> 
              </div>
              <div className="mb-3">
                <label className="mr-3">Check-in</label>
                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  className="form-date"
                />
              </div>
              <div className="mb-3">
                <label className="mr-3">Check-out</label>
                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  className="form-date"/>
              </div>
              <Card.Text>
              {detailRoom.price}kr SEK night
              </Card.Text>
              <Button className='btn-detail' onClick={handleBooking}>
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