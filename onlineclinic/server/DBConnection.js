const mongoose = require('mongoose');


async function DBConnection() {
    try {
        await mongoose.connect(process.env.MongoURL);
        console.log("Database Connected");
    } catch (error) {
        console.log(error,"Error in database Connection");
        process.exit(1);
    }
}

module.exports = DBConnection;

