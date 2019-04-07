MORE DOCUMENTATION COMING SOON

# boopis-bot
Boopis bot is an open-source discord bot made for the shibe cult server, based on the hackerbot 1.0.9 framework. It has a lightweight API for configuring/modifying.

# Setup
1) Edit config.json to your liking (more documentation below)
2) Export an enviroment variable named **token** as your discord bot token. On linux, this can be done with the command `export token=<your token here`.
3) Start the bot with the command `node index` and you're pretty much done

# Configuring
In config.json, you will find multiple options that you can easily modify. Here are some that you can modify at the moment:
**prefix**- This is the bot's prefix, I'm assuming you know what that is.
**gameloopinterval**- Interval for changing the bot's game presence, leave alone if you don't want the bot's game presence to change.
**gameloop**- An array with game presence objects, which contain 2 properties: `text` and `type`. `text` describes the text to display and `type` is either `PLAYING`, `WATCHING` or `LISTENING`.
**joinmsg**- A message sent in the general text channel when a user joins. Use `${user}` to indicate the user's name.
**leavemsg**- Same thing as `joinmsg` but when a user leaves

# CREDIT
Credit to the-meme-factory for programming and documentation