import React from 'react';
import '../css/Home.css';
import {Container, Row, Col} from 'react-bootstrap';

class Home extends React.Component{
    render(){
        return(
            <div className="home-background">
            <div className="home-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="home-title">
                                <h1>
                                    <span className="color">MAKMUR </span>DULU,<br/>
                                    BARU <span className="color">BERADAB</span>
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="bracket-animation">
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        )
    }
}

export default Home;