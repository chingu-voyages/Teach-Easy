const mongoose = require('mongoose')

const connectionToMongoDB = async  () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }
    catch (err){
        console.log(`Database error: ${err}`)
        process.exit(1)
    }
}

module.exports = connectionToMongoDB;