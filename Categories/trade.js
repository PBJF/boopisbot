//Made by the meme factory
//Copyright 2019

//Variables
var Command = require("../Util/command.js");
var commands = [];

//Commands
commands.push(new Command(
	"bepis",
	"Shows total Bepis.",
	{
		args: [
			{
				name: "user",
				optional: true
			}
		]
	},
	(client,msg,args) => {

	}
));

//Export
module.exports = {
	name: "Trade",
	commands: commands
};
