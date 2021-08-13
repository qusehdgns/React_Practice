import React, {useContext} from 'react';

import {SecondStore} from "./useContext_store/UseContextStore";

function SecondStoreInput(props) {

    const { input1, setInput1 } = useContext(SecondStore);

    const InputOnChange = (event) => {
        setInput1(event.target.value);
    }

    return (
        <div>
            {console.log('SecondStoreInput render')}
            <input type="text" value={input1} onChange={InputOnChange}/>
        </div>
    );
}

export default SecondStoreInput;