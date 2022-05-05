import React, { useContext } from 'react';
import GlobalState from '../../contexts/GlobalContext';
import styles from './PagePointer.module.css';

const PagePointer = ({ count }) => {
  const { pageCount, setPageCount } = useContext(GlobalState);
  const divided = count / 10;

  const increasePageCount = () => {
    if (pageCount >= divided) {
      setPageCount(pageCount);
    } else {
      setPageCount(pageCount + 1);
    }
  };
  const decreasePageCount = () => {
    if (pageCount <= 1) {
      setPageCount(pageCount);
    } else {
      setPageCount(pageCount - 1);
    }
  };

  const randomPage = (pageNumber) => {
    setPageCount(pageNumber);
  };

  return (
    <div className={styles.pagePointer}>
      <div className={styles.pagePointer__container}>
        <button
          className={styles.pagePointer__item}
          onClick={decreasePageCount}
        >
          &lt;
        </button>
        {Array(divided)
          .fill(0)
          .map((item, index) => (
            <button
              onClick={() => randomPage(index + 1)}
              className={styles.pagePointer__item}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        <button
          className={styles.pagePointer__item}
          onClick={increasePageCount}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PagePointer;
