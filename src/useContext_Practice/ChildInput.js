import React from 'react';

// import StoreInput from "./StoreInput";
import SecondStoreInput from "./SecondStoreInput";

// 하나의 Context에 두개의 값이 존재할 경우
import SecondStoreInput2 from "./SecondStoreInput2";

function ChildInput(props) {
    return (
        <div>
            {console.log('ChildInput render')}
            {/*<p><b>StoreInput</b></p>*/}
            {/*<StoreInput/>*/}
            <p><b>SecondStoreInput</b></p>
            <SecondStoreInput/>

            {/*하나의 Context에 두개의 값이 존재할 경우*/}
            <p><b>SecondStoreInput2</b></p>
            <SecondStoreInput2/>
        </div>
    );
}

export default ChildInput;