import { useState, useEffect } from 'react';

export const store = {
    state: {},
    setState(value) {
        this.state = value;
        this.setters.forEach((setter) => setter(this.state));
    },
    setters: []
};

store.setState = store.setState.bind(store);

export function useStore() {
    //console.log('Store',store.setters);
    const [state, set] = useState(store.state);

    if (!store.setters.includes(set)) {
        store.setters.push(set);
    }

    useEffect(() => () => {
        store.setters = store.setters.filter((setter) => setter !== set);
    }, []);

    return [state, store.setState];
}
