import React from 'react';
import styles from './header.css';

export function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>TODOs</h2>
    </header>
  )
}
