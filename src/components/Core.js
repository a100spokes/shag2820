import React from "react";
import ListPosts from "@comp/posts/List";
import { Container, Row, Col } from 'reactstrap';
export default function Core() {
    return(
        <Container fluid>
            <Row>
                <Col lg={12} md={12}>
                    <ListPosts />
                </Col>
            </Row>
        </Container>
    )
}