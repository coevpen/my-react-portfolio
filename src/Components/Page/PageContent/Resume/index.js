import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume(){


    return (
        <Row>
            <Col lg={{ span: 6, offset: 3 }}>
                <section className="resume">
                    <div>
                        <h1>My Resume</h1>
                    </div>

                    <div>
                        <a className="text-decoration-none download" href={require("../../../../assets/files/CourtneyEvinsResume.pdf")} download>Download my resume</a>
                    </div>
                    <div className="resume-body">
                        <div>
                            <h4>Languages</h4>
                            <ul>
                                <li>Java</li>
                                <li>C</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>Bash</li>
                                <li>Awk</li>
                            </ul>
                        </div>

                        <div>
                            <h4>Front-End Skills</h4>
                            <ul>
                                <li>HTML/CSS</li>
                                <li>JQuery</li>
                                <li>JavaScript</li>
                                <li>Bootstrap</li>
                                <li>Bulma</li>
                                <li>React</li>
                            </ul>
                        </div> 

                        <div>
                            <h4>Back-End Skills</h4>
                            <ul>
                                <li>MySQL</li>
                                <li>Sequelize</li>
                                <li>MongoDB</li>
                                <li>Mongoose</li>
                                <li>NoSQL</li>
                                <li>GraphQL</li>
                                <li>REST API</li>
                                <li>Express</li>
                                <li>Node.js</li>
                                <li>Express Handlebars</li>
                            </ul>
                        </div> 
                    </div>
                </section>
            </Col>
        </Row>
    );
}

export default Resume;