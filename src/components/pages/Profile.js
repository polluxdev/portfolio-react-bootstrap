import React from 'react';
import {Container, Row, Col, Card, ListGroup, ProgressBar} from 'react-bootstrap';
import '../css/Profile.css';
import avatar from '../images/profile-img.jpg';

class Profile extends React.Component{
    render(){
        return(
            <div className="profile-background">
            <div className="profile-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="profile-title">
                                <h2>ABOUT ME</h2>
                                I am working as a professional UI/UX Designer since 2007. Worked in more than 200 live projects and also with more than 120 different clients!
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm md={6} className="profile-card">
                            <Row>
                                <Col xs={6} sm md={4} className="profile-image">
                                <div className="border-layer-outer">
                                    <div className="border-layer-inner">
                                        <Card>  
                                            <Card.Img src={avatar}/>
                                        </Card>
                                    </div>
                                </div>
                                </Col>
                                <Col xs={6} sm md={8} className="my-profile">
                                    <Card>  
                                        <Card.Text>
                                            <b>NAME:</b> FAHMI NUR ROSYID
                                        </Card.Text>
                                        <Card.Text>
                                            <b>DATE OF BIRTH:</b> 30TH AUGUST, 1998
                                        </Card.Text>
                                        <Card.Text>
                                            <b>SEX:</b> MALE
                                        </Card.Text>
                                        <Card.Text>
                                            <b>JOB:</b> STUDENT
                                        </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm md={12}>
                                    <Card>  
                                        <Card.Text className="justify-text">
                                            I'm a multi-award winning designer that has been specialising in web design for the past three years although I have experience in branding and print.Projects.
                                        </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm md={6}>

                            <ListGroup>
                                <ListGroup.Item>
                                    <div className="skill-name">HTML</div>
                                    <ProgressBar animated now={45} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="skill-name"></div>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="skill-name"></div>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="skill-name"></div>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="skill-name"></div>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="skill-name"></div>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="skill-name"></div>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="skill-name"></div>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="skill-name"></div>

                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

export default Profile;