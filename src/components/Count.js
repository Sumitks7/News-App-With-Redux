import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/count/action";

const Count = () => {
    const count = useSelector((state) => state.count.count);
    const dispatch = useDispatch();

    return (
        <div className="text-center">
            <h1 className="display-1">{count}</h1>
            <Button variant="dark" onClick={() => dispatch(incrementCounter())}>
                Increment
            </Button>
            <br />
            <br />
            <Button variant="dark" onClick={() => dispatch(incrementCounter(5))}>
                Increment 5
            </Button>
            <br />
            <br />
            <Button variant="dark" onClick={() => dispatch(decrementCounter())}>
                Decrement
            </Button>
            <br />
            <br />
            <Button variant="dark" onClick={() => dispatch(decrementCounter(5))}>
                Increment 5
            </Button>
        </div>
    );
};

export default Count;
