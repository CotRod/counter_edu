import React, { useEffect, useReducer, useState } from 'react';
import styles from './counter.module.css';
import { getRandom } from './utils/getRandom';
import { fetchData } from './utils/fetchData';
import { EActionTypes } from './types';
import { initialValue, reducer } from './store/reducer';

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    const getData = async () => {
      dispatch({ type: EActionTypes.RANDOM_ASYNC, payload: await fetchData() });
      setIsLoading(false);
    }
    if (isLoading) {
      getData().catch(e => console.log(e));
    }

  }, [isLoading])

  const onIncrement = () => dispatch({type: EActionTypes.INCREMENT});

  const onDecrement = () => dispatch({type: EActionTypes.DECREMENT});

  const onRandom = () => dispatch({ type: EActionTypes.RANDOM, payload: getRandom() });

  const onReset = () => dispatch({ type: EActionTypes.RESET});

  const onAsyncRandomClick = async () => {
    setIsLoading(true);
  }

  return (
    <div className={styles.wrapper}>
      <div><span className={styles.value}>{isLoading ? 'loading' : state}</span></div>
      <div className={styles.buttons}>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
        <button onClick={onReset}>reset</button>
        <button onClick={onRandom}>random</button>
        <button onClick={onAsyncRandomClick}>random async</button>
      </div>
    </div>
  );
}

export default Counter;
