import React from 'react'; 
import { Col, Row } from "react-bootstrap";


export const DatesToday = ({date}) => {
  return (
    <div>
    
    
    <Row className="justify-content-center pb-2 text-center fs-3">
    <Col sm="8">You have {date.length} Dates Today</Col>
  </Row>
    
    </div>
  )
}
