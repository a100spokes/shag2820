// import React from "react";
import "@comp/style.core.scss";
import React, { useState } from 'react';
import Home from "@pages/home/home";
import Contacts from "@pages/contacts/contacts";
import About from "@pages/about/about";
import TodoList from "@pages/todos/List";
import PostList from "@pages/posts/postList";
import TodosReadMore from "@pages/todos/ReadMore";
import PostReadMore from "@pages/posts/ReadMore";
import ErrorPage from "@pages/404/404";
import Header from "@elems/Header";
import {
    BrowserRouter as Router, 
    Switch,
    Route, Link
} from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
export default function Core() {
    return(<Router>
            <Container fluid>
                <Row>
                    <Col lg={12} md={12}> 
                         <Header />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12}>
                    
                    <Nav tabs className={"menu"} >
                        {/* <ul>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/todos"}>Todos</Link>
                            </li>
                            <li>
                                <Link to={"/posts"}>Posts</Link>
                            </li>
                            <li>
                                <Link to={"/contacts"}>Contacts</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About</Link>
                            </li>
                        </ul> */}
                        <NavItem >
                        <Link to={"/"}>Home</Link> 
                        </NavItem>
                        <NavItem>
                        <Link to={"/todos"}>Todos</Link>
                        </NavItem>
                        <NavItem>
                        <Link to={"/posts"}>Posts</Link>
                        </NavItem>
                        <NavItem>
                        <Link to={"/contacts"}>Contacts</Link> 
                        </NavItem>
                        <NavItem>
                        <Link to={"/about"}>About</Link>
                        </NavItem>
                        </Nav>
                    </Col>
                    <Col lg={12} md={12}>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route exact path={"/todos"} component={TodoList}/>
                            <Route exact path={"/posts"} component={PostList}/>
                            <Route exact path={"/todos/:id/:test"} component={TodosReadMore}/>
                            <Route exact path={"/posts/:id/:test"} component={PostReadMore}/>
                            <Route exact path={"/contacts"} component={Contacts}/>
                            <Route exact path={"/about"} component={About}/>
                            {/*<Route exact path={"/posts/:id"} component={ItemReadMore}/>*/}
                            {/*<Route exact path={"/about"} component={ItemReadMore}/>*/}
                            {/*<Route exact path={"/contacts"} component={ItemReadMore}/>*/}
                            {/* пример
                                <Route exact path={"/post/:id/:name/:someParam"} component={ItemReadMore}/>*/}
                            <Route component={ErrorPage}/>
                        </Switch>
                        {/*<ListPosts />*/}
                    </Col>
                 
                </Row>
            </Container>
        </Router>
    )
}