import React, {useState, useEffect} from 'react';

import ShowInput from "./ShowInput";
import ShowOutput from "./ShowOutput";

function ShowApp(props) {

    const [typing, setTyping] = useState('');
    const [changeTyping, setChangeTyping] = useState('');

    const typingChange = (event) => {
        setTyping(event.target.value);
    }

    useEffect(() => {
        return () => {
            setTyping('');
            setChangeTyping('');
        };
    }, []);


    useEffect(() => {
        (typing === '') || setChangeTyping(typing + '1');
    }, [typing]);


    return (
        <>
            <ShowOutput changeTyping={changeTyping} />
            <ShowInput typing={typing} typingChange={typingChange} />
        </>
    );
}

export default ShowApp;