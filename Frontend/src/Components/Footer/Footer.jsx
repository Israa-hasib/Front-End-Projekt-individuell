import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import './footer.css';

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Home</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='./' className='text-dark'>
                  homepage
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>About</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='./About' className='text-dark'>
                  about
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Booking</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='./Booking' className='text-dark'>
                  booking
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Support</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='./Support' className='text-dark'>
                  support
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}