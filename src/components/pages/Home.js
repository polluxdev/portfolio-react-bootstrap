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
                            <div className="home-sub-title-left">
                                <h3>
                                    Untuk apa berbudi pekerti, tapi <span className="color">MISKIN</span>?
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <div className="home-sub-title-right">
                                <h3>
                                    Gapapa, <span className="color">JELEK</span> yang penting <span className="color">SOMBONG</span>!
                                </h3>
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