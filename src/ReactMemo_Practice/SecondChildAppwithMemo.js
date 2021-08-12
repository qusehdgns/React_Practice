import React from 'react';

function SecondChildAppwithMemo(props) {
    return (
        <div>
            {console.log('Render without ReactMemo')}
            Without ReactMemo
        </div>
    );
}

export default SecondChildAppwithMemo;