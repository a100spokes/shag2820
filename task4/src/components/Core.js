import React from "react";
import Home from "@pages/home/home";
import Contacts from "@pages/contacts/contacts";
import About from "@pages/about/about";
import TodoList from "@pages/todos/List";
import PostList from "@pages/posts/postList";
import ItemReadMore from "@pages/todos/ReadMore";
import ErrorPage from "@pages/404/404";
import {
    BrowserRouter as Router, 
    Switch,
    Route, Link
} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
export default function Core() {
    return(<Router>
            <Container fluid>
                <Row>
                    <Col lg={12} md={12}>
                        <ul>
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
                        </ul>
                    </Col>
                    <Col lg={12} md={12}>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route exact path={"/todos"} component={TodoList}/>
                            <Route exact path={"/posts"} component={PostList}/>
                            <Route exact path={"/todos/:id/:test"} component={ItemReadMore}/>
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