import React from 'react';

function SecondChildApp(props) {
    return (
        <div>
            {console.log('Render with ReactMemo')}
            ReactMemo
        </div>
    );
}

export default React.memo(SecondChildApp);

// React.Memo 없는 경우
// export default SecondChildApp;