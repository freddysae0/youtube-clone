import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../fetchers/github';
import VideoCard from './VideoCard';
import { NavLink } from 'react-router';
import Loading from './Loading';


function VideosList({ addToPlaylist, inputText, shortName }) {

  const { data, error, isLoading } = useSWR(
    ` https://harbour.dev.is/api/search?q=${inputText}`,
    fetcher
  );


  if (error)
    return (
      <div className="error">
        <p>Failed to load. Please try again later.</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Loading></Loading>
      </div>
    );
  console.log(data);


  return (
    <div className="container">


      <section className="bg-primary videos-section overflow-auto rounded-3xl  max-h-[90vh]">
        {data && Array.isArray(data) && data.length > 0 ? (
          <>
            {data.map((video, id) => (
              <NavLink
                key={id}
                to={`/${video.id.videoId}/`}
                className="video-link"
              >
                <VideoCard addToPlaylist={addToPlaylist} shortName={shortName} thumbnailUrl={video.snippet.thumbnails.url} name={video.title} description={video.description} videoId={video.id.videoId} ></VideoCard>
              </NavLink>
            ))}
          </>
        ) : (
          <p className="no-videos">No videos found.</p>
        )}
      </section>

    </div >
  );
}

export default VideosList;
