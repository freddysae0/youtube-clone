

import { VideoItem } from '../styled-components/VideoItem'
export default function VideoCard(video) {


    return (<VideoItem className="video-item">
        <h3>{video.name}</h3>
        <img src={video.thumbnailUrl} alt={video.thumbnail} />
        <p>{video.description || 'No description provided'}</p>

    </VideoItem>)
}