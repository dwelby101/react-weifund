var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(process.argv.includes("delayresponse")) {
        setTimeout(function(){
            next();
        }, 2000);
    } else {
        next();
    }
});


app.get('/campaign/weifund', function (req, res) {
    let randomVal = Math.floor(Math.random() * 101);

    res.json({
        heading: "David Welby Weifund Tech Task",
        description: "Dave is a front end web developer who takes pride in his work and pays attention to details such as performance, cleanliness, scalability and overall ease of use... you should totally hire him :)",
        image: "https://ksr-ugc.imgix.net/assets/016/867/394/05da70ccfd9b7cc3ec895a8dc17b5eb4_original.png?crop=faces&w=1024&h=576&fit=crop&v=1496072721&auto=format&q=92&s=dcfda5b9ed6282c72779c436dca78192",
        progress: randomVal,
        pleged: randomVal,
        of: 100,
        backers: 1,
        daysLeft: 30,
        location: "Dubai"
    })
});

app.get('/tickets/urgent', function (req, res) {
    res.json({
        min: 0,
        max: 24,
        value: Math.floor(Math.random() * 5)
    })
});

app.get('/tickets/progression', function (req, res) {
    let labels = ["Opened Tickets", "Closed Tickets"];
    let colors = ["#e74c3c", "#27ae60"];
    let values = [];

    labels.forEach((label, index) => {
        let data = [];
        for(let i = 0; i < 7; i++) {
            data.push(Math.floor(Math.random() * 10) + i);
        }

        values.push({
            label,
            data,
            color: colors[index]
        });
    });

    res.json(values);
});

app.get('/tickets/*', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 1
    })
});

app.get('/stats/top', function (req, res) {
    res.json([
        {
            label: "Lauren",
            value: Math.floor(Math.random() * 5) + 26
        },
        {
            label: "Dave",
            value: Math.floor(Math.random() * 5) + 13
        },
        {
            label: "John",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Gregg",
            value: Math.floor(Math.random() * 5) + 19
        },
        {
            label: "Matt",
            value: Math.floor(Math.random() * 5) + 4
        },
        {
            label: "Jaral",
            value: Math.floor(Math.random() * 5) + 12
        },
        {
            label: "Bridget",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Rob",
            value: Math.floor(Math.random() * 5) + 7
        }
    ]);
});

app.get('/stats/*', function (req, res) {
    res.json({
        min: 0,
        max: 100,
        value: Math.floor(Math.random() * 25) + 50
    });
});

app.listen(3001, function () {
    console.log('Data being served from https://localhost:3001');
});
