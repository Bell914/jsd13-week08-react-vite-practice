import React from 'react'

export function MobileFrame({ children, currentScreen = 'arena', screenTitle = 'step into the arena' }) {
  const isDarkScreen = currentScreen === 'voting' || currentScreen === 'victory'

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 font-sans-meme">
      {/* Cartoon Sticker Title above the phone (Matching the design) */}
      <div className="mb-6 text-center select-none">
        <h1 className="text-3xl md:text-5xl font-black tracking-wide text-sticker lowercase">
          {screenTitle}
        </h1>
      </div>

      {/* Smartphone Container */}
      <div className="relative w-full max-w-[390px] h-[812px] max-h-[92vh] bg-stone-100 rounded-[50px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),0_0_0_12px_#1c1917,0_0_0_15px_#292524] overflow-hidden flex flex-col border border-stone-800">
        {/* Phone Status Bar */}
        <div className={`pt-3 px-7 flex justify-between items-center z-30 select-none ${isDarkScreen ? 'text-white' : 'text-stone-900'}`}>
          <span className="text-xs font-bold font-sans-meme tracking-tight">9:41</span>

          {/* Dynamic Island / Notch */}
          <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-2">
            <div className="w-2 h-2 rounded-full bg-stone-900 border border-stone-700/50"></div>
          </div>

          {/* Icons: Signal, Wifi, Battery */}
          <div className="flex items-center gap-1.5 text-xs">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L12 22l7.03-4.39C20.26 16.07 21 14.12 21 12c0-4.97-4.03-9-9-9z"/>
            </svg>
            <div className="w-5 h-2.5 border border-current rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-current rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* Screen Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative flex flex-col">
          {children}
        </div>

        {/* Phone Home Indicator Bar at bottom */}
        <div className="h-6 flex items-center justify-center bg-transparent z-30 pointer-events-none pb-1">
          <div className={`w-32 h-1 rounded-full ${isDarkScreen ? 'bg-stone-500/70' : 'bg-stone-800/60'}`}></div>
        </div>
      </div>
    </div>
  )
}

export default MobileFrame
