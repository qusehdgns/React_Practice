import React, {useState, useEffect} from 'react';

function CounteruseEffect(props) {

    const [count, setCount] = useState(0);

    const handleAlertClick = () => {
        setTimeout(() => {
            alert(`You clicked on : ${count}`);
        }, 3000);
    }

    useEffect(() => {
        setTimeout(() => console.log(`Clicked ${count} Times`), 3000);
    });

    
    // function sayHi(person){
    //     const name = person.name;
    //     setTimeout(() => {
    //         alert(`Hello ${name}`);
    //     }, 3000);
    // }
    //
    // let someone = { name: 'Dong' };
    // sayHi(someone);
    //
    // someone = { name: 'Hun' };
    // sayHi(someone);
    //
    // someone = { name: 'Byun' };
    // sayHi(someone);

    console.log('CounteruseEffect Render');

    return (
        <div>
            <p>Clicked Times : {count}</p>
            <button onClick={() => setCount(count + 1)}>Count Click</button>
            <button onClick={handleAlertClick}>alert Click</button>
        </div>
    );
}

export default CounteruseEffect;