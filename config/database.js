const mongoose = require('mongoose')

const db = mongoose.connect(
    'mongodb+srv://issam:issam123+@map-project-cluster.piiwvgd.mongodb.net/map-project',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log('connected to db succcesfuly...'))
    .catch(e => console.log(e))

module.exports = db
