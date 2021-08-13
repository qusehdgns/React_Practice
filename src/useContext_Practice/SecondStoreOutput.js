import React, { useContext } from 'react';

import {SecondStore} from "./useContext_store/UseContextStore";

function SecondStoreOutput(props) {

    const { input1 } = useContext(SecondStore);

    return (
        <div>
            {console.log('SecondStoreOutput render')}
            <p>{input1}</p>
        </div>
    );
}

export default SecondStoreOutput;