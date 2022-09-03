const path = require('path')
const {check} = require ("express-validator");

const validation = [
    check("name").notEmpty().withMessage("El campo nombre no puede estar vacio").bail()
                .isLength({min:2}).withMessage("El campo debe tener al menos dos caracteres").bail()
                .isAlpha().withMessage("Solo se permiten caracteres alfabéticos"),
    check("last_name").notEmpty().withMessage("El campo apellido no puede estar vacio").bail()
                .isLength({ min: 2 }).withMessage("El apellido debe tener al menos 2 caracteres").bail()
                .isAlpha().withMessage("Solo se permiten caracteres alfabéticos"),
    check("email").notEmpty().withMessage("El campo email no puede estar vacio").bail()
                .isEmail().withMessage("El campo debe ser completo en formato mail"),
    check("date").notEmpty().withMessage("El campo date no puede estar vacio"),
    check("comentario").notEmpty().withMessage("El campo comentario no puede estar vacio"),
];



module.exports = validation;