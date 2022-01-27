import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import Addtodo from "./components/Todos/add-todo";
import TodoContainer from "./components/Todos/todo-container";
const useStyles = makeStyles((theme) => ({
    root: {},
    appContainer: {
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 100,
    },
    wrapper: {
        textAlign: "center",
        width: "100%",
    },
}));

export default function todos() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <img alt="VY ToDo APP" style={{ width: "50px", }} src="logo.png">
                        </img>
                    </IconButton>
                    <Typography variant="h4" textalign="center">VY Todos WebApp</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.appContainer}>
                <Paper className={classes.wrapper} elevation={0}>
                    <Addtodo />
                    <TodoContainer />
                </Paper>
            </Container>
        </Box>
    );

};


