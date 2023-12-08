const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')

const { loggedIn, isAuthed, authenticate } = require('./helpers')

router.get('/home', (req, res) => {
    res.render('home', { pageTitle: 'dashboard'})
})









module.exports = router