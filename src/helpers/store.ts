// tslint:disable-next-line:prefer-const
let words: string[] = [];
// tslint:disable-next-line:prefer-const
let permissions: string[] = [];
// tslint:disable-next-line:prefer-const
let winners: string[] = [];
// tslint:disable-next-line:prefer-const
let runningWord: string;

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
  winners.push(winner);
};

export const removeLastWinner = () => {
  return winners.pop();
};

export const getLastWinner = () => {
  return winners[winners.length - 1];
};

// Rounds
export const getRoundNumber = () => {
  /* Add 2 because the position 0 is the first winner
  and the first round is runned by the broadcaster */
  return winners.length + 2;
};
