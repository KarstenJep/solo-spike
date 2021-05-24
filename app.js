var twilio = require('twilio'),
client = new twilio('ACde57b8c86436ad5c4a1a9e2904ffa05d', '3bd041600cca4c21f2e384ca723ba60e'),
cronJob = require('cron').CronJob; 

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

// const client = require('twilio')(accountSid, authToken);

// client.messages    
//     .create({
//         to: '+16514429080',
//         from: '+16178706781',
//         body: 'Dope Woot!',
//     })
//     .then(message => console.log(message.sid));

var textJob = new cronJob('* * * * *', function(){
    console.log('Running cronJob SMS');
    client.messages.create({to: '+16514429080', 
                            from: '+16178706781',
                            body: 'Dope Woot!'},
                            function (err, data) {});
}, null, true);
