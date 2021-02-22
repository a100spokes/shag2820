import React from "react";
import Home from "@pages/home/home";
import PostsList  from "@pages/posts/List";
import ItemReadMorePost from "@pages/posts/ReadMore";
import ItemReadMoreTodo from "@pages/todos/ReadMore";
import TodosList from "@pages/todos/List";
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
                                <Link to={"/posts"}>Posts</Link>
                            </li>
                            <li>
                                <Link to={"/todos"}>Todos</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={12} md={12}>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route exact path={"/posts"} component={PostsList}/>
                            <Route exact path={"/posts/:id"} component={ItemReadMorePost}/>
                            <Route exact path={"/todos"} component={TodosList}/>
                            <Route exact path={"/todos/:id"} component={ItemReadMoreTodo}/>
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