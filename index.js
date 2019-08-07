var express = require('express');
var feed = require('rss-to-json');
var moment = require('moment');
var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get('/', (req, res) => {
    feed.load('http://www.maclife.de/rss/news.xml', (err, rss) => {
        var feedItems = rss;
        res.render('index', {feedItems: feedItems.items, moment: moment});
    });
});

app.listen(port, () => {
    console.log('express-rss-reader is running on port 3000.');
});