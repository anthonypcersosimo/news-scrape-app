const Note = require("../models/note");

module.exports = {
    get: function(data, cb) {
        Note.find({
            _headlineId: data._id
        }, cb);
    },
    save: function(data, cb) {
        let newNote = {
            _headlineId: data._id,
            date: data.date,
            noteText: data.noteText
        };
        Note.create(newNote, (err, data) => {
            if (err) throw err;
            else {
                cb(data);
            }
        });
    },
    delete: function(data, cb) {
        Note.remove({
            _id: data._id
        }, cb);
    }
};