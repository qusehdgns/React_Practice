import React, {useState} from 'react';

import CounterClass from "./CounterClass";
import CounterFunction from "./CounterFunction";

function LifeCycleApp(props) {

    const [componentState, setComponentState] = useState('CounterClass');
    const [component, setComponent] = useState(<CounterClass/>);

    const switchComponent = () => {
        if(componentState === 'CounterClass'){
            setComponentState('CounterFunction');
            setComponent(<CounterFunction/>);
        } else {
            setComponentState('CounterClass');
            setComponent(<CounterClass/>);
        }
    }

    return (
        <div>
            <button onClick={switchComponent}>Switch Component</button>
            {component}
        </div>
    );
}

export default LifeCycleApp;