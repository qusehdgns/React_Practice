import React, {useContext} from 'react';

import {Store} from "./useContext_store/UseContextStore";

function StoreInput(props) {

    const { input, setInput } = useContext(Store);

    const InputOnChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <div>
            {console.log('StoreInput render')}
            <input type="text" value={input} onChange={InputOnChange}/>
        </div>
    );
}

export default StoreInput;