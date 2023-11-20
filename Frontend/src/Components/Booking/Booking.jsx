import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useUser } from '../../Context/UserContext';
import './booking.css'


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const userState = useUser();

  useEffect(() => {
    if (userState.token) {

      fetch('http://localhost:2323/api/bookings/user/me', {
        headers: {
          'Content-Type': 'application/json',

          Authorization: `Bearer ${userState.token}`
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("BOOKINGS: ", data)
          setBookings(data)
        }) 
        .catch((error) => console.error('Error fetching bookings:', error));
    }
  }, [userState.token]); 

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const calculateTotalPrice = (checkin, checkout, pricePerNight) => {
    const startDate = new Date(checkin);
    const endDate = new Date(checkout);
    const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = numberOfNights * pricePerNight;
    return totalPrice;
  };

  const handleContinueClick = () => {
    setActiveModal('payment');
  };

  const handlePay = () => {

    setActiveModal('confirmation');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'payment':
        return (
        <div className="pay-container">
          <Modal.Body>
          <Modal.Title className='pay-text'>Payment method</Modal.Title>
            {}
            <div className='pay-logo'>
              <div>
                <label>
                <input type="radio" name="paymentOption" value="mastercard" />
                <img className='mastercard' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png" alt="Mastercard Logo" />
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="paymentOption" value="paypal" />
                <img className='paypal' src="https://seeklogo.com/images/P/paypal-logo-481A2E654B-seeklogo.com.png" alt="Paypal Logo" />
              </label>
            </div>
            <div>
               <label>
                <input type="radio" name="paymentOption" value="swish" />
                <img className='swish' src="https://images.ctfassets.net/zrqoyh8r449h/5Kbx9XCa4oJjwgUP0RNDZY/176707fc098ba9c33a4cef9b039236f6/Swish_Logo_Primary_Light-BG_P3.png?w=600" alt="Swish Logo" />
              </label>
            </div>
            </div>
            <Button className='pay' variant="primary" onClick={handlePay}>
              Pay
            </Button>
          </Modal.Body>
        </div>
        );
      case 'confirmation':
        
        return (
      <>
        <div className="custom-modal-container">
          <Modal.Body className='finish'>
            {}
            <p className='p'>Thank you for your purchase</p>
          </Modal.Body>
        </div>
      </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="booking-card-img">
      <h1 className='h1-booking'>YOUR BOOKINGS</h1>
      {bookings.filter(booking => booking.room).map((booking, index) => (
    // <div>
    // <div className='img-booking'>
    //     <img
    //       src={booking.room.imageUrl} 
    //       alt="Room"
    //       className='image'
    //     />
    //   </div>
    //     <Card style={{ backgroundColor: 'var(--background-black-50, rgba(0, 0, 0, 0.50))', borderRadius: '16px', color: '#fff' }} key={index} className="w-75 mb-3">
    //       <Card.Body>
    //         <Card.Title>{booking.room.title}</Card.Title>
    //         <Card.Text>
    //           Period: {formatDate(booking.checkin)} - {formatDate(booking.checkout)}<br />
    //           Price/Night: {booking.room.price}kr<br />
    //           <hr />
    //           Total (SEK) {calculateTotalPrice(booking.checkin, booking.checkout, booking.room.price)}kr
    //         </Card.Text>
    //         <div className="d-flex justify-content-end">
    //           <Button variant="primary" className="red-button" style={{ marginRight: '5px' }}>Remove</Button>
    //           <Button variant="secondary" className="green-button" style={{ marginLeft: '5px' }} onClick={handleContinueClick}>Continue</Button>
    //         </div>
    //       </Card.Body>
    //     </Card>
    //     </div>

        <div className="container-b">
        {/* Image container */}
        <div className='img-booking'>
          <img
            src={booking.room.imageUrl} 
            alt="Room"
            className='image'
          />
        </div>
        {/* Card */}
        <Card className="booking-details" style={{ backgroundColor: 'var(--background-black-50, rgba(0, 0, 0, 0.50))', flex: 1, margin: 0, color: "#fff"}} key={index}>
          <Card.Body>
            <Card.Title>{booking.room.title}</Card.Title>
            <Card.Text>
              Period: {formatDate(booking.checkin)} - {formatDate(booking.checkout)}<br />
              Price/Night: {booking.room.price}kr<br />
              <hr />
              Total (SEK) {calculateTotalPrice(booking.checkin, booking.checkout, booking.room.price)}kr
            </Card.Text>
            <div className="d-flex justify-content-end">
              <Button variant="primary" className="red-button" style={{ marginRight: '5px' }}>Remove</Button>
              <Button variant="secondary" className="green-button" style={{ marginLeft: '5px' }} onClick={handleContinueClick}>Continue</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      ))}
      <Modal show={activeModal !== null} onHide={handleCloseModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Bookings;
