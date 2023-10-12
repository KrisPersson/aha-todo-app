import * as React from 'react';
import { useState } from 'react'
import LandingView from './views/LandingView/LandingView'
import MainView from './views/MainView/MainView'
import './App.scss'

function App() {
  const [showLandingPage, setShowLandingPage] = useState<boolean>(true)

  return (
    <>
      {
        showLandingPage ? 
        <LandingView setShowLandingPage={setShowLandingPage} /> :
        <MainView />
      }
    </>
  )
}

export default App
