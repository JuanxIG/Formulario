const { validationResult } = require("express-validator")

const indexController = {

    index: (req, res) => {
        res.render("index")
    },

    control: (req, res) => {
        let errors = validationResult(req)
        if (errors.errors.length > 0){
            res.render("index", {errors: errors.mapped(), oldData: req.body})
        }
    }
}

module.exports = indexController;