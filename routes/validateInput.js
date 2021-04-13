const Joi = require('joi');

// validation schemas
const loginDataSchema = Joi.object({
    username: Joi.string().min(8).required(),
    password: Joi.string().min(8).required()
})

// method for login input validation
const loginInputValidation = (data) => {
    return loginDataSchema.validate(data);
}

module.exports.loginInputValidation = loginInputValidation;