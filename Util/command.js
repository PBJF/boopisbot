//Made by the meme factory
//Copyright 2019

//Classes
class Command{
	constructor(name,description,options,callback){
		this.name = name;
		this.description = description;
		if(typeof options == "function"){
			this.callback = options;
			this.options = {};
		} else{
			this.options = options;
			this.callback = callback;
		}
	}
	execute(client,msg,args){
		this.callback(client,msg,args);
	}
	get args(){
		if(this.options.args){
			return this.options.args;
		} else{
			return [];
		}
	}
	get roles(){
		if(this.options.roles){
			return this.options.roles;
		} else{
			return null;
		}
	}
	get hidden(){
		if(this.options.hidden){
			return this.options.hidden;
		} else{
			return false;
		}
	}
}

//Export
module.exports = Command;