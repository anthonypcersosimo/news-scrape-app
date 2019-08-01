module.exports = (router) => {
    router.get("/", (req, res) => {
        res.render("index");
    });
    router.get("/saved", (req, res) => {
        res.render("saved");
    });

    router.get("/api/stories", (req, res) => {
        const stories = [{
            headline: "headline 1",
            author: "anthony",
            sub: "This is a story about my life"
        },
        {
            headline: "headline 2",
            author: "anthony",
            sub: "This is the story of my other life"
        },
        {
            headline: "headline 3",
            author: "anthony",
            sub: "This is the story of my cat named muppets"
        }
        ];
        res.json(stories);
    });
};