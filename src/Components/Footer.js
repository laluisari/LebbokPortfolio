import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import logoNav1 from "../logoNav1.png";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {FaAutoprefixer} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="main-footer">
        
        <Row >
   
        <Col md={{span:3, offset:1}} id="list">
          
          <img src={logoNav1} style={{height:"35%"}} />
          <p>Lebbok Vacation</p>
          <br />
          <p>Tinjau Social Media</p>
          <div><FaAutoprefixer /></div>
        </Col>
        <Col md={3} id="list">
            <p>
            Guide Online Lombok (G O L) adalah layanan paket liburan berbasis maps online yang membantu wisatawan untuk menelusuri 
            semua daerah Lombok yang sudah direkomendasikan, dan disesuaikan oleh keinginan para wisatawan
            </p>
        </Col>
        <Col md={3} id="list">
            <p>
            Guide Online Lombok (G O L) adalah layanan paket liburan berbasis maps online yang membantu wisatawan untuk menelusuri 
            semua daerah Lombok yang sudah direkomendasikan, dan disesuaikan oleh keinginan para wisatawan
            </p>
        </Col>
        
    </Row>
            
       
    </div>
  )
}

export default Footer