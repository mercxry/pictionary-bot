import TwitchJS = require("twitch-js");
import config from "../config";

const client = new TwitchJS.client(config);

// Connects to the channel
if (config.identity) {
  client.connect()
    .then((connection: string) => console.log(`Connected to ${connection[0]}`))
    .catch((err: Error) => { throw err; });
} else { console.log("Copy the 'config.example.ts' to 'config.ts' and set up an identity"); }

export default client;
