import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increaseHandler = (e) => {
    dispatch({ type: 'INCREASE' })
  };

  const decreaseHandler = (e) => {
    dispatch({ type: 'DECREASE' })
  };

  const toggleCounterHandler = () => { };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={decreaseHandler}>빼기</button>
        <button onClick={increaseHandler}>더하기</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
