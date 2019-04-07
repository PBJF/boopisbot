//Made by the meme factory
//Copyright 2019

//Variables
var Command = require("../Util/command.js");
var commands = [];

//Commands
commands.push(new Command(
	"ping",
	"Pings discord",
	(client,msg,args) => {
		msg.channel.send("Pong!");
	}
));

//Export
module.exports = {
	name: "General",
	commands: commands
};