const Discord = require('discord.js');
const bot = new Discord.Client();

const cheerio = require('cheerio');

const request = require('request');



const token = '-EDIT----------asd-as-das-e-q-eq-e-q-e-q-eq-eq-e-qe-qeq';

const PREFIX = '!';

bot.on('ready', ()  =>{
    console.log('The bald father has awoken!');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

         case 'bald':
         image(message);


         case 'sphynxentology':
                message.channel.sendMessage('Is the surpreme faith!')
                break;
         case 'teachings':
                message.channel.sendMessage('To view the holy texts, please refer to your bald book.')
                break;
         case 'founder':
                message.channel.sendMessage('The founder of Sphynxentology is Rabbi cNeq.')
                break;
         case 'clear':
                 if(!args[1]) return message.reply('My child, I do not understand what you seek.')
                 message.channel.bulkDelete(args[1]);
                 message.channel.sendMessage('The heritical articles have been purged!')
                 break;
           
    }
});

function image(message){
     
     var options = {
       url: "http://results.dogpile.com/serp?qc=images&q=" + "bald cat",
       method: "GET",
       headers: {
           "Accept": "text/html",
           "User-Agent": "Chrome"
       }

};



request(options, function(error, response, responseBody) {
       if (error) {
           return;
       }


       $ = cheerio.load(responseBody);


       var links = $(".image a.link");

       var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
      
       console.log(urls);

       if (!urls.length) {
          
           return;
       }

       // Send result
       message.channel.send( urls[Math.floor(Math.random() * urls.length)]);

       
   });





 

 }

 bot.login(token);
