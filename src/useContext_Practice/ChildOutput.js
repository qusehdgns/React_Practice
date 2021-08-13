import React from 'react';

// import StoreOutput from "./StoreOutput";
import SecondStoreOutput from "./SecondStoreOutput";

// 하나의 Context에 두개의 값이 존재할 경우
import SecondStoreOutput2 from "./SecondStoreOutput2";

function ChildOutput(props) {
    return (
        <div>
            {console.log('ChildOutput render')}
            {/*<StoreOutput/>*/}
            <SecondStoreOutput/>

            {/*하나의 Context에 두개의 값이 존재할 경우*/}
            <SecondStoreOutput2/>
        </div>
    );
}

export default ChildOutput;