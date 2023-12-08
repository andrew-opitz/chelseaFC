const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        minLength: [2, 'Username must be at least 2 characters long'],
        maxLength: [15, 'Username must be under 15 characters long']
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator(val) {
              return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(val);
            },
            message() {
              return 'You must enter a valid email address.'
            }
          }
    },
    password: {
        type: String,
        unique: true,
        minLength: [6, 'Password must be at least 6 characters long']
    }
})