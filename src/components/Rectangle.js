import React from 'react';
import { Col, Row } from "react-bootstrap";

export const Rectangle = ({date}) => {
  return (
    <div>
    
    
    <Row className="justify-content-center">
          <Col sm="8">
            <div className="rectangle">
              {date.length ? (
                date.map((el) => (
                  <div
                    key={el.id}
                    className="info d-flex border-bottom border-bottom-lg pt-4 mx-2"
                  >
                    <img
                      src="Mariam.jpeg"
                      alt="mariam"
                      className="image "
                    />
                    <div className="d-inline ms-3">
                      <p className="fs-5">{el.name}</p>
                      <p className="fs-6 ">{el.date}</p>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="no-data">No Meetings Today</h1>
              )}
            </div>
          </Col>
        </Row>
    
    </div>
  )
}
