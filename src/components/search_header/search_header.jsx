import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef(); // react-hook에서는 useRef를 사용해야지 계속해서 memo가 된다.

  const handleSearch = () => {
    const value = inputRef.current.value;

    // 검색하는 것을 props으로 받아와야 된다.
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src='/images/youtubeLogo.png' alt='logo' />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search... :)'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <i className='fas fa-search'></i>
      </button>
    </header>
  );
});

export default SearchHeader;
