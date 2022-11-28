import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import IUserService from "../../services/UserService/IUserService";
import UserService from "../../services/UserService";
import User from "../../lib/User";
import {Col, Row, Stack} from "react-bootstrap";
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import {useGeographic} from "ol/proj";
import {DownArrow} from "../../components/Icons";

const User = (): JSX.Element => {
    const userService: IUserService = new UserService();
    const [userData, setUserData] = useState<User | null>(null)
    const navigate = useNavigate()
    const {id} = useParams()
    useGeographic()

    const map = new Map({
        target: "map",
        layers: [
            new TileLayer({
                source: new OSM(),
            })
        ],
        view: new View({
            center: [
                parseInt(userData?.address.geo.lng as string),
                parseInt(userData?.address.geo.lat as string)
            ],
            zoom: 5
        })
    })

    useEffect(() => {
        (async () => {
            await userService.Show(id)
            setUserData(userService.user);
        })();
    }, [])

    return (
        <Stack>
            <div className="icon-container" onClick={() => navigate("/")}>
                <DownArrow rotate={1} color={"purple"} size={"60"}/>
            </div>
            {
                userData && id && (
                    <Row>
                        <Col xs={12}>
                            <div className="image-block">
                                <img
                                    src={`https://picsum.photos/id/${parseInt(id) * parseInt(id) * parseInt(id)}/300`}
                                    alt="img"
                                    className="image"/>
                            </div>
                            <div className="name-block">
                                <div className="name">{userData.name}</div>
                            </div>
                        </Col>
                        <Col>
                            <Stack className="address-block">
                                <div className="title">Address</div>
                                <div className="info">
                                    <div>{userData.address.city}</div>
                                    <div>{userData.address.street}</div>
                                    <div>{userData.address.suite}</div>
                                </div>
                            </Stack>
                        </Col>
                    </Row>
                )
            }
            <Stack className={"map-container"}>
                <div id="map" style={{height: "400px", width: "100%"}}></div>
            </Stack>
        </Stack>
    )
}

export default User;