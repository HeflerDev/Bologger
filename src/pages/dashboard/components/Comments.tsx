import React from "react";
import Comment from "../../../lib/Comment";
import {Col, Row, Stack} from "react-bootstrap";

export const Comments = ({comment, index}: { comment: Comment, index: number }): JSX.Element => {
    return (
        <Stack className={"comments-container"}>
            <Row>
                <Col xs={4} sm={3} md={2} lg={2} className={"comment-block"}>
                    <div className="image">
                        <img src={`https://picsum.photos/100?random=${index}`} alt="profile-pic"/>
                    </div>
                </Col>
                <Col xs={8} sm={9} md={10} lg={10} className={"comment-block h-100"}>
                    <div className="name">
                        {comment.name}
                    </div>
                    <div className="email">
                        {comment.email}
                    </div>
                </Col>
                <Col xs={12} className={"comment-block"}>
                    <div className="body">
                        "{comment.body}"
                    </div>
                </Col>
            </Row>
        </Stack>
    )
}