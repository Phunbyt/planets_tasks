import React from 'react';
import TableHeader from '../table_header/TableHeader';
import TableItem from '../table_item/TableItem';
import styles from './Table.module.css';

const Table = ({ planets }) => {
  const planetHeaders = {
    index: 's/n',
    name: 'Name',
    rotation_period: 'Rotation Period',
    orbital_period: 'Orbital Period',
    diameter: 'Diameter',
    climate: 'Climate',
    gravity: 'Gravity',
    terrain: 'Terrain',
    surface_water: 'Surface Water',
    population: 'Population',
    residents: 'Residents',
    films: 'Films',
    created: 'Created',
    edited: 'Edited',
    url: 'URL',
  };

  return (
    <div>
      <div className={styles.table}>
        <div className={styles.table_items}>
          <TableHeader planet={planetHeaders} />
          {!planets.length ? (
            <div className={styles.table_items_error}>
              <h4>Currently unable to get planets</h4>
            </div>
          ) : (
            planets.map((planet, index) => (
              <TableItem key={index} planet={{ ...planet, index }} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
