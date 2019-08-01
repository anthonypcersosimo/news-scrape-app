const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var headlinesSchema = new Schema ({
    headline: {
        type: String,
        unique: true,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    }
});

var Headline = mongoose.model("Headlines", headlinesSchema);
module.exports = Headline;