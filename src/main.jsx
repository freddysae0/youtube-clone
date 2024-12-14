import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import SearchVideos from './pages/SearchVideos.jsx'
import Description from './pages/Description.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchVideos />} />
        <Route path="/:videoId" element={<Description />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
