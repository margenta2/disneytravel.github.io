const User = require('../models').User;
const Hotel = require('../models').Hotel;
const Park = require('../models').Park;

const index = (req, res) => {
    res.render('users/index.ejs')
}

const renderSignup = (req, res) => {
    res.render('users/signup.ejs')
}


const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect(`users/profile/${newUser.id}`);
    })
}

const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser => {
        res.redirect(`/users/profile/${foundUser.id}`);
    })
}

const renderProfile = (req, res) => {
    User.findByPk(req.params.index)
        .then(userProfile => {
            Hotel.findAll()
            .then(allHotels => {
            Park.findAll()
            .then(allParks => {
                res.render('users/profile.ejs', {
                    user: userProfile,
                    hotels: allHotels,
                    parks: allParks
                    })
                })
            })

        })
}


const renderHotels = (req,res) => {
    res.render('/index.ejs')
}

const renderParks = (req,res) => {
    res.render('/index.ejs')
}


const editProfile = (req, res) => {
    // console.log(req.body)
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning: true
    })
    .then(updatedUser => {
        res.redirect(`/users/profile/${req.params.index}`);
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/users');
    })
}


module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    login,
    renderProfile,
    editProfile,
    deleteUser,
    renderHotels,
    renderParks,
 

}