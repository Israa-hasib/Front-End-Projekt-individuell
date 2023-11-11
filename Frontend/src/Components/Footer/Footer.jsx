import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import './footer.css';

const App = () => {
  const linkStyle = { color: 'white' };

  return (
    <MDBFooter className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'></h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='./' style={linkStyle}>
                  Homepage
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'></h5>

            <ul className='list-unstyled'>
              <li>
                <a href='./About' style={linkStyle}>
                  About
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'></h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='./Booking' style={linkStyle}>
                  Booking
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'></h5>

            <ul className='list-unstyled'>
              <li>
                <a href='./Support' style={linkStyle}>
                  Support
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default App;
