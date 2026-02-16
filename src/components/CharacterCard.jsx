import React, { useState } from 'react';

const getInitialFallback = (name) => {
    const initial = (name || '?').charAt(0).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150"><rect width="150" height="150" rx="75" fill="%234f46e5"/><text x="50%25" y="54%25" dominant-baseline="middle" text-anchor="middle" font-size="64" font-family="sans-serif" font-weight="bold" fill="white">${initial}</text></svg>`;
    return `data:image/svg+xml,${svg}`;
};

const CharacterCard = ({ name, imagePath, isActive, status, isGod }) => {
    const [imgError, setImgError] = useState(false);

    // Styling based on role and active state
    // 'isGod' uses high-contrast primary colors: Deep Blue background with Bright Yellow border
    const cardStyles = isGod
        ? 'scale-100 sm:scale-105 bg-blue-700 border-4 sm:border-8 border-yellow-400 shadow-[0_0_50px_rgba(29,78,216,0.6)]'
        : isActive
            ? 'scale-105 sm:scale-110 ring-4 ring-yellow-400 bg-blue-100 shadow-2xl'
            : 'scale-100 bg-white shadow-md grayscale opacity-70';

    const avatarSize = isGod ? 'w-48 h-48 sm:w-80 sm:h-80' : 'w-24 h-24 sm:w-32 sm:h-32';
    const avatarShape = isGod ? 'rounded-3xl' : 'rounded-full';
    const textColor = isGod ? 'text-white' : 'text-slate-800';
    const statusColor = isGod ? 'text-yellow-300' : 'text-slate-500';

    return (
        <div className={`p-4 sm:p-6 rounded-[2rem] sm:rounded-[3rem] transition-all duration-500 transform ${cardStyles} max-w-full overflow-hidden shadow-lg`}>
            <div className={`relative ${avatarSize} mx-auto overflow-hidden ${avatarShape} border-4 border-white shadow-2xl bg-white/10`}>
                <img
                    src={imgError ? getInitialFallback(name) : imagePath}
                    alt={name}
                    className="w-full h-full object-cover"
                    onError={() => {
                        if (!imgError) setImgError(true);
                    }}
                />
            </div>
            <h3 className={`mt-6 text-3xl font-black text-center ${textColor} drop-shadow-lg tracking-tight`}>{name}</h3>
            {isActive && !isGod && (
                <div className="mt-2 text-center animate-bounce">
                    <span className="px-3 py-1 bg-yellow-400 text-white text-xs font-black rounded-full uppercase tracking-widest shadow-sm">
                        내 차례!
                    </span>
                </div>
            )}
            {status && (
                <p className={`mt-3 text-xl text-center font-bold ${statusColor} italic drop-shadow-md`}>"{status}"</p>
            )}
        </div>
    );
};

export default CharacterCard;
