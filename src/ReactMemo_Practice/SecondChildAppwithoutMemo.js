import React from 'react';

function SecondChildAppwithoutMemo(props) {
    return (
        <div>
            {console.log('Render without ReactMemo')}
            Without ReactMemo
        </div>
    );
}

export default SecondChildAppwithoutMemo;