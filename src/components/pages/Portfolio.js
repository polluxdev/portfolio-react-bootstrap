import React from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import '../css/Portfolio.css';

class Portfolio extends React.Component{
    render(){
        return(
            <div className="portfolio-background">
                <div className="portfolio-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="portfolio-title">
                                <h2>MY PORTFOLIO</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm md={6} lg={4}>
                            <div className="card-view-div">
                            <Card>
                                <Card.Img variant="top" src="https://image.flaticon.com/icons/svg/174/174836.svg" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                </ListGroup>
                            </Card>
                            </div>
                        </Col>
                        <Col xs={12} sm md={6} lg={4}>
                            <div className="card-view-div">
                            <Card>
                                <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                </ListGroup>
                            </Card>
                            </div>
                        </Col>
                        <Col xs={12} sm md={6} lg={4}>
                            <div className="card-view-div">
                            <Card>
                                <Card.Img variant="top" src="https://miro.medium.com/max/482/1*zBOu9L3_nZug_VihJSYGOw.png"/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                </ListGroup>
                            </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </div>
        )
    }
}

export default Portfolio;