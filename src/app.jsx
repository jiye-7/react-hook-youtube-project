import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  // callBack을 등록해놓으면
  // [] 빈 배열은 마운트가 되었을 때 한 번만 호출
  // 아무것도 전달하지 않으면 컴포넌트가 등록되었거나 업데이트 될 때 마다 이게 반복적으로 호출된다.
  // 원하는 변수를 전달하면 그것이 업데이트 될 때 마다 콜백함수가 불려진다.
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos}>Hello React :) Youtube api </VideoList>
    </div>
  );
}

export default App;
