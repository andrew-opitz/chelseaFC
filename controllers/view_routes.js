const router = require('express').Router()
const User = require('../models/User')
const Post = require('../models/Post')

const { loggedIn, isAuthed, authenticate } = require('./helpers')

router.get('/', (req, res) => {
    res.render('landing', { pageTitle: 'Landing'})
})

router.get('/register', loggedIn, authenticate, (req, res) => {
    res.render('register-form', {
        error: req.session.errors,
        user: req.user
    })

    req.session.errors = []
})

router.get('/login', loggedIn, authenticate, (req, res) => {
    res.render('login-form', {
        errors: req.session.errors,
        user: req.user
    })

    req.session.errors = []
})

router.get('/profile', loggedIn, authenticate, (req, res) => {
    res.render('profile', {
        errors: req.session.errors,
        user: req.user
    })

    req.session.errors = []
})

router.get('/dashboard', loggedIn, authenticate, (req, res) => {
    res.render('dashboard', {
        errors: req.session.errors,
        user: req.user
    })

    req.session.errors = []
})









module.exports = router