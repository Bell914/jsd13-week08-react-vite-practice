import React from 'react'

export function HeaderNavigation({ activeScreen, setActiveScreen, soundEnabled, setSoundEnabled }) {
  const screens = [
    { id: 'arena', title: '1. Step Into The Arena', badge: 'Lobby' },
    { id: 'voting', title: '2. Choose The Best', badge: 'Battle' },
    { id: 'victory', title: '3. Take The Crown', badge: 'Winner' },
  ]

  return (
    <header className="w-full max-w-4xl mx-auto px-4 pt-4 pb-2 flex flex-wrap items-center justify-between gap-4 z-40">
      {/* Brand logo & tagline */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-indigo-600 border-2 border-stone-900 shadow-[2px_2px_0px_#1c1917] flex items-center justify-center text-white font-black text-lg">
          Y
        </div>
        <div>
          <span className="font-bubble font-black text-xl text-stone-100 tracking-wide">
            Yapster
          </span>
          <span className="ml-2 text-xs bg-amber-400 text-stone-900 font-bold px-2 py-0.5 rounded-full border border-stone-900 shadow-[1px_1px_0px_#000]">
            MEME ARENA
          </span>
        </div>
      </div>

      {/* Screen Tabs */}
      <nav className="flex items-center gap-1.5 bg-stone-800/90 p-1.5 rounded-2xl border border-stone-700 backdrop-blur-md">
        {screens.map((screen) => {
          const isActive = activeScreen === screen.id
          return (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(screen.id)}
              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs md:text-sm transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'bg-amber-400 text-stone-950 shadow-[0_2px_0_#1c1917] border border-stone-900 font-black'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-700/50'
              }`}
            >
              {screen.badge}
            </button>
          )
        })}
      </nav>

      {/* Sound Toggle */}
      <button
        onClick={() => setSoundEnabled(!soundEnabled)}
        className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-xl text-stone-300 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
        title={soundEnabled ? 'Disable Sound' : 'Enable Sound'}
      >
        <span>{soundEnabled ? '🔊' : '🔇'}</span>
        <span className="hidden sm:inline">{soundEnabled ? 'SFX ON' : 'SFX MUTED'}</span>
      </button>
    </header>
  )
}

export default HeaderNavigation
