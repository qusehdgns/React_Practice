import React, {useState, useEffect} from 'react';

function CounterFunction(props) {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('useEffect(() => {...}, [])[Function]')

        return () => console.log('clean up');
    }, [number]);


    const handleIncrease = () => {
        setNumber(number + 1);
    }

    function handleDecrease() {
        setNumber(number - 1);
    }


    return (
        <div>
            {console.log('render[Function]')}
            <h1>Function Counter</h1>
            <div>Value: {number}</div>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </div>
    );
}

export default CounterFunction;