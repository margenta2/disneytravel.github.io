const Hotel = require('../models').Hotel;

const index = (req, res) => {
    Hotel.findAll()
    .then(allHotels => {
        res.render('hotels.ejs', {
            hotels: allHotels
        });
    })
}