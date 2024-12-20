import { useRecoilState } from "recoil"
import { userPlayListAtom, userPlayListsAtom } from "../state/atoms"
import { useEffect, useState } from "react";
import { createPlaylist, getPlaylist } from "../api";
import Input from "./Input";
import RandomStyledButton from "./RandomStyledButton";
import { NavLink, useNavigate, useParams } from 'react-router'
import Button from "./Button";
import PlaylistVideos from "./PlaylistVideos";

export default function Description({ description, owner, datePublished, genre, isFamilyFriendly }) {
    const { videoId, playlistId } = useParams();
    const [playlists, setPlaylists] = useRecoilState(userPlayListsAtom);
    const [currentPlaylist, setCurrentPlaylist] = useRecoilState(userPlayListAtom);
    const [newPlaylist, setNewPlaylist] = useState('');
    const navigator = useNavigate()

    async function addIfNotExistsPlaylist() {
        if (!playlistId) { return; }

        const playlistExists = playlists.some((playlist) => playlist.id === playlistId);
        if (!playlistExists) {
            const newPlaylist = await getPlaylist(playlistId)
            addPlaylist(newPlaylist)
        }
    }

    useEffect(() => {
        addIfNotExistsPlaylist
    }, [])
    addIfNotExistsPlaylist()

    async function addPlaylist(playlist) {
        setPlaylists([...playlists, playlist])
    }
    function changeCurrentPlaylist(playlist) {
        setCurrentPlaylist(playlist)
        navigator(`/${videoId}/playlist/${playlist.id}`)
    }
    async function submitNewPlaylistForm(e) {
        e.preventDefault();
        const playlist = await createPlaylist(newPlaylist);
        await addPlaylist(playlist);
    }
    return <div id='Description' className='w-full p-4 flex flex-col gap-4  dark:bg-primary-dark'>

        {playlistId && <PlaylistVideos videos={currentPlaylist.videos} playlistId={playlistId}></PlaylistVideos>}
        <p><strong>Description:</strong> <br /> {description}</p>
        <p><strong>Owner:</strong> {owner}</p>
        <p><strong>Published on:</strong> {new Date(datePublished).toLocaleDateString()}</p>
        <p><strong>Genre:</strong> {genre}</p>
        <p><strong>Family Friendly:</strong> {isFamilyFriendly ? 'Yes' : 'No'}</p>


        <div className="flex flex-col gap-4">

            <h3 className='font-bold text-xl'>Playlists:</h3>
            <form id="new-playlist" onSubmit={submitNewPlaylistForm}>
                <Input value={newPlaylist} onChange={(e) => setNewPlaylist(e.target.value)}></Input>
            </form>
            <div>
                <NavLink to={`/${videoId}`}>
                    <Button >None</Button>

                </NavLink>
                {playlists.map((playlist, i) => (
                    <span key={i} onClick={() => changeCurrentPlaylist(playlist)}>
                        <RandomStyledButton >{playlist.name}</RandomStyledButton>
                    </span>

                ))}
            </div>
        </div>
    </div>
}