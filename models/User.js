const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

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
                return validator.isEmail(val)
            },
            message: 'You must enter a valid email address.'
        }
    },
    password: {
        type: String,
        minLength: [6, 'Password must be at least 6 characters long']
    }
})
userSchema.pre('save', async function (next) {
    const user = this

    
    if (!user.isModified('password')) return next()

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword
        next()
    } catch (error) {
        return next(error)
    }
})
userSchema.methods.validatePass = async function (form_password) {
    const is_valid = await bcrypt.compare(form_password, this.password)

    return is_valid
}


const User = model('User', userSchema)

module.exports = User