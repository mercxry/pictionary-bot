import client from "../connection";
import { getOwner, resetAll } from "../helpers/store";
import { logInfo } from "../utils/logger";

client.on("chat", (channel: string, userstate: any, message: string, self: string) => {
  // Don't listen to my own messages..
  if (self) { return; }

  // Alias for userstate.username
  const username: string = userstate.username;
  const owner: string = getOwner();

  if (owner === username && message === "!pictionary stop") {
    logInfo(`@${owner} has ended the pictionary`);
    client.say(`#${owner}`, "The pictionary party has come to an end, it was nice as long as it lasted BibleThump");
    resetAll();
  }
});

client.on("whisper", (from: string, userstate: any, message: string, self: string) => {
  // Don't listen to my own messages..
  if (self) { return; }

  const owner: string = getOwner();

  if (owner === from.substring(1) && message === "!stop") {
    logInfo(`@${owner} has ended the pictionary`);
    client.say(`#${owner}`, "The pictionary party has come to an end, it was nice as long as it lasted BibleThump");
    resetAll();
  }
});

export default client;
