import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const isHidden = useSelector((state) => state.isHidden);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch({ type: 'INCREASE' })
  };

  const increaseTenHandler = () => {
    dispatch({ type: 'INCREASE_10', amount: 10 })
  };

  const decreaseHandler = () => {
    dispatch({ type: 'DECREASE' })
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'HIDDEN' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isHidden ? null : <div className={classes.value}>{count}</div>}
      {/* <div className={classes.value}>{count}</div> */}
      <div>
        <button onClick={decreaseHandler}>빼기</button>
        <button onClick={increaseHandler}>더하기</button>
        <button onClick={increaseTenHandler}>10 더하기</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
