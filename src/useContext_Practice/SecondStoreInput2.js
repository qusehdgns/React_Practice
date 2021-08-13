import React, {useContext} from 'react';

import {SecondStore} from "./useContext_store/UseContextStore";

function SecondStoreInput2(props) {

    const { input2, setInput2 } = useContext(SecondStore);

    const InputOnChange = (event) => {
        setInput2(event.target.value);
    }

    return (
        <div>
            {console.log('SecondStoreInput2 render')}
            <input type="text" value={input2} onChange={InputOnChange}/>
        </div>
    );
}

export default SecondStoreInput2;