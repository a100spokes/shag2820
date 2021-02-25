import React, {Component} from "react";
import PostItem from "@pages/posts/postItem";
import Loader from "@comp/loader/Loader";
import axios from "axios";
import ComFilter from "@comp/comFilter/comFilter";
import { Row, } from 'reactstrap';

export default class PostList extends Component{
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            posts: [],
            sort : "showAll",            
            loader: true,
        }
        /* this.changeStatus = this.changeStatus.bind(this);
        this.removeItem = this.removeItem.bind(this); */
        this.filter = this.filter.bind(this);
        this.sortPosts = this.sortPosts.bind(this);
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps")
    //     return null
    // }

    render() {
        let {loader, /* posts ,*/ filter} = this.state;
        let posts = this.sortPosts();

        return(
            <div>            

                {loader ? <Loader /> : <Row><ComFilter filterType={this.filter}/></Row>}

                {posts.map((item)=> <PostItem item={item}                                    
                                     key={item.id} />
                )}
            </div>
        )
    }

    componentDidMount() {
        setTimeout(()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then(response=>{
                    console.log(response.data)
                    // bad this.state.todos = response.data;

                    this.setState({
                        posts : response.data,
                        loader: false, // loader: !this.state.loader
                    },()=>{
                        console.log("setState")
                    })


                })
        },1000)

    }  

    filter (type) {
        this.setState({
            sort: type
        })
    }

    sortPosts () {
        let {posts, sort} = this.state;
        //todos = [].concat(todos);

        const arrSort = [...posts.filter((item)=>{
            if(sort=="showAll") {
                return true
            }
            else if(sort=="show10" && item.id <=10) {
                return true
            }
            else if(sort=="show50" && item.id <=50) {
                return true
            }

            return false
        })];

        return arrSort;

    }

}


