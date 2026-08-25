import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-indigo-500 selection:text-white">
      <div className="max-w-md w-full bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          Tailwind CSS v4 + Vite + React
        </div>

        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 tracking-tight">
          Client Ready
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          โครงสร้างโปรเจกต์พร้อมใช้งานแล้ว เริ่มต้นเขียนโค้ดและปรับแต่ง UI ด้วย Tailwind CSS ได้ทันที
        </p>

        <div className="pt-2">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            Count is {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
