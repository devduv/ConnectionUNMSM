'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PublicationSchema = Schema({
		text: String,
		file: String,
		created_at: String,
		user: { type: Schema.ObjectId, ref: 'User' },
		likes: Number
});

module.exports = mongoose.model('Publication', PublicationSchema);