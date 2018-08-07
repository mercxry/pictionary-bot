import client from "../connection";
import phrasesRaw = require("../helpers/phrases");
import { getOwner, getWinnerPermission, resetWinnerPermission, setRunningWord } from "../helpers/store";

const phrases: any = phrasesRaw.default;

client.on("whisper", (from: string, userstate: any, message: string, self: string) => {
  // Don't listen to my own messages..
  if (self) { return; }

  const owner: string = getOwner();
  const winner: string = getWinnerPermission() || owner;

  if (winner === from.substring(1)) {
    console.log(`Whisper by ${from}, message: ${message}`);

    // Checks if the message is a single word
    if (message.includes(" ")) {
      client.whisper(from, `Woow calm down, write a word not an entire phrase PunOko`);
    } else {
      // Reset the permission to set a new word for the winner
      resetWinnerPermission();
      setRunningWord(message);

      // Whisper the word for confirmation
      client.whisper(from, `Word '${message}' set SeemsGood`);

      // Sends the word via whispers to the broadcaster too
      if (from.substring(1) !== owner) { client.whisper(owner, `The word is '${message}'`); }

      // Alert the chat that the word is set
      client.say(`#${owner}`, phrases.channel.wordSet);
    }
  }
});

export default client;
