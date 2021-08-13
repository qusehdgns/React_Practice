import React, {useState} from 'react';

import PropTypeChildApp from "./PropTypeChildApp";

function PropTypesApp(props) {

    const [toggle, setToggle] = useState(true);

    const [stateForProps, setStateForProps] = useState('Test String');

    const changeTypeToString = () => {
        setToggle(!toggle);
        setStateForProps('Test String');
    };

    const changeTypeToNumber = () => {
        setToggle(!toggle);
        setStateForProps(1004);
    };

    return (
        <div>
            <PropTypeChildApp stateForProps={stateForProps}/>
            {toggle ?
                (<button onClick={changeTypeToNumber}>Change To Number</button>)
                :
                (<button onClick={changeTypeToString}>Change To String</button>)}
        </div>
    );
}

export default PropTypesApp;