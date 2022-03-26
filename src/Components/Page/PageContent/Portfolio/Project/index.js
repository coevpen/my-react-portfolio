import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Project(props){


    return (
        <Row>
            {props.projects.map((project) => (
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                Tech/Languages Used: {project.languages}
                            </Card.Text>
                            <Card.Text>
                                {project.description}
                            </Card.Text>
                            <Card.Text>
                                <a href={project.deployed} target="_blank" rel="noreferrer">Deployed Site</a>
                            </Card.Text>
                            <Card.Text>
                                <a href={project.repo} target="_blank" rel="noreferrer">Repo location</a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Project;