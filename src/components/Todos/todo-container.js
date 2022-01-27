import { Box, makeStyles, Divider, Grid, Typography, List } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from "./todo-item";


const useStyles = makeStyles(() => ({
    root: {
        margin: 20,
        padding: 20,
        backgroundColor: red,
    },
}));


export default function TodosContainer() {
const classes = useStyles();

const { todos } = useSelector((state) => {
    return {
        todos: state.todos,
    };
});

const prioritisedTodos = (function prioritise() {
    const importantTodos = [];
    const notImportantTodos = [];

    todos.forEach((todo) => {
        if (todo.important) {
            importantTodos.push(todo);
        } else {
            notImportantTodos.push(todo);
        }
    });

    return importantTodos.concat(notImportantTodos);
})();

return (
    <Box className={classes.root}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography align="left" variant="h5" gutterBottom>
                    My Todos
                </Typography>
                <Divider />
                <List>
                    {prioritisedTodos.map((todo) => {
                        if (!todo.completed) {
                            return <TodoItem {...todo} />;
                        } else {
                            return null;
                        }
                    })}
                </List>
            </Grid>
            <Grid item xs={6}>
                <Typography align="left" variant="h5" gutterBottom>
                    Completed
                </Typography>
                <Divider />
                <List>
                    {prioritisedTodos.map((todo) => {
                        if (todo.completed) {
                            return <TodoItem {...todo} />;
                        } else {
                            return null;
                        }
                    })}
                </List>
            </Grid>
        </Grid>
    </Box>
);
}
