import React from 'react';

const NumberPad = ({ onNumberClick, onDelete, onEnter, currentGuess }) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <div className="bg-white/60 backdrop-blur-md p-4 sm:p-6 rounded-[2.5rem] border border-white/40 shadow-2xl">
            <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-4">
                {numbers.map((num) => (
                    <button
                        key={num}
                        onClick={() => {
                            if (window.navigator.vibrate) window.navigator.vibrate(10);
                            onNumberClick(num);
                        }}
                        disabled={currentGuess.length >= 3 || currentGuess.includes(num)}
                        className="h-14 sm:h-16 flex items-center justify-center bg-white hover:bg-blue-50 disabled:bg-slate-100 disabled:text-slate-300 text-2xl font-black text-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-90 active:bg-blue-100 border-b-4 border-slate-200 hover:border-blue-200 disabled:border-slate-100"
                    >
                        {num}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <button
                    onClick={() => {
                        if (window.navigator.vibrate) window.navigator.vibrate(20);
                        onDelete();
                    }}
                    className="py-4 bg-red-100 hover:bg-red-200 text-red-600 font-black rounded-2xl transition-all active:scale-95 shadow-sm border-b-4 border-red-200"
                >
                    DELETE
                </button>
                <button
                    onClick={() => {
                        if (window.navigator.vibrate) window.navigator.vibrate([20, 10, 20]);
                        onEnter();
                    }}
                    disabled={currentGuess.length < 3}
                    className="py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-black rounded-2xl transition-all shadow-lg active:scale-95 border-b-4 border-blue-800 disabled:border-slate-400"
                >
                    GO! ⚾
                </button>
            </div>
        </div>
    );
};

export default NumberPad;
