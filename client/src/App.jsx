import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { backgroundImageService } from './services/BackgroundImageService.js';
import Pop from './utils/Pop.js';
import { AppState } from './AppState.js';
import { getHomePageURL } from './utils/homepage.utils.js';


export function App() {

  const [current, setURL] = useState(null);
  useEffect(() => {

    const fetchImg = async() => {

     await getHomePageURL()
      setURL(AppState.backgroundImage.url)
    };
    fetchImg()
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${current})` }} id="app">
      <header>
        <Navbar imageInfo={AppState.backgroundImage.author}/>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-dark text-light text-center p-3 ">
        Made with 💖 by CodeWorks
      </footer>

    </div>
  )
}

