import React from "react";
import {Container, Stack} from "react-bootstrap";
import Dashboard from "./dashboard/Dashboard";

const App = (): JSX.Element => {
    return (
        <Container>
            <Stack>
                <Dashboard/>
            </Stack>
        </Container>
    )
}

export default App;