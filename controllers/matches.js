const Match = require('../models/match')

module.exports = {
    index,
    show,
    new: newMatch,
    create,
};

function index(req, res) {
  Match.find({}, function(err, matches) {
    res.render('home', {title: 'Upcoming Matches', matches});
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
