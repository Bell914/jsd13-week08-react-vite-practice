import React from 'react'

export function VictoryScreen({ onRestart }) {
  return (
    <div className="flex-1 flex flex-col bg-[#0b0518] text-white p-4 justify-between bg-disco-grid">
      {/* Top Header */}
      <div className="pt-2 text-center">
        <h2 className="font-bubble font-black text-3xl text-sticker-neon uppercase tracking-wider">
          YOUR WINNINGS
        </h2>
        <span className="text-xs text-fuchsia-300 font-bold uppercase tracking-widest">
          POINTS
        </span>
      </div>

      {/* Placeholder for Odometer & Dancing Pepe */}
      <div className="my-auto text-center space-y-4 py-8">
        <div className="p-3 bg-amber-100 border-2 border-stone-900 rounded-xl shadow-[3px_3px_0_#000] inline-block">
          <span className="font-digital text-3xl font-bold tracking-widest text-stone-950 px-2">
            100,000,000
          </span>
        </div>

        <div>
          <button
            onClick={onRestart}
            className="py-3 px-6 font-bubble font-black text-sm bg-emerald-400 hover:bg-emerald-300 text-stone-950 border-2 border-stone-950 rounded-xl shadow-[0_4px_0_#000] active:translate-y-1 active:shadow-[0_1px_0_#000] transition-all cursor-pointer uppercase"
          >
            Play Again 🔄
          </button>
        </div>
      </div>
    </div>
  )
}

export default VictoryScreen
