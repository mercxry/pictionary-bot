// tslint:disable-next-line:prefer-const
let words: string[] = [];
// tslint:disable-next-line:prefer-const
let permissions: string[] = [];
// tslint:disable-next-line:prefer-const
let winners: string[] = [];
// tslint:disable-next-line:prefer-const
let runningWord: string;
// tslint:disable-next-line:prefer-const
let lastWinner: string;

// Words
export const getAllWords = () => {
  return words;
};

export const addNewWord = (word: string) => {
  words.push(word);
};

export const removeLastWord = () => {
  return words.pop();
};

// Running Word
export const getRunningWord = () => {
  return runningWord;
};

export const setRunningWord = (word: string) => {
  runningWord = word;
};

export const resetRunningWord = () => {
  runningWord = "";
};

// Permissions
export const getOwner = () => {
  return permissions[0];
};

export const setOwner = (owner: string) => {
  permissions[0] = owner;
};

export const resetOwner = () => {
  permissions[0] = "";
};

export const getWinnerPermission = () => {
  return permissions[1];
};

export const setWinnerPermission = (winner: string) => {
  permissions[1] = winner;
};

export const resetWinnerPermission = () => {
  permissions[1] = "";
};

// Winners
export const getAllWinners = () => {
  return winners;
};

export const addWinner = (winner: string) => {
  lastWinner = winner;
  winners.push(winner);
};

export const removeLastWinner = () => {
  lastWinner = "";
  return winners.pop();
};

export const resetLastWinner = () => {
  lastWinner = "";
};

export const getLastWinner = () => {
  return lastWinner;
};

// Rounds
export const getRoundNumber = () => {
  return winners.length + 1;
};

// Reset All
export const resetAll = () => {
  words = [];
  permissions = [];
  winners = [];
  runningWord = "";
};
