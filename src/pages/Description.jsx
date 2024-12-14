import { useParams } from 'react-router';
import useSWR from 'swr';
import { fetcher } from '../fetchers/github';
import YouTube from 'react-youtube';
import SearchVideos from './SearchVideos';

function Description() {
  const { videoId } = useParams();

  const { data, error, isLoading } = useSWR(
    `https://harbour.dev.is/api/videos/${videoId}`,
    fetcher
  );

  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <div>Loading...</div>;

  // Asegúrate de que los datos existan antes de intentar acceder a ellos
  if (!data) return <div>No data found</div>;

  // Destructura los datos relevantes
  const {
    title,
    description,
    owner,
    thumbnailUrl,
    datePublished,
    genre,
    isFamilyFriendly,
    duration,
    views,
    likeCount,
    dislikeCount,
  } = data;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>{title}</h1>

        <YouTube

          videoId={videoId}
        ></YouTube>

        <p><strong>Description:</strong> {description}</p>
        <p><strong>Owner:</strong> {owner}</p>
        <p><strong>Published on:</strong> {new Date(datePublished).toLocaleDateString()}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Family Friendly:</strong> {isFamilyFriendly ? 'Yes' : 'No'}</p>
        <p><strong>Duration:</strong> {Math.floor(duration / 60)}m {duration % 60}s</p>
        <p><strong>Views:</strong> {views.toLocaleString()}</p>
        <p><strong>Likes:</strong> {likeCount}</p>
        <p><strong>Dislikes:</strong> {dislikeCount}</p>
      </div>

      <div>
        <SearchVideos></SearchVideos>
      </div>
    </div>
  );
}

export default Description;
