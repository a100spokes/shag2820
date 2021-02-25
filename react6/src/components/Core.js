import React ,{useEffect} from "react";
import Home from "@pages/home/home";
import PostsList  from "@pages/posts/List";
import ItemReadMorePost from "@pages/posts/ReadMore";
import ItemReadMoreTodo from "@pages/todos/ReadMore";

import {showLoader} from "@redux/actions/loader";
import Loader from "@comp/loader/Loader";

import TodosList from "@pages/todos/List";
import ErrorPage from "@pages/404/404";
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import {connect} from "react-redux";
function Core(props) {

    // useEffect(()=>{
    //     console.log("core",props);
    //     props.showLoader();
    // },[])

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

                            {/*<Route exact path={"/"} component={PostsList}/>*/}
                            {/*<Route exact path={"/posts/:id"} component={ItemReadMorePost}/>*/}
                            <Route exact path={"/"} component={TodosList}/>
                            <Route exact path={"/:id"} component={ItemReadMoreTodo}/>
                            {/*<Route exact path={"/about"} component={ItemReadMore}/>*/}
                            {/*<Route exact path={"/contacts"} component={ItemReadMore}/>*/}
                            {/* пример
                                <Route exact path={"/post/:id/:name/:someParam"} component={ItemReadMore}/>*/}
                            <Route component={ErrorPage}/>
                        </Switch>
                        {/*<ListPosts />*/}
                    </Col>
                </Row>
                {props.loader ? <Loader /> : null}
            </Container>
        </Router>
    )


}

const mapStateToProps = (store)=>{
    return {
        loader : store.Loader,
    }
}

const mapDispatchToProps = {
    showLoader
}


export default connect(mapStateToProps,mapDispatchToProps)(Core)

