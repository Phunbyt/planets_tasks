import React, { useContext, useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import client from '../../config/axiosconfig';
import GlobalState from '../../contexts/GlobalContext';
import PagePointer from '../page_pointer/PagePointer';
import Table from '../table/Table';
import styles from './PageBody.module.css';

const PageBody = () => {
  const { planets, pageCount, setPlanets } = useContext(GlobalState);
  const [isLoading, setIsloading] = useState(false); //
  const [totalPages, setTotalPages] = useState(0); //

  useEffect(() => {
    setIsloading(true);
    const fetchData = async () => {
      const { data } = await client.get(`/?page=${pageCount}`);
      setPlanets(data.results);
      setTotalPages(data.count);
      setIsloading(false);
    };
    fetchData();
  }, [pageCount]);

  return (
    <div className={styles.pageBody}>
      <div className={styles.pageBodyHead}>
        <h1>Current Page {pageCount}</h1>
        <div className={styles.pageBodyHeadSpinner}>
          {isLoading && <InfinitySpin color="red" />}
        </div>
      </div>
      <Table planets={planets} />
      <PagePointer count={totalPages} />
    </div>
  );
};

export default PageBody;
