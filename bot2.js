console.log("bot working");
var Twit = require('twit');
var config= require('./config');
var T= new Twit(config);
var stream=T.stream('user');
stream.on('follow',followed);

function followed(eventMsg){
	var name= eventMsg.source.name;
	var screenname=eventMsg.source.screen_name;
	tweetIt('.@'+ screenname +' thank you for beign part of this test !')
}
function tweetIt(txt)
{
	var tweet=
	{
		status:txt
	}
	T.post('statuses/update',tweet,tweeted);
function tweeted(err,data,response)
{
	if(err){
		console.log("something went wrong");
	}
	else{
		console.log("posted tweet");
	}
}

}
