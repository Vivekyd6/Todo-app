import { Box, Button, TextField } from '@material-ui/core';
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../actions";







export default function Addtodo() {

    const [title, setTitle] = useState(null);
    const titleFieldRef = useRef(null);

    const dispatch = useDispatch();

    function handleTextChange(e) {
        setTitle(e.target.value);
    }

    function addTodoItem() {
        if (title) {
            dispatch({
                type: ADD_TODO,
                payload: {
                    title,
                },
            });
            setTitle(null);
            titleFieldRef.current.value = "";
        }
    }

    return (
        <Box>
            <TextField
                style={{
                    width: 400,
                }}
                inputRef={titleFieldRef}
                label="Add new todo"
                variant="filled"
                onChange={handleTextChange}
            ></TextField>
            <Button
                style={{
                    height: 61,
                }}
                variant="contained"
                color="primary"
                onClick={addTodoItem}
            >
                Add
            </Button>
        </Box>
    );
}