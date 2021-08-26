import {useReducer} from "react";
import {reducer} from "../../services/reducer.api";

export default function Counter() {
    const [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

    return (
        <div>
            <div>state 1: {a}</div>
            <button onClick={() => dispatch({obj: 1, act: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: 1, act: '-'})}>dec</button>
            <div>state 2: {b}</div>
            <button onClick={() => dispatch({obj: 2, act: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: 2, act: '-'})}>dec</button>
            <div>state 3: {c}</div>
            <button onClick={() => dispatch({obj: 3, act: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: 3, act: '-'})}>dec</button>
        </div>
    );
}