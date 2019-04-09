MORE DOCUMENTATION COMING SOON

# boopis-bot
Boopis Bot is an open-source Discord bot, forked from Bepis Bot, which was made for the Shibe Cult server. It is based on the HB 1.0.9 framework and (will soon) include a lightweight API for configuring/modifying.

# Setup
1) Edit config.json to your liking (more documentation below)
2) Export an enviroment variable named **token** as your Discord bot token. On Unix systems, this can be done with the command `export token=yourTokenHere`.
3) Start the bot with the command `node index.js` and... your bot is running!

# Configuring
In config.json, you will find multiple options that you can easily modify. Here are some that you can modify at the moment:
<<<<<<< HEAD
* **prefix**- This is the bot's prefix, I'm assuming you know what that is.
* **gameloopinterval**- Interval for changing the bot's game presence, leave alone if you don't want the bot's game presence to change.
* **gameloop**- An array with game presence objects, which contain 2 properties: `text` and `type`. `text` describes the text to display and `type` is either `PLAYING`, `WATCHING` or `LISTENING`.
* **joinmsg**- A message sent in the general text channel when a user joins. Use `${user}` to indicate the user's name.
* **leavemsg**- Same thing as `joinmsg` but when a user leaves
=======

**prefix** - This is the bot's prefix, I'm assuming you know what that is.

**gameloopinterval** - Interval for changing the bot's game presence, leave alone if you don't want the bot's game presence to change.

**gameloop** - An array with game presence objects, which contain 2 properties: `text` and `type`. `text` describes the text to display and `type` is either `PLAYING`, `WATCHING` or `LISTENING`.

**joinmsg** - A message sent in the general text channel when a user joins. Use `${user}` to indicate the user's name.

**leavemsg** - Same thing as `joinmsg` but when a user leaves
>>>>>>> 2a3bc932b7a36c1d6ffc0cd6288eb100a7369f8f

# CREDIT

the-meme-factory -> programming, docs, framework

pbjf -> general maintenance and project coordination

mat (no known GitHub) -> original concept

ljb (bepisbots) -> original code
