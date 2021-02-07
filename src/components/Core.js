import React from "react";
import "./main.scss";
import Footer from "@elems/Footer";
import Header from "@elems/Header";
import ListPosts from "@comp/posts/List";
import Aside from "../components/aside/aside";
import { Container, Row, Col } from 'reactstrap';
export default function Core() {
    return(
        <Container fluid /* xl */>
            <Row>
                <Col lg={12} md={12}>
                    <Header />
                </Col>
                <Col lg={2} md={2} className="asideBox">
                    <Aside />
                </Col>
                <Col lg={10} md={10} className="listBox">
                    <ListPosts />
                </Col>
                <Col lg={12} md={12}>
                    <Footer />
                </Col>
            </Row>
        </Container>
    )
}