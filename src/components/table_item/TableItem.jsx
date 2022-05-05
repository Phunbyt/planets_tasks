import React from 'react';
import styles from './TableItem.module.css';

const TableItem = ({ planet }) => {
  return (
    <div className={styles.table_item_container}>
      <p className={`${styles.table_item} ${styles.table_item_serial_number}`}>
        {planet.index + 1}
      </p>
      <p className={styles.table_item}>{planet.name}</p>
      <p className={styles.table_item}>{planet.rotation_period}</p>
      <p className={styles.table_item}>{planet.orbital_period}</p>
      <p className={styles.table_item}>{planet.diameter}</p>
      <p className={styles.table_item}>{planet.climate}</p>
      <p className={`${styles.table_item} ${styles.table_item_wide}`}>
        {planet.gravity}
      </p>
      <p className={`${styles.table_item} ${styles.table_item_wide}`}>
        {planet.terrain}
      </p>
      <p className={styles.table_item}>{planet.surface_water}</p>
      <p className={styles.table_item}>{planet.population}</p>
      <p className={styles.table_item}>{planet.residents.length}</p>
      <p className={styles.table_item}>{planet.films.length}</p>

      <a
        href={planet.url}
        className={`${styles.table_item} ${styles.table_item_wide}`}
      >
        {planet.url}
      </a>
    </div>
  );
};

export default TableItem;
