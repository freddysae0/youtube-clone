import { PlaylistAdd } from "@mui/icons-material";


export default function VideoCard({ videoId = null, addToPlaylist = null, shortName, name, thumbnailUrl, thumbnail }) {
    const proccesedName = name
    if (shortName) {
        const proccesedName = name.substring(0, 20) + "...";
    }
    return (
        <div className="relative p-4 video-item">
            {addToPlaylist !== null &&
                <button className="absolute top-5 right-5" onClick={(e) => { e.preventDefault(); addToPlaylist({ videoId: videoId, title: name, thumbnailUrl: thumbnailUrl }) }}>
                    <PlaylistAdd fontSize="large" className="bg-yellow-light 
                dark:bg-yellow-dark hover:bg-yellow-500 
                dark:hover:bg-yellow-400 rounded-lg p-2 
                text-black">
                    </PlaylistAdd>
                </button>
            }
            <img className="w-full h-40 object-cover rounded-lg" src={thumbnailUrl} alt={thumbnail} ></img>
            <h3 className="text-white mt-2 font-bold font-mono">{proccesedName}</h3>
        </div>
    )
}