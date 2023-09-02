import React from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';

export const ButtonsData = ({viewAll, deleteAll}) => {
  return (
    <div>
    
    <Row className="justify-content-center my-2">
    <Col sm="8 d-flex justify-content-between">
      <Button className="button" onClick={viewAll}>View All</Button>
      <Button className="button" onClick={deleteAll}> Delete All</Button>
    </Col>
  </Row>
    
    
    </div>
  )
}
