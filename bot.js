console.log("bot working");

var Twit = require('twit');
var config= require('./config');

var T= new Twit(config);



var params={
	q:'india',
	count:1
	
}
T.get('search/tweets',params,gotData);

function gotData(err,data,response){
	var tweets =data.statuses;
	for(i=0;i<tweets.length;i++){
		console.log(tweets[i].text);
	}
}
