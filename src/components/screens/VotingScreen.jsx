import React from 'react'

export function VotingScreen({ onCompleteVote }) {
  return (
    <div className="flex-1 flex flex-col bg-[#0d0915] text-white p-4 justify-between">
      {/* Top Round Timer */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex flex-col">
          <span className="font-arcade text-lg text-rose-400 font-bold">07s</span>
          <span className="text-[10px] text-stone-400 uppercase tracking-wider">until next round</span>
        </div>

        <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-400/40 rounded-full">
          <span className="font-bubble font-black text-emerald-400 text-sm tracking-wider">+318 PTS</span>
        </div>
      </div>

      <div className="my-auto text-center space-y-4 py-8">
        <div className="inline-block p-4 bg-stone-900 border border-stone-800 rounded-2xl">
          <h2 className="font-bubble font-black text-2xl text-amber-300">
            Choose The Best
          </h2>
          <p className="text-xs text-stone-400 font-medium mt-1">
            Voting Arena Ready for Step 3
          </p>
        </div>

        <div>
          <button
            onClick={onCompleteVote}
            className="w-full max-w-xs py-3 px-6 font-bubble font-black text-sm bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer uppercase tracking-wider"
          >
            Go to Victory 👑
          </button>
        </div>
      </div>
    </div>
  )
}

export default VotingScreen
