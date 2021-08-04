import React from "react";
import './App.css';
import {grommet, Grommet} from "grommet";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HeaderComponent from "./components/Header";
import MainComponent from "./components/MainContext";
import {HashRouter, Switch, Route} from "react-router-dom";
import {FormEdit} from "./components/AddEdit";

export default function App() {
    return (
        <div>
            <HashRouter>
                <Grommet full theme={grommet}>
                    <Grid
                        rows={['xxsmall', 'medium', 'xsmall']}
                        columns={['1/4', '3/4']}
                        areas={[
                            ['header', 'header'],
                            ['sidebar', 'main'],
                            ['footer', 'footer'],
                        ]}
                        gap="small"
                    >
                        <Switch>
                            <Route path="/" component={MainComponent}> </Route>
                            <Route path="/books" component={MainComponent}> </Route>
                            <Route exact path="/books/add" component={FormEdit}> </Route>
                        </Switch>
                        <Box gridArea="header">
                            <HeaderComponent/>
                        </Box>
                        <Box background="light-5" gridArea="sidebar">
                            sidebar
                        </Box>

                        <Box background="light-2" gridArea="main">
                            <MainComponent></MainComponent>
                        </Box>

                        <Box background="dark-2" gridArea="footer">
                            Footer
                        </Box>
                    </Grid>
                </Grommet>
            </HashRouter>
        </div>
    );
}

