exports.createValidator = (req,res,next) => {
    req.check("title", "write a title").notEmpty();
    req.check("title", "Ttle must be between 4 to 150 characters").isLength({
        min:4,
        max:150
    });
    req.check("body", "write a body").notEmpty();
    req.check("body", "body must be between 4 to 2000 characters").isLength({
        min:4,
        max:2000
    });

    //check for errors
    const errors = req.validationErrors()
     
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    //proceed to next middleware
    next();
};