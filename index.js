// require node-cron, express, nodemailer
const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');


// create an instance of express
app = express();

// cron.schedule('* * * * * *', function () {
//     console.log('running a task every minute');
// })

// app.listen(3000);

/*

   * * * * *
   | | | | |
   | | | | day of week
   | | | month
   | | day of month
   | hour
   minute
 
 second	0-59
 minute	0-59
 hour	0-23
 day of month	1-31
 month	1-12 (or names, e.g: Jan, Feb, March, April)
 day of week	0-7 (0 or 7 are sunday, or names, e.g. Sunday, Monday, Tue, Wed)
*/

let transport = nodemailer.createTransport({
    host: 'smtp-relay.gmail.com',
    port: 25,
    secure: true,
    auth: {
        user: 'kjepsen86@gmail.com',
        pass: 'Snowboard1'
    }
});

cron.schedule('* * * * *', function () {
    console.log('running cron task at 9am every day');
})

let email = {
    from: 'kjepsen86@gmail.com',
    to: 'kjepsen86@gmail.com',
    subject: 'LETS DRY HOP!',
    text: `Good Morning! The forecast for today is slightly hazy,
            with a 100% chance of Hops! 
            Add 40 oz of Citra and 2 lbs of Mosaic to 
            Cabin Daze(Batch #389) in Fermenter 10`
}

transport.sendMail(email, function (error, info) {
    if (error) {
        throw error;
    } else {
        console.log('Email successfully sent thru the interwebs!');
    }
})

app.listen(3000);
