import React from 'react';

import SecondChildApp from "./SecondChildApp";
import SecondChildAppwithMemo from "./SecondChildAppwithMemo";

function FirstChildApp(props) {

    return (
        <div>
            {props.reactNum}

            {/*<SecondChildApp/>*/}
            <SecondChildApp reactNum={props.reactNum}/>

            {/*<SecondChildAppwithMemo/>*/}
            <SecondChildAppwithMemo reactNum={props.reactNum}/>
        </div>
    )
}

export default FirstChildApp;