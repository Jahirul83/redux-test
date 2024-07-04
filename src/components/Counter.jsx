import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counter/counterSlice";


const Counter = () => {


    const { count } = useSelector((state) => state.counter);
    // console.log(count);
    const dispatch = useDispatch()


    return (
        <div>
            <button onClick={() => dispatch(incrementByValue(5))}>increment by 5</button>
            <br />
            <button onClick={() => dispatch(increment())}>increment</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
};

export default Counter;