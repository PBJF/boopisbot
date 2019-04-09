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
	let channel = member.guild.channels.find("id","564479798986932246");
	let msg = config.joinmsg;
	msg = msg.replace("${user}",member.user.username);
	channel.send(msg);
});

client.on("guildMemberRemove",member => {
	let channel = member.guild.channels.find("id","564479798986932246");
	let msg = config.leavemsg;
	msg = msg.replace("${user}",member.user.username);
	channel.send(msg);
	let general = member.guild.channels.find("name", "general");
	let msg = config.joinmsg;
	msg.replace("${user}",member.user.username);
	general.send(msg);
});

client.on("guildMemberRemove",member => {
	let general = member.guild.channels.find("name", "general");
	let msg = config.leavemsg;
	msg.replace("${user}",member.user.username);
	general.send(msg);
});

//Login
client.login(token);
