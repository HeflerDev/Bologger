import React, {useEffect, useState} from "react";
import {Col, Row, Stack} from "react-bootstrap";
import IPostService from "../../services/PostService/IPostService";
import User from "../../lib/User";
import PostService from "../../services/PostService";
import IUserService from "../../services/UserService/IUserService";
import UserService from "../../services/UserService";
import {Posts, UserList} from "./components";
import Post from "../../lib/Post";
import ReactPaginate from "react-paginate";

const Dashboard = (): JSX.Element => {
    const postService: IPostService = new PostService();
    const userService: IUserService = new UserService();

    const [posts, setPosts] = useState<Post[] | never>([])
    const [users, setUsers] = useState<User[] | never>([])

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 10;
    const currentItems = posts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(posts.length / 10);

    useEffect(() => {
        (async () => {
            await postService.Index()
            await userService.Index()
            setPosts(postService.posts)
            setUsers(userService.users)
        })();
    }, [])


    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * 10) % posts.length;
        setItemOffset(newOffset);
        window.scrollTo(0, 0)
    }

    return (
        <Stack>
            <Row>
                <Col xs={12} className={"website-title"}>
                    The Post
                </Col>
                <Col xs={12} lg={8}>
                    {
                        posts && currentItems.map((post, index) => (
                            <Posts post={post} index={(index + 1) * (itemOffset + 1)} key={post.title + index}/>
                        ))
                    }
                    <ReactPaginate
                        pageCount={pageCount}
                        breakLabel={"  ...  "}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={1}
                        previousLabel={"<"}
                        nextLabel={">"}
                        containerClassName={"paginate-container"}
                        pageClassName={"paginate-page"}
                        pageLinkClassName={"paginate-link"}
                        previousClassName={"paginate__previous"}
                        nextClassName={"paginate__next"}
                        nextLinkClassName={"paginate-links__next"}
                        previousLinkClassName={"paginate-links__previous"}
                        activeLinkClassName={"paginate-active"}
                    />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    {
                        users && users.map((user) => (
                            <UserList user={user} key={user.id + user.name}/>
                        ))
                    }
                </Col>
            </Row>
        </Stack>
    )
}

export default Dashboard;