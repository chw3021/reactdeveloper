import {useReducer} from "react";

function reducer(state, action){
    switch(action.type){
        case "plus":
            return state + action.data;
        case "minus":
            return state - action.data;
        case "init":
            return 0;
        default:
            return state;
    }
}

function TestComponent() {
    const [count, dispatch] = useReducer(reducer,0);

    const onIncrease = () => {
        dispatch({type: "plus", data:1});
    };

    const onDecrease = () => {
        dispatch({type: "minus", data:1});
    };

    const onInit = () => {
        dispatch({type: "init"});
    };
    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <strong>{count}</strong>
            </div>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
                <button onClick={onInit}>reset</button>
            </div>
        </div>
    )
}

export default TestComponent;