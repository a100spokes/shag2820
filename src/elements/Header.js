import React from "react";
import Logo from "@comp/logo/Logo";
import Menu from "@comp/menu/Menu";
import { Row, Col } from 'reactstrap';
export default function Header() {
    return(
        <Row>
            <Col lg={4}>
                <Logo bgColor={"red"} /* text={"logo1"} */ />
            </Col>
            <Col lg={8}>
                <Menu />
            </Col>


        </Row>
    )
}