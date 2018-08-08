# Pictionary Bot
Simple Twitch.tv Bot for playing Pictionary, ispired by https://twitch.tv/designs

![Screemshot](https://i.imgur.com/7EQLQe5.png)

# Installation
## Requirements
- NodeJS Version 8+
- Yarn (Optional)
### Linux / MacOS
1. Install dependencies 
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```
2. Copy the environment file
    ```sh
    cp .env.example .env
    ```
3. Edit the .env file to match your settings
    
    To generate your Twitch.tv oAuth token you can use https://twitchapps.com/tmi/
    ```ini
    # Twitch Settings
    CHANNEL="channelname" # target channel name here
    USERNAME="botname" # your twitch.tv username
    PASSWORD="oauth:token" # your twitch.tv oauth token
    ```
4. Start the bot
    ```sh
    npm run start
    ````
    or
    ```sh
    yarn start
    ````
5. Write the `!pictionary` in Twitch channel chat to start the bot! (Only the broadcaster can start the bot)

# TODO
- [x] Reset scores
- [x] Logging
- [ ] Leaderboard
- [ ] Automatic check for valid English word (Dictionary API)
- [ ] Lose if winner doesn't write the next word to the bot in time