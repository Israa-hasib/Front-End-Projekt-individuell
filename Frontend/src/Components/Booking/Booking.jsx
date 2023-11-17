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
      // Fetch user bookings from the API endpoint
      fetch('http://localhost:2323/api/bookings/user/me', {
        headers: {
          'Content-Type': 'application/json',
          // Add authorization header with user token if needed
          Authorization: `Bearer ${userState.token}`
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("BOOKINGS: ", data)
          setBookings(data)
        }) // Assuming the API response is an array of booking objects
        .catch((error) => console.error('Error fetching bookings:', error));
    }
  }, [userState.token]); // Empty dependency array ensures the effect runs once after the initial render

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
    // Implement logic for payment
    // You can call an API to process the payment
    // Once payment is successful, you can open the confirmation modal
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
          <Modal.Header closeButton>
            <Modal.Title className='pay-text'>Payment method</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Add your payment options here */}
            <p className='pay-text'>Choose a payment option:</p>
            <div>
              <label>
                <input type="radio" name="paymentOption" value="swish" />
                <img className='swish' src="https://images.ctfassets.net/zrqoyh8r449h/5Kbx9XCa4oJjwgUP0RNDZY/176707fc098ba9c33a4cef9b039236f6/Swish_Logo_Primary_Light-BG_P3.png?w=600" alt="Swish Logo" />
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
                <input type="radio" name="paymentOption" value="mastercard" />
                <img className='mastercard' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/2560px-Mastercard_2019_logo.svg.png" alt="Mastercard Logo" />
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className='pay' variant="primary" onClick={handlePay}>
              Pay
            </Button>
          </Modal.Footer>
        </div>
        );
      case 'confirmation':
        
        return (
      <>
        <div className="custom-modal-container">
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Add your confirmation content here */}
            <p className='p'>Thank you for your purchase</p>
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-succes' variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </div>
      </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4 mb-4">
      {bookings.filter(booking => booking.room).map((booking, index) => (
        <Card style={{ backgroundColor: 'var(--background-black-50, rgba(0, 0, 0, 0.50))', borderRadius: '16px', color: '#fff' }} key={index} className="w-75 mb-3">
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
      ))}

      <Modal show={activeModal !== null} onHide={handleCloseModal}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Bookings;
