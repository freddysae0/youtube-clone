import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import VideosList from './components/VideosList.jsx'
import VideoPlaying from './pages/VideoPlaying.jsx';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './pages/Home.jsx';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:videoId" element={<VideoPlaying />} />
          <Route path="/:videoId/playlist/:playlistId" element={<VideoPlaying />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
)
