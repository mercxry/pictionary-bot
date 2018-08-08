import { createServer } from "http";
import Commands from "./commands";
import Events from "./events";

// Initialize functions
Commands();
Events();

// Heroku sucks, make a simple HTTP server to make him happy
createServer(((req, res) => res.end())).listen(process.env.PORT);
