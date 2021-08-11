import React from 'react';

import MyName from './MyName_Practice/MyName';
import CounterFunction from "./LifeCycle_Practice/CounterFunction";
import CounterClass from "./LifeCycle_Practice/CounterClass";

import ShowApp from "./Function_Practice/ShowApp";

import CounteruseEffect from "./useEffect_Practice/CounteruseEffect";

import UseStateTest from "./useState_Practice/UseStateTest";

function App() {
    return (
        <>
            <MyName/>
            <CounterFunction/>
            <CounterClass/>

            <ShowApp />

            <CounteruseEffect />

            <p></p>

            <UseStateTest />
        </>
    );
}


export default App;
