import React from 'react';
import { store, useStore } from './customGlobalHooks';

// Initial value for the global state
store.state = 0;

function Hello() {
    const [count, setCount] = useStore()

    function handleSetInHello(value) {
        //console.log('Hello', value, count);
        setCount(count + value);
    }

    return (
        <>
            <div>Hello component: {count}</div>
            <button type="button" onClick={() => handleSetInHello(1)}>Plus 1!</button>
        </>
    );
}

function Count() {
    const [count, setCount] = useStore();

    function handleSetInCount(value) {
        //console.log('Count', value, count);
        setCount(count + value);
    }

    return (
        <>
            <div>Count component: {count}</div>
            <button type="button" onClick={() => handleSetInCount(2)}>Plus 2!</button>
        </>
    );
}

export { Hello, Count };