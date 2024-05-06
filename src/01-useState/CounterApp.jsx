import { useState } from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    });

    function handleClick() {
        counter.counter1 = counter.counter1 + 1;
        setCounter({...counter});
    }

    return (
        <>
            <h1>CounterApp 1:{counter.counter1} / 2:{counter.counter2} / 3:{counter.counter3}</h1>
            <hr />  
            <button className="btn btn-primary" onClick={handleClick}>+1</button>
        </>
    )
}