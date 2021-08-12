import React, {useState, useEffect, useRef} from 'react';

function CounterFunction(props) {

    const [number, setNumber] = useState(0);

    //componentDidMount with useEffect
    useEffect(() => {
        console.log('componentDidMount[Function]');

        //componentWillUnmount with useEffect
        return () => {
            console.log('componentWillUnmount[Function]')
        }
    }, []);

    //componentDidUpdate with useEffect
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            console.log('componentDidUpdate[Function]')
        }
    });

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