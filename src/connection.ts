import TwitchJS = require("twitch-js");
import config from "../config";
import { logError, logInfo } from "./utils/logger";

const client = new TwitchJS.client(config);

// Connects to the channel
client.connect()
  .then((connection: string) => logInfo(`Connected to ${connection[0]}`))
  .catch((err: Error) => { logError(err.toString()); process.exit(1); });

export default client;
