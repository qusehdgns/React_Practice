import React, { useContext } from 'react';

import {SecondStore} from "./useContext_store/UseContextStore";

function SecondStoreOutput2(props) {

    const { input2 } = useContext(SecondStore);

    return (
        <div>
            {console.log('SecondStoreOutput2 render')}
            <p>{input2}</p>
        </div>
    );
}

export default SecondStoreOutput2;