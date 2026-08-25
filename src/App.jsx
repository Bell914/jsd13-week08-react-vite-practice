import { useState } from 'react'
import HeaderNavigation from './components/HeaderNavigation'
import MobileFrame from './components/MobileFrame'
import ArenaScreen from './components/screens/ArenaScreen'
import VotingScreen from './components/screens/VotingScreen'
import VictoryScreen from './components/screens/VictoryScreen'

function App() {
  const [activeScreen, setActiveScreen] = useState('arena')
  const [soundEnabled, setSoundEnabled] = useState(true)

  // Map screen key to top bubble title as in design
  const screenTitles = {
    arena: 'step into the arena',
    voting: 'choose the best',
    victory: 'take the crown',
  }

  return (
    <div className="min-h-screen bg-stone-900 flex flex-col bg-paper-texture">
      {/* Top Bar Navigation (Desktop & Tablet) */}
      <HeaderNavigation
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Mobile Display Container */}
      <main className="flex-1 flex items-center justify-center">
        <MobileFrame
          currentScreen={activeScreen}
          screenTitle={screenTitles[activeScreen]}
        >
          {activeScreen === 'arena' && (
            <ArenaScreen onJoinGame={() => setActiveScreen('voting')} />
          )}
          {activeScreen === 'voting' && (
            <VotingScreen onCompleteVote={() => setActiveScreen('victory')} />
          )}
          {activeScreen === 'victory' && (
            <VictoryScreen onRestart={() => setActiveScreen('arena')} />
          )}
        </MobileFrame>
      </main>

      {/* Footer credits like in image */}
      <footer className="w-full max-w-4xl mx-auto px-4 py-4 flex items-center justify-between text-xs text-stone-600 font-sans-meme">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-stone-400"></div>
          <span>Yapster</span>
        </div>
        <div>
          <span>curated by </span>
          <strong className="text-stone-800 font-bold">before</strong>
        </div>
      </footer>
    </div>
  )
}

export default App
