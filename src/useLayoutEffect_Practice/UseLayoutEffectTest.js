import React, {useState} from 'react';
import {useEffect} from 'react';
// import {useLayoutEffect} from 'react';

function UseLayoutEffectTest(props) {

    const [num, setNum] = useState(null);

    useEffect(() => {
        if(num === null){
            setNum(1000);
        }
    }, [num]);

    // useLayoutEffect(() => {
    //     if(num === null){
    //         setNum( 1000);
    //     }
    // }, [num]);
    

    return (
        <div>
            <button onClick={() => setNum(null)}>useLayoutEffect Test</button>
            <br/>
            {num}
        </div>
    );
}

export default UseLayoutEffectTest;