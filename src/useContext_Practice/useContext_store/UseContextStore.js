import React, {useState, createContext} from 'react';

export const Store = createContext(null);

export const SecondStore = createContext(null);

export function UseContextStore({children}) {

    const [input, setInput] = useState('');

    const storeValue = {
        input, setInput
    }

    return (
        <Store.Provider value={storeValue}>
            {children}
        </Store.Provider>
    );
}

export function UseContextSecondStore({children}) {

    const [input1, setInput1] = useState('');

    // 하나의 Context에 두개의 값이 존재할 경우
    const [input2, setInput2] = useState('');

    const storeValue = {
        input1, setInput1,

        // 하나의 Context에 두개의 값이 존재할 경우
        input2, setInput2
    }

    return (
        <SecondStore.Provider value={storeValue}>
            {children}
        </SecondStore.Provider>
    );
}