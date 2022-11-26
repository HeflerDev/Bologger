import React from "react";
import {Col, Row, Stack} from "react-bootstrap";
import User from "../../../lib/User";

export const UserList = ({users}:{users: User[]}) => (
    <Stack>
        <Row>
            {
                users && users.map((user: User, index: number) => (
                       <Col xs={12} key={user.username + index}>
                          <Stack className={"list-container"}>
                              <div className="block">
                                  <div className="label">Name:</div>
                                  <div className="value">{user.name}</div>
                              </div>
                              <div className="block">
                                  <div className="label">UserName:</div>
                                  <div className="value">{user.username}</div>
                              </div>
                              <div className="block">
                                  <div className="label">Email</div>
                                  <div className="value">{user.email}</div>
                              </div>
                          </Stack>
                       </Col>
                ))
            }
        </Row>
    </Stack>
)