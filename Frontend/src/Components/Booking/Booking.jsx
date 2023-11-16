// import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import { useUser } from '../../Context/UserContext';

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const userState = useUser();

//   useEffect(() => {
//     if (userState.token) {
//       // Fetch user reservations from the API endpoint
//       fetch('http://localhost:2323/api/bookings/user/me', {
//         headers: {
//           'Content-Type': 'application/json',
//           // Add authorization header with user token if needed
//           Authorization: `Bearer ${userState.token}`
//         }
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log("BOOKINGS: ", data)
//           setBookings(data)
//         }) // Assuming the API response is an array of reservation objects
//         .catch((error) => console.error('Error fetching bookings:', error));
//     }
//   }, [userState.token]); // Empty dependency array ensures the effect runs once after the initial render

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const calculateTotalPrice = (checkin, checkout, pricePerNight) => {
//     const startDate = new Date(checkin);
//     const endDate = new Date(checkout);
//     const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
//     const totalPrice = numberOfNights * pricePerNight;
//     return totalPrice;
//   };

//   return (
//     <div className="d-flex flex-column align-items-center mt-4 mb-4">
//       {bookings.map((booking, index) => (
//         <Card key={index} className="w-75 mb-3">
//           <Card.Body>
//             <Card.Title>{booking.room.title}</Card.Title>
//             <Card.Text>
//               Period: {formatDate(booking.checkin)} - {formatDate(booking.checkout)}<br />
//               Price/Night: ${booking.room.price}<br />
//               Total Price: ${calculateTotalPrice(booking.checkin, booking.checkout, booking.room.price)}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Bookings;

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
          <>
            <Modal.Header closeButton>
              <Modal.Title>Payment Options</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Add your payment options here */}
              <p>Choose a payment option:</p>
              <div>
                <label>
                  <input type="radio" name="paymentOption" value="swish" />
                  Swish
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="paymentOption" value="paypal" />
                  PayPal
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="paymentOption" value="mastercard" />
                  Mastercard
                </label>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handlePay}>
                Pay
              </Button>
            </Modal.Footer>
          </>
        );
      case 'confirmation':
        return (
          <>
            <Modal.Header closeButton>
              <Modal.Title>PAYMENT SUCCESSFUL!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Add your confirmation content here */}
              <p>Your booking is now paid. <br />Thank you for choosing our services! <br />//DevBnb  </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
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
              Price/Night: ${booking.room.price}<br />
              Total Price: ${calculateTotalPrice(booking.checkin, booking.checkout, booking.room.price)}
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
