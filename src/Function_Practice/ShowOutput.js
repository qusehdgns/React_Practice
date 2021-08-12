import React from 'react';

function ShowOutput(props) {
    return (
        <div>
            {console.log('rendering[React.Memo Testing]')}
            <h4>{props.changeTyping}</h4>
        </div>
    );
}

export default ShowOutput;