/**
 * Generates 3 unique random digits from 0-9.
 * @returns {number[]}
 */
export const generateTargetNumber = () => {
    const digits = Array.from({ length: 10 }, (_, i) => i);
    const result = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        result.push(digits.splice(randomIndex, 1)[0]);
    }
    return result;
};

/**
 * Calculates Strike, Ball, and Out counts.
 * @param {number[]} target
 * @param {number[]} guess
 * @returns {{strike: number, ball: number, out: boolean}}
 */
export const checkGuess = (target, guess) => {
    let strike = 0;
    let ball = 0;

    guess.forEach((digit, index) => {
        if (digit === target[index]) {
            strike++;
        } else if (target.includes(digit)) {
            ball++;
        }
    });

    return {
        strike,
        ball,
        out: strike === 0 && ball === 0
    };
};

/**
 * LocalStorage utilities for persistent game states.
 */
const STORAGE_KEY = 'baseball_game_record';

export const loadGameRecord = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : { lastWinner: null, score: { Choyul: 0, Taeyun: 0 } };
};

export const saveGameRecord = (record) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
};
