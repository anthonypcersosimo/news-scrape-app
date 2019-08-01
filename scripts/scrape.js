const request = require("request");
const cheerio = require("cheerio");

const scrape = cb => {
    request("https://www.politico.com/story", (err, body) => {
        if (err) throw err;
        const $ = cheerio.load(body);
        let articles = [];

        $(".summary").each((i, elem) => {
            let headline = $(this).children("a").text().trim();
            let author = $(this).children(".byline").text().trim();
            let time = $(this).children("time").text();
            let sub = $(".tease").children("p").text().trim();

            if(headline && author && sub) {
                var packet = {
                    headline: headline,
                    author: author,
                    date: time,
                    summary: sub
                };

                articles.push(packet);
            };
        });
        cb(articles);
    });
};

module.exports(scrape);