import React, {useEffect, useState} from "react";
import {Stack} from "react-bootstrap";
import Post from "../../../lib/Post";
import PostService from "../../../services/PostService";
import IPostService from "../../../services/PostService/IPostService";
import Comment from "../../../lib/Comment";
import {Comments} from "./Comments";

export const Posts = ({post, index}: { post: Post, index: number }): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false)
    const [comments, setComments] = useState<Comment[] | never>([])
    const postService: IPostService = new PostService();

    useEffect(() => {
        (async () => {
            await postService.Comments(post.id)
            setComments(postService.comments)
        })();
    })

    return (
        <Stack className={"post-container"}>
            <Stack className={"post-title"}>
                <div className="title">{post.title[0].toUpperCase() + post.title.substring(1)}</div>
            </Stack>
            <Stack className="post-image">
                <img src={`https://picsum.photos/800/500?random=${index}`} className="image" alt={"picture"}/>
            </Stack>
            <Stack className={"post-body"}>
                <div className="body">
                    {post.body[0].toUpperCase() + post.body.substring(1) + "."}
                </div>
            </Stack>
            {
                open && comments && comments.map((comment, index) => (
                    <Comments index={index} comment={comment} key={comment.email + index}/>
                ))
            }
            <Stack>
                <div className="show-comments">
                    <button className={open ? "button" : "button__accent"} onClick={() => setOpen(!open)}>
                        {open ? "Hide " : null}Comments
                    </button>
                </div>
            </Stack>
        </Stack>
    )
}