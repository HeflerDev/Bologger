import React, {useEffect, useState} from "react";
import {Col, Row, Stack} from "react-bootstrap";
import IPostService from "../../services/PostService/IPostService";
import User from "../../lib/User";
import PostService from "../../services/PostService";
import IUserService from "../../services/UserService/IUserService";
import UserService from "../../services/UserService";
import {Posts, UserList} from "./components";
import Post from "../../lib/Post";

const Dashboard = (): JSX.Element => {
    const postService: IPostService = new PostService();
    const userService: IUserService = new UserService();

    const [posts, setPosts] = useState<Post[] | never>([])
    const [users, setUsers] = useState<User[] | never>([])

    useEffect(() => {
        (async () => {
            await postService.Index()
            await userService.Index()
            setPosts(postService.posts)
            setUsers(userService.users)
        })();
    }, [])

    return (
        <Stack>
            <Row>
                <Col xs={12} lg={8}>
                    {
                        posts && posts.map((post, index) => (
                            <Posts post={post} index={index} key={post.title + index}/>
                        ))
                    }
                </Col>
                <Col xs={12} md={6} lg={4}>
                    {
                        users && users.map((user) => (
                            <UserList user={user}/>
                        ))
                    }
                </Col>
            </Row>
        </Stack>
    )
}

export default Dashboard;