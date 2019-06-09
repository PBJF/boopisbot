//Made by the meme factory
//Copyright 2019

//Variables
var discord = require("discord.js");
var fs = require("fs");
var colors = require("colors");
var commandutil = require("./Util/commands.js");
var client = new discord.Client();
var token = process.env.token;
var config = JSON.parse(fs.readFileSync("./config.json"));
var gameloopi = 0;

//Events
client.on("ready",() => {
	console.log("[+] ".blue + "Bot started");
	function gameloop(){
		let activity = config.gameloop[gameloopi];
		client.user.setActivity(activity.text,{type: activity.type});
		setTimeout(() => {
			if(gameloopi < config.gameloop.length-1){
				gameloopi++;
			} else{
				gameloopi = 0;
			}
			gameloop();
		},config.gameloopinterval);
	}
	gameloop();
	console.log("[+] ".blue + "Started game presence loop");
});

client.on("message",msg => {
	let cmdarray = msg.content.split(" ");
	let cmd = cmdarray[0].toLowerCase();
	let args = cmdarray.slice(1);

	if(msg.content.charAt(0) == config.prefix){
		commandutil.execute(client,msg,cmd,args);
	}
});

client.on("guildMemberAdd",member => {
	member.addRole("580147114122936320");
	let channel = member.guild.channels.find("id","580138858239361094");
	channel.send("Welcome, **" + member.user.username + "**, to the Shibe Cult!");
});

client.on("guildMemberRemove",member => {
	let channel = member.guild.channels.find("id","580138858239361094");
	channel.send("Goodbye, **" + member.user.username + "** :sob:");
});

//Login
client.login(token);