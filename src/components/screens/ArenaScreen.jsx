import React from 'react'

export function ArenaScreen({ onJoinGame }) {
  return (
    <div className="flex-1 flex flex-col bg-[#f5f4ef] text-stone-900 p-4">
      {/* Top Bar with Settings & Help */}
      <div className="flex items-center justify-between pt-1 pb-2">
        <button className="w-8 h-8 rounded-full border-2 border-stone-900 bg-white flex items-center justify-center font-bold text-stone-800 shadow-[1.5px_1.5px_0_#000] cursor-pointer">
          ⚙️
        </button>

        {/* Live Countdown */}
        <div className="flex flex-col items-center">
          <span className="font-arcade text-base text-rose-500 tracking-wider font-bold">
            24h 05m 30s
          </span>
          <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-tight">
            until game start
          </span>
        </div>

        <button className="w-8 h-8 rounded-full border-2 border-stone-900 bg-white flex items-center justify-center font-bold text-stone-800 shadow-[1.5px_1.5px_0_#000] cursor-pointer">
          ?
        </button>
      </div>

      {/* Arena Preview Placeholder (Full interactive version in Step 2) */}
      <div className="my-auto text-center space-y-4 py-8">
        <div className="inline-block p-4 bg-amber-300 border-2 border-stone-900 rounded-2xl shadow-[3px_3px_0_#000]">
          <h2 className="font-bubble font-black text-2xl text-stone-900">
            Step Into The Arena
          </h2>
          <p className="text-xs text-stone-700 font-medium mt-1">
            Lobby & Leaderboard Ready for Step 2
          </p>
        </div>

        <div>
          <button
            onClick={onJoinGame}
            className="w-full max-w-xs py-3.5 px-6 font-bubble font-black text-base bg-amber-400 hover:bg-amber-300 text-stone-950 border-3 border-stone-950 rounded-2xl shadow-[0_5px_0_#1c1917] active:translate-y-1 active:shadow-[0_1px_0_#1c1917] transition-all cursor-pointer uppercase tracking-wider"
          >
            JOIN GAME 🚀
          </button>
        </div>
      </div>
    </div>
  )
}

export default ArenaScreen
