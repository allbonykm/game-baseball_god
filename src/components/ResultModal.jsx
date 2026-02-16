import React from 'react';

const ResultModal = ({ winner, onRestart, onBackToStart }) => {
    if (!winner) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center transform animate-in zoom-in slide-in-from-bottom-10 duration-500">
                <div className="text-8xl mb-6 animate-bounce">🏆</div>
                <h2 className="text-4xl font-black text-slate-800 mb-2">VICTORY!</h2>
                <p className="text-xl text-slate-600 mb-8">
                    <span className="font-bold text-blue-600">{winner}</span> has defeated the Baseball God!
                </p>

                <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100">
                    <p className="text-sm text-blue-700 font-medium uppercase tracking-widest mb-2">New Record</p>
                    <p className="text-2xl font-bold text-slate-800">Next game 선공: {winner}</p>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={onRestart}
                        className="w-full py-4 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-95"
                    >
                        Play Again ⚾
                    </button>
                    {onBackToStart && (
                        <button
                            onClick={onBackToStart}
                            className="w-full py-3 px-8 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-base rounded-2xl transition-all active:scale-95 border border-slate-200"
                        >
                            🎮 모드 바꾸기
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultModal;
