import React, { useContext } from 'react';

import {Store} from "./useContext_store/UseContextStore";

function StoreOutput(props) {

    const { input } = useContext(Store);

    return (
        <div>
            {console.log('StoreOutput render')}
            <p>{input}</p>
        </div>
    );
}

export default StoreOutput;