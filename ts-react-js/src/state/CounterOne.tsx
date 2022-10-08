
import {useReducer} from 'react';

type CounterOneState = {
    count: number
}

type UpdateAction = {
    type: "increment" | 'decrement'
    payload:number
}

type ResetAction = {
    type: 'reset'
}
type CounterOneAction = UpdateAction | ResetAction;
const initialState = { count: 0}



function reducer(state:CounterOneState,action:CounterOneAction){
    switch(action.type){
        case 'increment':
            return {count: state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}
            case 'reset':
                return initialState
            default:
                return state    
    }
}

export const CounterOne = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <>
        Count: {state.count}
        <button onClick={()=> dispatch({type:'increment',payload:10})}>increment 10</button>
        <button onClick={()=> dispatch({type:'decrement',payload:10})}>decrement 10</button>
        <button onClick={()=> dispatch({type:'reset'})}>reset</button>
        </>
    )
}