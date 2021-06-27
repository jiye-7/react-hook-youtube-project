import React from 'react';
import styles from './search_header.module.css';

const inputRef = React.createRef();
console.log(inputRef);

const SearchHeader = (props) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img className={styles.img} src="/images/youtubeLogo.png" alt="" />
      <h1 className={styles.title}>Youtube</h1>
    </div>

    <input
      ref={inputRef}
      className={styles.input}
      type="search"
      placeholder="Search... :)"
    />
    <button className={styles.button} type="submit">
      <i className="fas fa-search"></i>
    </button>
  </header>
);

export default SearchHeader;
