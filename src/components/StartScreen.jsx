import React, { useState } from 'react';
import CharacterCard from './CharacterCard';

const StartScreen = ({ onStart, defaultMode = 3 }) => {
    const [selectedMode, setSelectedMode] = useState(defaultMode);

    const modes = [
        {
            value: 3,
            label: '⚾ 보통',
            description: '숫자 3개를 맞춰라!',
            color: 'from-blue-500 to-blue-700',
            border: 'border-blue-400',
            ring: 'ring-blue-400',
            shadow: 'shadow-blue-500/30',
        },
        {
            value: 4,
            label: '🔥 도전',
            description: '숫자 4개를 맞춰라!',
            color: 'from-orange-500 to-red-600',
            border: 'border-orange-400',
            ring: 'ring-orange-400',
            shadow: 'shadow-orange-500/30',
        },
    ];

    return (
        <div className="max-w-2xl mx-auto p-4 sm:p-8 space-y-8 animate-fadeIn">
            {/* Header with Baseball God */}
            <div className="text-center space-y-2">
                <h1 className="text-4xl sm:text-6xl font-black text-white drop-shadow-lg tracking-tight">
                    야구의 <span className="text-yellow-400">신</span>
                </h1>
                <CharacterCard
                    name="야구의 신"
                    imagePath="images/baseball_god.webp"
                    isActive={false}
                    status="나를 이길 수 있겠어? 😏"
                    isGod={true}
                />
            </div>

            {/* Rules Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-6 sm:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-black text-white mb-4 flex items-center gap-2">
                    📖 게임 규칙
                </h2>
                <div className="space-y-3 text-white/90 text-sm sm:text-base">
                    <p className="font-semibold text-yellow-300">
                        야구의 신이 비밀 숫자를 정했어! 맞춰봐!
                    </p>
                    <div className="bg-white/10 rounded-2xl p-4 space-y-2 font-mono">
                        <p className="text-white/70 text-xs uppercase tracking-widest mb-2 font-sans font-bold">
                            예시: 정답이 1 2 3 일 때
                        </p>
                        <div className="flex items-center gap-3">
                            <span className="bg-white/20 px-3 py-1 rounded-lg font-bold">1 2 3</span>
                            <span>→</span>
                            <span className="bg-red-500/80 px-2 py-0.5 rounded-full text-xs font-bold">3S</span>
                            <span className="text-yellow-400 font-bold font-sans">⚾ 승리!</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-white/20 px-3 py-1 rounded-lg font-bold">1 3 5</span>
                            <span>→</span>
                            <span className="bg-red-500/80 px-2 py-0.5 rounded-full text-xs font-bold">1S</span>
                            <span className="bg-blue-500/80 px-2 py-0.5 rounded-full text-xs font-bold">1B</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="bg-white/20 px-3 py-1 rounded-lg font-bold">4 5 6</span>
                            <span>→</span>
                            <span className="bg-slate-500/80 px-2 py-0.5 rounded-full text-xs font-bold">OUT</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-center">
                        <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-2">
                            <span className="font-bold text-red-300">⚾ Strike</span>
                            <p className="text-xs text-white/70 mt-1">숫자와 위치 모두 맞음</p>
                        </div>
                        <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-2">
                            <span className="font-bold text-blue-300">🔵 Ball</span>
                            <p className="text-xs text-white/70 mt-1">숫자는 맞지만 위치 다름</p>
                        </div>
                        <div className="bg-slate-500/20 border border-slate-400/30 rounded-xl p-2">
                            <span className="font-bold text-slate-300">❌ Out</span>
                            <p className="text-xs text-white/70 mt-1">맞는 숫자가 없음</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mode Selection */}
            <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-white text-center">
                    🎮 모드를 선택하세요
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {modes.map((mode) => (
                        <button
                            key={mode.value}
                            onClick={() => setSelectedMode(mode.value)}
                            className={`relative bg-gradient-to-br ${mode.color} p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 active:scale-95 ${selectedMode === mode.value
                                    ? `${mode.border} ring-4 ${mode.ring} scale-105 ${mode.shadow} shadow-2xl`
                                    : 'border-white/20 opacity-60 hover:opacity-80'
                                }`}
                        >
                            {selectedMode === mode.value && (
                                <div className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shadow-lg animate-bounce">
                                    ✓
                                </div>
                            )}
                            <div className="text-2xl sm:text-4xl font-black text-white mb-1 sm:mb-2">
                                {mode.label}
                            </div>
                            <p className="text-white/80 text-xs sm:text-sm font-medium">
                                {mode.description}
                            </p>
                            <div className="mt-2 sm:mt-3 flex justify-center gap-1">
                                {Array.from({ length: mode.value }, (_, i) => (
                                    <div
                                        key={i}
                                        className="w-6 h-8 sm:w-8 sm:h-10 bg-white/30 rounded-lg flex items-center justify-center text-sm sm:text-lg font-bold text-white"
                                    >
                                        ?
                                    </div>
                                ))}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Start Button */}
            <button
                onClick={() => onStart(selectedMode)}
                className="w-full py-5 sm:py-6 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-black text-xl sm:text-2xl rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-yellow-500/30 transition-all transform hover:scale-[1.02] active:scale-95 border-b-6 border-orange-600 hover:border-orange-700 tracking-wider"
            >
                게임 시작! ⚾
            </button>
        </div>
    );
};

export default StartScreen;
