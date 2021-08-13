import React, {useState} from 'react';

import FirstChildApp from "./FirstChildApp";

function ReactMemoApp(props) {

    const [reactNum, setReactNum] = useState(0);

    return (
        <div>
            {console.log(reactNum)}
            <FirstChildApp reactNum={reactNum}/>
            <button onClick={() => setReactNum(reactNum + 1)}>ReactMemo Testing</button>
        </div>
    );
}

export default ReactMemoApp;