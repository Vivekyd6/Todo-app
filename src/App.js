import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


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

export default  function todos(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" color="inherit">
                        <img alt="Todo's App" style={{ width: "50px", }} src="logo.png">
                        </img>
                    </IconButton>
                    <Typography variant="h4" textAlign="center"> Todos</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.appContainer}>
                <Paper className={classes.wrapper} elevation={0}>
                <h1>Vivek Yadav</h1>
                </Paper>
            </Container>
        </Box>
    );

};


