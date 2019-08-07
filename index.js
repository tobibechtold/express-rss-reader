var express = require('express');
var feed = require('rss-to-json');
var moment = require('moment');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', (req, res) => {
    feed.load('http://www.maclife.de/rss/news.xml', (err, rss) => {
        var feedItems = rss;
        res.render('index', {feedItems: feedItems.items, moment: moment});
    });
    
});

app.listen(3000, () => {
    console.log('express-rss-reader is running on port 3000.');
});