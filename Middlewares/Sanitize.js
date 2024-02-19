const {body,validationResult} = require('express-validator') 

exports.Validate = [
    // title
    body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({min:3})
    .withMessage('Title must be at least 3 characters long'),
    // description
    body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({min:5})
    .withMessage('Description must be at least 5 characters long'),
    // completed
    body('completed')
    .notEmpty()
    .withMessage('Completed is required')
    .isBoolean()
    .withMessage('Completed must be a boolean'),
    (req,res,next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        next()
    }
]