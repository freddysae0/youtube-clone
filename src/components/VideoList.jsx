import { NavLink } from 'react-router'
import VideoCard from './VideoCard'
import { VideoList as VideoListStyled } from '../styled-components/VideoList'
export default function VideoList({ videos, inputText }) {
    console.log(videos);

    return (
        <VideoListStyled>
            {videos.map((video, id) => (
                <NavLink
                    key={id}
                    to={`/${video.id.videoId}/`}
                    className="video-link"


                >
                    <VideoCard thumbnailUrl={video.snippet.thumbnails.url} name={video.title} description={video.description} ></VideoCard>
                </NavLink>
            ))}

        </VideoListStyled>

    )
}