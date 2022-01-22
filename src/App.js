import Pomodoro from "./components/Pomodoro/Pomodoro";
import ToDo from "./components/ToDo/ToDo";
import Grid from "@mui/material/Grid";
import Header from "./components/Header";
import React from "react";
import Container from "@mui/material/Container";

function App() {
    return (
        <>
            <Header/>
            <Container sx={{textAlign: 'center'}}>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={12} xs={12}>
                        <Pomodoro />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <ToDo />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default App;
