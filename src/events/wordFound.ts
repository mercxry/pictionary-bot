import client from "../connection";
import phrasesRaw = require("../helpers/phrases");
import { addWinner, getLastWinner, getRunningWord, resetRunningWord, setWinnerPermission } from "../helpers/store";

const phrases: any = phrasesRaw.default;

client.on("chat", (channel: string, userstate: any, message: string, self: string) => {
  // Do not respond if the message is from the bot
  if (self) { return; }

  // Alias for userstate.username
  const username: string = userstate.username;

  // Save the last word and compare with channel chat
  const word: string = getRunningWord() || "";
  const compare: boolean = message.toLowerCase().trim() === word.toLowerCase().trim();
  const lastWinner: string = getLastWinner();

  if (word !== "" && compare && username !== lastWinner) {
    // Reset the runningWord so other people can't claim the win
    resetRunningWord();

    // Send a message to the channel chat to alert that there is a winner
    client.say(channel, `Congratulations to @${username}, the word was '${word}'  HSWP CoolCat`);

    // Send another message to the channel to alert the winner to check DM's
    // Delayed to 1.5s to bypass spam limitation
    setTimeout(() => {
      client.say(channel, `@${username} Whisper me the next word TPFufun`);
    }, 1500);

    // Set permissions to choose the word for the winner
    addWinner(username);
    setWinnerPermission(username);

    // Asks the winner to choose the next word
    client.whisper(username, phrases.whisper.startChat);
  }
});

export default client;