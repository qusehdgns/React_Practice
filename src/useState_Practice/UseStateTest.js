import React, {useState} from 'react';

function UseStateTest(props) {

    const [inputs, setInputs] = useState({
        id: '',
        pw: ''
    });

    const {id, pw} = inputs;

    const onChange = (event) => {
        // HTML 태그 상에서 반드시 name을 state 키값과 동일하게 두어야함
        const {value, name} = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const clickInfo = () => {
        alert(`id : ${id}\npw : ${pw}`);
    }

    return (
        <div>
            <input type="text" name="id" value={id} onChange={onChange}/>
            <br/>
            <input type="password" name="pw" value={pw} onChange={onChange}/>
            <br/>
            <button onClick={clickInfo}>Print Info</button>
        </div>
    );
}

export default UseStateTest;