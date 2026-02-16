import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import StartScreen from './components/StartScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [digitCount, setDigitCount] = useState(() => {
    const saved = localStorage.getItem('baseball_digit_mode');
    return saved ? parseInt(saved, 10) : 3;
  });

  const handleStart = (mode) => {
    setDigitCount(mode);
    localStorage.setItem('baseball_digit_mode', mode.toString());
    setGameStarted(true);
  };

  const handleBackToStart = () => {
    setGameStarted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-500 to-indigo-800 text-white selection:bg-yellow-400 selection:text-slate-900">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-24 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl" style={{ animationDelay: '4s' }}></div>
      </div>

      <main className="relative z-10 py-6 sm:py-12">
        <div className={`transition-all duration-500 ${gameStarted ? 'animate-fadeIn' : ''}`}>
          {gameStarted ? (
            <GameBoard digitCount={digitCount} onBackToStart={handleBackToStart} />
          ) : (
            <StartScreen onStart={handleStart} defaultMode={digitCount} />
          )}
        </div>
      </main>

      <footer className="relative z-10 text-center py-8 text-white/60 text-sm font-medium">
        <p>© 20260215 조율, 태윤과 함께 만든 야구의 신 게임입니다!</p>
        <p className="mt-1">모두모두 최고! ⚾</p>
      </footer>
    </div>
  );
}

export default App;
