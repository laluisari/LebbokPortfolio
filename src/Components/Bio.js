import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap'
import InfoBio from './InfoBio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRoute} from '@fortawesome/free-solid-svg-icons';
import logoNav from "../logoNav.jpg"



const Bio = () => {
  return (
    <div>
    <Container >
    <Row>
      <div className="info">
        <div className="info-isi">
            <h1>Apa itu G O L? 
            <FontAwesomeIcon icon={faRoute} style={{color: "#f9ab00"}} />
            </h1>
            <img src={logoNav} />
            <InfoBio />
            
      
        </div>
      
      </div>

      
    </Row>
  </Container>
    </div>
   
  
  );
};

export default Bio;
