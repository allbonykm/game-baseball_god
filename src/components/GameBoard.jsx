import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import HistoryTable from './HistoryTable';
import NumberPad from './NumberPad';
import ResultModal from './ResultModal';
import { generateTargetNumber, checkGuess, loadGameRecord, saveGameRecord } from '../utils/gameLogic';

const GameBoard = ({ digitCount = 3, onBackToStart }) => {
    const [targetNumber, setTargetNumber] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState('Choyul');
    const [currentGuess, setCurrentGuess] = useState([]);
    const [history, setHistory] = useState([]);
    const [winner, setWinner] = useState(null);
    const [score, setScore] = useState({ Choyul: 0, Taeyun: 0 });
    const [godStatus, setGodStatus] = useState("내가 생각한 비밀 숫자를 맞춰봐!");

    useEffect(() => {
        const record = loadGameRecord();
        setScore(record.score);
        if (record.lastWinner) {
            setCurrentPlayer(record.lastWinner);
        }
        startNewGame();
    }, []);

    const startNewGame = () => {
        setTargetNumber(generateTargetNumber(digitCount));
        setHistory([]);
        setCurrentGuess([]);
        setWinner(null);
        setGodStatus("흥, 날 이길 수는 없을걸?");
    };

    const handleNumberClick = (num) => {
        if (currentGuess.length < digitCount && !currentGuess.includes(num)) {
            setCurrentGuess([...currentGuess, num]);
        }
    };

    const handleDelete = () => {
        setCurrentGuess(currentGuess.slice(0, -1));
    };

    const handleEnter = () => {
        if (currentGuess.length !== digitCount) return;

        const result = checkGuess(targetNumber, currentGuess);
        const newEntry = {
            player: currentPlayer,
            guess: currentGuess,
            strike: result.strike,
            ball: result.ball,
            out: result.out
        };

        setHistory([newEntry, ...history]);
        setCurrentGuess([]);

        if (result.strike === digitCount) {
            setWinner(currentPlayer);
            const newScore = { ...score, [currentPlayer]: score[currentPlayer] + 1 };
            setScore(newScore);
            saveGameRecord({ lastWinner: currentPlayer, score: newScore });
            setGodStatus("말도 안 돼! 내가 지다니...");
        } else {
            // Update God message based on performance
            if (result.strike >= 2) {
                setGodStatus("으윽... 위험한데?! 😨");
            } else if (result.ball >= 2) {
                setGodStatus("오호, 감은 좋은걸? 🤔");
            } else if (result.out) {
                setGodStatus("하하하! 완전 빗나갔어! 😆");
            } else {
                setGodStatus("오호, 좀 비껴갔는걸?");
            }

            // Switch player
            setCurrentPlayer(currentPlayer === 'Choyul' ? 'Taeyun' : 'Choyul');
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-8 space-y-8 pb-12 animate-fadeIn">
            {/* Header / God Section */}
            <div className="text-center space-y-2 sm:space-y-4">
                <div className="flex items-center justify-between">
                    <button
                        onClick={onBackToStart}
                        className="flex items-center gap-1 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-bold rounded-xl backdrop-blur-sm border border-white/20 transition-all active:scale-95"
                    >
                        ← 모드 변경
                    </button>
                    <div className="bg-white/15 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/20 backdrop-blur-sm">
                        <span className="text-white text-xs sm:text-sm font-bold">
                            {digitCount === 3 ? '⚾ 보통' : '🔥 도전'} 모드
                        </span>
                    </div>
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white drop-shadow-lg tracking-tight">
                    야구의 <span className="text-yellow-400 font-baseball">신</span>
                </h1>
                <div className="flex justify-center flex-col items-center">
                    <CharacterCard
                        name="야구의 신"
                        imagePath="images/baseball_god.webp"
                        isActive={false}
                        status={godStatus}
                        isGod={true}
                    />
                    <div className="mt-4 bg-white/20 px-4 sm:px-6 py-1 sm:py-2 rounded-full border border-white/30 backdrop-blur-sm">
                        <span className="text-white text-sm sm:text-base font-bold tracking-widest uppercase">
                            SCORE: {score.Choyul} - {score.Taeyun}
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Game Area */}
            <div className="grid lg:grid-cols-[3fr_2fr] gap-6 sm:gap-12 items-start">
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex justify-around items-center bg-blue-900/40 p-3 sm:p-8 rounded-[2rem] sm:rounded-3xl border border-blue-400/30 backdrop-blur-md gap-2 sm:gap-6">
                        <div className="flex-1">
                            <CharacterCard
                                name="Choyul"
                                imagePath="images/CY.webp"
                                isActive={currentPlayer === 'Choyul'}
                            />
                        </div>
                        <div className="text-2xl sm:text-4xl font-black text-yellow-400 animate-pulse px-2">VS</div>
                        <div className="flex-1">
                            <CharacterCard
                                name="Taeyun"
                                imagePath="images/TY.webp"
                                isActive={currentPlayer === 'Taeyun'}
                            />
                        </div>
                    </div>

                    {/* Input State */}
                    <div className="bg-slate-800 p-4 sm:p-8 rounded-[2rem] sm:rounded-3xl border-4 border-slate-700 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 animate-pulse opacity-50"></div>
                        <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                            {Array.from({ length: digitCount }, (_, i) => (
                                <div
                                    key={i}
                                    className={`w-12 h-16 sm:w-16 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-4xl font-black transition-all duration-200 ${currentGuess[i] !== undefined
                                        ? 'bg-blue-600 text-white scale-105 shadow-lg border-b-4 sm:border-b-6 border-blue-800'
                                        : 'bg-slate-700 text-slate-500 border-2 border-dashed border-slate-600'
                                        }`}
                                >
                                    {currentGuess[i] ?? '?'}
                                </div>
                            ))}
                        </div>
                        <NumberPad
                            onNumberClick={handleNumberClick}
                            onDelete={handleDelete}
                            onEnter={handleEnter}
                            currentGuess={currentGuess}
                            digitCount={digitCount}
                        />
                    </div>
                </div>

                {/* History Area */}
                <div className="lg:sticky lg:top-8">
                    <HistoryTable history={history} />
                </div>
            </div>

            <ResultModal winner={winner} onRestart={startNewGame} onBackToStart={onBackToStart} />
        </div>
    );
};

export default GameBoard;
