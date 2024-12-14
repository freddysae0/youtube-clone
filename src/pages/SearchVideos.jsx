import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../fetchers/github';
import SearchForm from '../components/SearchForm';
import VideoList from '../components/VideoList';


function SearchVideos() {
  const [inputText, setInputText] = useState('mrbeast');

  const { data, error, isLoading } = useSWR(
    ` https://harbour.dev.is/api/search?q=${inputText}`,
    fetcher
  );

  const onNewUsername = (inputText) => {
    setInputText(inputText);
  };

  if (error)
    return (
      <div className="error">
        <p>Failed to load. Please try again later.</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  console.log(data);


  return (
    <div className="app-container">
      <header className="header">
        <h2>Youtube </h2>
      </header>
      <main>
        <section className="search-section">
          <SearchForm inputText={inputText} onNewInputText={onNewUsername} />
        </section>

        <section className="videos-section">
          {data && Array.isArray(data) && data.length > 0 ? (
            <VideoList videos={data} inputText={inputText} ></VideoList>
          ) : (
            <p className="no-videos">No videos found.</p>
          )}
        </section>

      </main>
    </div >
  );
}

export default SearchVideos;
