import React from 'react';
import {Container, Row, Col, Form, Button, ListGroup} from 'react-bootstrap';
import '../css/Contact.css';

class Contact extends React.Component{
    render(){
        return(
            <div className="contact-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="contact-title">
                                <h2>CONTACT ME</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form className="form">
                                <Form.Row >
                                    <Col md={6}>
                                    <Form.Group>
                                        <Form.Control placeholder="Full Name" />
                                    </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                    <Form.Group>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                    <Form.Group>
                                        <Form.Control as="textarea" rows="8" placeholder="Type Your Message Here"/>
                                    </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                    <Form.Group>
                                        <Button variant="primary"><span>Submit</span>&nbsp;<i class="fas fa-paper-plane"></i></Button>
                                    </Form.Group>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Col>
                        <Col>
                        <div className="contact">
                            <ListGroup as="ul">
                            <div className="single-address">
                                <i class="fas fa-phone"></i>
                                <div className="title">
                                    <ListGroup.Item as="li" active>
                                        <h6>MY PHONE</h6>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        +62821 3453 2545
                                    </ListGroup.Item>
                                </div>
                            </div>
                            <div className="single-address">
                                <i class="fab fa-whatsapp"></i>
                                <div className="title">
                                    <ListGroup.Item as="li" active>
                                        <h6>WHATSAPP</h6>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        +62821 3453 2545
                                    </ListGroup.Item>
                                </div>
                            </div>
                            <div className="single-address">
                                <i class="far fa-envelope"></i>
                                <div className="title">
                                    <ListGroup.Item as="li" active>
                                        <h6>EMAIL</h6>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        fahminurros@gmail.com
                                    </ListGroup.Item>
                                </div>
                            </div>
                            <div className="single-address">
                                <i class="fab fa-twitter"></i>
                                <div className="title">
                                    <ListGroup.Item as="li" active>
                                        <h6>TWITTER</h6>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        @veridicalman
                                    </ListGroup.Item>
                                </div>
                            </div>
                            </ListGroup>
                        </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer">
                    <span>© 2019 Fahmi Nur Rosyid</span>
                </div>
            </div>
        )
    }
}

export default Contact;