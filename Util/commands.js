//Made by the meme factory
//Copyright 2019

//Variables
var Command = require("./command.js");
var fs = require("fs");
var config = JSON.parse(fs.readFileSync("./config.json"));
var categories = [
	require("../Categories/general.js")
];

//Export
module.exports = {
	execute: (client,msg,cmd,args) => {
		let executed = false;
		if(cmd == config.prefix + "help"){
			let embed = {
				title: "Commands",
				fields: [],
				footer: {
					text: "<>: Required argument | []: Optional argument"
				}
			};
			for(let i = 0; i < categories.length; i++){
				let category = categories[i];
				let commands = category.commands;
				let field = {name: category.name + " commands", value: ""};
				for(let k = 0; k < commands.length; k++){
					let command = commands[k];
					if(!command.hidden){
						let strformatted = "";
						strformatted += "**" + config.prefix + command.name + " ";
						for(let v = 0; v < command.args.length; v++){
							let arg = command.args[v];
							if(arg.optional){
								strformatted += "[" + arg.name + "] ";
							} else{
								strformatted += "<" + arg.name + "> ";
							}
						}
						strformatted += "**| " + command.description + "\n";
						field.value += strformatted;
					}
				}
				embed.fields.push(field);
			}
			msg.channel.send({embed: embed});
		} else{
			let command;
			for(let i = 0; i < categories.length; i++){
				let category = categories[i];
				let commands = category.commands;
				for(let k = 0; k < commands.length; k++){
					let commnd = commands[k];
					if(cmd == config.prefix + commnd.name){
						command = commnd;
						break;
					}
				}
			}
			if(command){
				let canexecute = false;
				if(command.roles){
					for(let i = 0; i < command.roles.length; i++){
						if(msg.member.roles.find("id",command.roles[i])){
							canexecute = true;
							break;
						}
					}
				} else{
					canexecute = true;
				}
				if(canexecute){
					command.execute(client,msg,args);
				} else{
					msg.channel.send(":no_entry_sign: This command is not for potats!");
				}
			} else{
				msg.channel.send(":question: I don't know that trick!");
			}
		}
	}
};
