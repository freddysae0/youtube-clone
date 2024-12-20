import { useNavigate, useParams } from 'react-router';
import useSWR from 'swr';
import { fetcher } from '../fetchers/github';
import YouTube from 'react-youtube';
import VideosList from '../components/VideosList';
import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import Description from '../components/Description';
import Loading from '../components/Loading';
import { useRecoilState } from 'recoil';
import { userPlayListAtom, userPlayListsAtom } from '../state/atoms';
import { updatePlaylist } from '../api';
import ShareButton from '../components/ShareButton';

function VideoPlaying() {
  const { videoId, playlistId } = useParams();
  const [inputText, setInputText] = useState('mrbeast');
  const { data, error, isLoading } = useSWR(
    `https://harbour.dev.is/api/videos/${videoId}`,
    fetcher
  );
  const [currentPlaylist, setCurrentPlaylist] = useRecoilState(userPlayListAtom);
  const [userPlayLists, setUserPlayLists] = useRecoilState(userPlayListsAtom);
  const navigator = useNavigate()
  if (error) return <div>Failed to load data</div>;
  if (isLoading) return <div className='w-screen h-fit flex justify-center items-center'><Loading></Loading></div>;

  // Asegúrate de que los datos existan antes de intentar acceder a ellos
  if (!data) return <div>No data found</div>;

  // Destructura los datos relevantes
  let {
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

  const onNewSearchText = (inputText) => {
    setInputText(inputText);
  };

  function addToPlaylist(video) {
    console.log(playlistId);
    console.log(video);
    console.log(currentPlaylist);

    const newPlaylist = {
      ...currentPlaylist,
      videos: [...currentPlaylist.videos, video]
    }
    const newUserPlayList = userPlayLists.map((playlist) => {
      if (playlist.id === playlistId) {
        return {
          ...playlist,
          videos: [...playlist.videos, video]
        }
      }
      return playlist;
    })
    setCurrentPlaylist((prev) => newPlaylist);
    setUserPlayLists((prev) => newUserPlayList);

    updatePlaylist(playlistId, newPlaylist);

  }


  function goToNextVideo() {
    const videoIndex = currentPlaylist.videos.findIndex((video) => video.videoId === videoId);
    if (videoIndex !== -1) {
      const nextVideo = currentPlaylist.videos[videoIndex + 1];
      if (nextVideo) {
        navigator(`/${nextVideo.videoId}/playlist/${playlistId}`);
      }
    }
  }
  return (
    <div className='flex flex-col items-center w-screen' style={{ display: 'flex' }}>
      <div className='relative w-full p-8 bg-primary-light dark:bg-primary-dark'>
        <img src="/logo.png" className="absolute top-1/2 -translate-y-1/2 h-20 z-50" ></img>

        <SearchForm inputText={inputText} onNewInputText={onNewSearchText} />
      </div>
      <div className='flex '>
        <section className='bg-white rounded-lg'>
          <div className=' pt-0 flex flex-col items-centers'>
            <div className='w-full'>
              <div className='w-full h-[800px] min-w-[1500px]'>

                <YouTube
                  className='relative'
                  videoId={videoId}
                  opts={{
                    height: '800',
                    width: '100%',
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  onEnd={goToNextVideo}
                >
                </YouTube>
              </div>
              <div className='bg-primary-light dark:bg-black text-white p-4 font-bold w-full h-10 flex items-center '>
                <div className='container max-w-3xl flex gap-4'>
                  <div className='flex gap-2'>

                    <VisibilityOutlinedIcon sx={{ color: 'white' }}></VisibilityOutlinedIcon>
                    <p>
                      {views.toLocaleString()}
                    </p>
                  </div>
                  <div className='flex gap-2'>

                    <ThumbUpOutlinedIcon sx={{ color: 'white' }}></ThumbUpOutlinedIcon>
                    <p>
                      {likeCount}
                    </p>
                  </div>
                  <div className='flex gap-2'>

                    <ThumbDownAltOutlinedIcon sx={{ color: 'white' }}></ThumbDownAltOutlinedIcon>
                    <p>
                      {dislikeCount}
                    </p>
                  </div>
                  <div>
                    <ShareButton url={window.location.href} title={title}></ShareButton>
                  </div>
                </div>

              </div>
              <Description description={description} owner={owner} datePublished={datePublished} genre={genre} isFamilyFriendly={isFamilyFriendly}></Description>
            </div>
          </div>

        </section>

        <div className='min-w-[340px] bg-primary-light dark:bg-primary-dark px-4'>
          <VideosList addToPlaylist={addToPlaylist} inputText={inputText}></VideosList>
        </div>
      </div>
    </div>
  );
}

export default VideoPlaying;
