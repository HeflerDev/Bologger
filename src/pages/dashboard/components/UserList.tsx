import React, {useState} from "react";
import {Stack} from "react-bootstrap";
import User from "../../../lib/User";
import {useNavigate} from "react-router-dom";
import {DownArrow} from "../../../components/Icons";

export const UserList = ({user}: { user: User }) => {
    const [drop, setDrop] = useState<boolean>(false)
    const navigate = useNavigate();
    return (
        <Stack className={"list-container"}>
            <div className="data-block">
                <div className="label">Name:</div>
                <div className="value">{user.name}</div>
            </div>
            <div className="data-block">
                <button className={"button__accent"} onClick={() => navigate(`/user/${user.id}`)}>Show Profile</button>
            </div>
            <div className="data-block">
                <div className="label">Username:</div>
                <div className="value">{user.username}</div>
            </div>
            <div className="data-block">
                <div className="label">Email:</div>
                <div className="value">{user.email}</div>
            </div>
            {
                drop && (
                    <Stack>
                        <div className="data-block">
                            <div className="label">Phone:</div>
                            <div className="value">{user.phone}</div>
                        </div>
                        <div className="data-block">
                            <div className="label">Website:</div>
                            <div className="value">{user.website}</div>
                        </div>
                        <div className="data-block">
                            <div className="label">Company Name:</div>
                            <div className="value">{user.company.name}</div>
                        </div>
                        <div className="data-block">
                            <div className="value">"{user.company.catchPhrase}"</div>
                        </div>
                    </Stack>
                )
            }
            <div className="dropdown" onClick={() => setDrop(!drop)}>
                <DownArrow color={"#999"} size={"35"} rotate={drop ? 2 : 0}/>
            </div>
        </Stack>
    )
}