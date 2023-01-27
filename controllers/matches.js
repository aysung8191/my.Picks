const Match = require('../models/match')
const ADMINUSERID = '63d024c6a76a1bcd7744620b';

module.exports = {
    index,
    show,
    new: newMatch,
    create,
};

function index(req, res) {
  Match.find({}, function(err, matches) {
    matches.forEach(m => {
      let dateString = m.date
      let date = new Date(dateString)
      let hour = date.getHours()
      let minutes = (date.getMinutes() == 0)?"00":date.getMinutes()
      let am_pm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      hour = hour ? hour : 12; // the hour '0' should be '12'
      m.formattedDate = hour + ":" + minutes + am_pm
    })
    res.render('home', {title: 'Upcoming Matches', matches, ADMINUSERID});
  });
}

function show(req, res) {
  Match.findById(req.params.id)
  .exec(function(err, match) {
    res.render("matches/show", { title: "Match Detail", match });
  })
}

function newMatch(req, res) {
  res.render("matches/new", { title: "Add Match" });
}

function create(req, res) {
  const match = new Match(req.body);
  match.save(function(err) {
    if (err) return res.redirect("matches/new");
    console.log(match);
    res.redirect('/matches');
  });
}
