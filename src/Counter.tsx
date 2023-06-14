import React, { useEffect, useState } from 'react';
import styles from './counter.module.css';
import { getRandom } from './utils/getRandom';
import { fetchData } from './utils/fetchData';

const initialValue = 0;
function Counter() {
  const [value, setValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    const getData = async () => {
      setValue(await fetchData());
      setIsLoading(false);
    }
    if (isLoading) {
      getData().catch(e => console.log(e));
    }

  }, [isLoading])

  const onIncrement = () => {
    setValue((value) => value + 1);
  }

  const onDecrement = () => {
    setValue((value) => value - 1);
  }

  const onRandom = () => {
    setValue(getRandom());
  }

  const onReset = () => {
    setValue(initialValue);
  }

  const onAsyncRandomClick = async () => {
    setIsLoading(true);
  }

  return (
    <div className={styles.wrapper}>
      <div><span className={styles.value}>{isLoading ? 'loading' : value}</span></div>
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
