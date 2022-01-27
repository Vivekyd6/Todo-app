import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import "regenerator-runtime/runtime";

import reducer from "./reducer";
import middleware from "./middleware";
//import { createElement } from "react";


const sagaMiddleware=createSagaMiddleware();
export const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(middleware);