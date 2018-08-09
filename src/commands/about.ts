import client from "../connection";
import { logInfo } from "../utils/logger";

client.on("chat", (channel: string, userstate: any, message: string, self: string) => {
  // Do not respond if the message is from the bot
  if (self) { return; }

  // Check if the broadcaster writes the command '!pictionary'
  if (message === "!pictionary about") {
    logInfo(`@${userstate.username} on ${channel} called the '!about' command`);
    client.say(channel, `Bot made by @voidMercxry, \
      I'm Open-Source if you want to see my code check my Github @mercxry`);
  }
});

client.on("whisper", (from: string, userstate: any, message: string, self: string) => {
  // Do not respond if the message is from the bot
  if (self) { return; }

  // Check if the broadcaster writes the command '!pictionary'
  if (message === "!pictionary about") {
    logInfo(`@${userstate.username} whispered the '!about' command`);
    client.whisper(from, `Bot made by @voidMercxry, \
      I'm Open-Source if you want to see my code check my Github @mercxry`);
  }
});

export default client;
