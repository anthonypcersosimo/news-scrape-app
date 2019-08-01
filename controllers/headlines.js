const Headline = require("../models/headlines");
const scrape = require("../scripts/scrape")

module.exports = {
    fetch: function(cb) {
        scrape(function(data) {
            let articles = data;
            articles.forEach(element => {
                element.saved = false;
            });

            Headline.collection.insertMany(articles, {ordered: false}, function(err, data) {
                cb(docs);
            });
        });
    },
    delete: function(query, cb) {
        Headline.remove(query, cb);
    },
    get: function(query, cb) {
        Headline.find(query)
            .sort({
                _id: -1
            })
            .exec(function(err, data) {
                cb(data)
            });
    },
    update: function(query, cb) {
        Headline.update({
            _id: query._id
        },
        {
            $set: query
        },
        {},
        cb);
    }
};