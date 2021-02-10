import React from "react";
import Logo from "@comp/logo/Logo";
import { Row, Col } from 'reactstrap';
export default function Header() {
    return(
        <Row>
            <Col lg={4}>
                <Logo bgColor={"#ccc"} text={"logo"} />
            </Col>
            <Col lg={8}>
                add
            </Col>


        </Row>
    )
}