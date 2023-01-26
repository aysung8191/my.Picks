const Match = require('../models/match')

module.exports = {
    create,
    delete: deleteComment,
}

function create(req, res) {
    Match.findById(req.params.id, function(err, match) {
        // Add the user-centric info to req.body (the new comment)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        // push the subdoc for the review
        match.comments.push(req.body);
        // Always save the top-level document (not subdocs)
        match.save(function(err) {
            res.redirect(`/matches/${match._id}`);
        });
    });
}

async function deleteComment(req, res, next) {
    try {
        const match = await Match.findOne({'comments._id': req.params.id})
        if (!match) return res.redirect('/matches')
        match.comments.remove(req.params.id)
        await match.save()
        res.redirect(`/matches/${match._id}`)
    } catch(err) {
        return next(err)
    }
}
