import React from 'react';

function ShowInput(props) {
    return (
        <div>
            <input type="text" value={props.typing} onChange={props.typingChange}/>
        </div>
    );
}

export default ShowInput;