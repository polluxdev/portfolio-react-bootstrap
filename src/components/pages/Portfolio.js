import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Portfolio extends React.Component{
    render(){
        return(
            <div className="portfolio-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="portfolio-title">
                                <h2>My Portfolio</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Portfolio;