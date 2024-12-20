import { NavLink, useNavigate } from "react-router";
import VideoCard from "./VideoCard";

export default function PlaylistVideos({ videos, playlistId }) {
    return (
        <div className="flex flex-wrap  " >
            {videos.length === 0 && <div className="flex flex-col items-center">
                <img className=" w-40 mr-11 animate-bounce h-auto" src="/not-found.png"></img>
                <p className="font-bold" >No videos found, add videos to <strong className="text-primary-light"> OUR </strong> playlist</p></div>}
            {videos.map((video, id) => (
                <div className="w-52">
                    <NavLink
                        key={id}
                        to={`/${video.videoId}/playlist/${playlistId}`}
                        className="video-link"
                    >
                        <VideoCard key={video.id} name={video.title} thumbnailUrl={video.thumbnailUrl} thumbnail={video.thumbnail} />
                    </NavLink>
                </div>
            ))}
        </div>
    );
}