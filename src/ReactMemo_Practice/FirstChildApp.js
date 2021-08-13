import React from 'react';

import SecondChildApp from "./SecondChildApp";
import SecondChildAppwithoutMemo from "./SecondChildAppwithoutMemo";

function FirstChildApp(props) {

    return (
        <div>
            {props.reactNum}

            {/*props 전달 X*/}
            {/*<SecondChildApp/>*/}
            {/*<SecondChildAppwithoutMemo/>*/}

            {/*props 전달 O*/}
            <SecondChildApp reactNum={props.reactNum}/>
            <SecondChildAppwithoutMemo reactNum={props.reactNum}/>
        </div>
    )
}

export default FirstChildApp;