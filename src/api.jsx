import axios from "axios";

export async function createPlaylist(name) {
    try {
        const response = await axios.post('https://harbour.dev.is/api/playlists', { name: name })
        return response.data
    }
    catch (e) {
        console.error(e);
    }
}

export async function updatePlaylist(playlist_id, playlist) {
    try {
        const response = await axios.put(`https://harbour.dev.is/api/playlists/${playlist_id}`, playlist)
        return response.data
    }
    catch (e) {
        console.error(e);
    }
}

export async function getPlaylist(id) {
    try {
        const response = await axios.get(`https://harbour.dev.is/api/playlists/${id}`)
        return response.data
    }
    catch (e) {
        console.error(e);
    }
}
