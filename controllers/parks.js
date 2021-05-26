const Park = require('../models').Park;

const index = (req, res) => {
    Park.findAll()
    .then(allParks => {
        res.render('parks.ejs', {
            parks: allParks
        });
    })
}

module.exports = {
    index
}