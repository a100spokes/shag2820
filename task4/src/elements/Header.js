import React, {useState} from "react";
import Logo from "@comp/logo/Logo";
import { Row, Col, Button } from 'reactstrap';
import Confirm from "@comp/confirm/Confirm";
import AddPostItemForm from "@elems/forms/AddPostItemForm";
import "./style.scss";

export default function Header() {

    const [modal, setModal] = useState(false)

    return(
        <Row>
            <Col lg={4}>
                <Logo bgColor={"#ccc"} text={"logo"} />
            </Col>
            <Col lg={7}></Col>
            <Col lg={1}>
                <Button className="add" color={"warning"} onClick={toggleModal}>Add</Button>
            </Col>
            <Confirm
                active={modal}
                message={`Добавить запись?`}
                ok={{
                    title:"Добавить",
                    color: "success",
                    fn : ()=>{
                        console.log(2222)
                    }
                }}
                cancel={toggleModal}
            >
                <AddPostItemForm />
            </Confirm>

        </Row>
    )

    function toggleModal() {
        setModal(!modal)
    }
}