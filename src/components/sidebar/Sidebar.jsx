import React from 'react';
import styles from './Sidebar.module.css';
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <p>Sidebar</p>
      </div>
    </div>
  );
};

export default Sidebar;
