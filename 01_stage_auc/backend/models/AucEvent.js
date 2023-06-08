const mongoose = require("mongoose")

let Schema = mongoose.Schema({
auction_name: String,
auction_starttime: String,
auction_endtime: String,
auction_description: String,
auction_address:String,
auction_email:String,
auction_phone: String
})

module.exports = mongoose.model("AucEvent", Schema)