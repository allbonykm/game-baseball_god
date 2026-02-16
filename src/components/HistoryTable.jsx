import React from 'react';

const HistoryTable = ({ history }) => {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-slate-800 px-4 sm:px-6 py-2 sm:py-3">
                <h3 className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                    <span className="text-xl">📋</span> Game History
                </h3>
            </div>
            <div className="max-h-[300px] lg:max-h-none overflow-y-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-100 sticky top-0 z-10">
                        <tr>
                            <th className="px-3 sm:px-6 py-2 text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Player</th>
                            <th className="px-3 sm:px-6 py-2 text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Guess</th>
                            <th className="px-3 sm:px-6 py-2 text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Result</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {history.length === 0 ? (
                            <tr>
                                <td colSpan="3" className="px-3 sm:px-6 py-6 sm:py-8 text-center text-slate-400 italic text-sm">
                                    Waiting for the first pitch...
                                </td>
                            </tr>
                        ) : (
                            history.map((item, index) => (
                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-3 sm:px-6 py-2 sm:py-3 font-semibold text-slate-700 text-sm sm:text-base">{item.player}</td>
                                    <td className="px-3 sm:px-6 py-2 sm:py-3">
                                        <span className="font-mono bg-slate-200 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded tracking-widest text-base sm:text-lg font-bold text-slate-800">
                                            {item.guess.join('')}
                                        </span>
                                    </td>
                                    <td className="px-3 sm:px-6 py-2 sm:py-3">
                                        <div className="flex gap-1 sm:gap-2">
                                            {item.strike > 0 && (
                                                <span className="bg-red-500 text-white px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                                                    {item.strike}S
                                                </span>
                                            )}
                                            {item.ball > 0 && (
                                                <span className="bg-blue-500 text-white px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                                                    {item.ball}B
                                                </span>
                                            )}
                                            {item.out && (
                                                <span className="bg-slate-400 text-white px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                                                    OUT
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryTable;
