import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      // 검색여부와 상관없이 항상 video를 초기화
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  // callBack을 등록해놓으면
  // [] 빈 배열은 마운트가 되었을 때 한 번만 호출
  // 아무것도 전달하지 않으면 컴포넌트가 등록되었거나 업데이트 될 때 마다 이게 반복적으로 호출된다.
  // 원하는 변수를 전달하면 그것이 업데이트 될 때 마다 콜백함수가 불려진다.
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
