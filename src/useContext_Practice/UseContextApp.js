import React from 'react';

import {UseContextStore, UseContextSecondStore} from "./useContext_store/UseContextStore";

import ChildInput from "./ChildInput";
import ChildOutput from "./ChildOutput";


function UseContextApp(props) {
    return (
        <UseContextStore>
            <UseContextSecondStore>
                <div>
                    <ChildInput/>
                    <ChildOutput/>
                </div>
            </UseContextSecondStore>
        </UseContextStore>
    );
}

export default UseContextApp;