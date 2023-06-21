const Flight = require('../models/flight.js');

module.exports = {
    new: newFlight,
    index, 
    create
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''})
}

function index(req, res) {
    res.render('flights/index', { errorMsg: ''})
}

async function create(req, res) {
    try{
        await Flight.create(req.body);
        res.redirect('/flights/new');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message})
    }
}
