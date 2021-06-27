class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=3&key=AIzaSyCKU7R8RBXAAnEfPqyi9tRm4lFgRX2n3g0`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?type=video&key=${this.key}&part=snippet&maxResults=3&q=${query}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
