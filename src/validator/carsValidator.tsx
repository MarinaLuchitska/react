import * as Joi from "joi";


export const carsValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,40}$'))
        .messages({'string.pattern.base': 'Your brand value didnt match pattern'}),
    price: Joi.number().min(10000).max(1000000).messages({
        "number.min": "min price is 10000",
        "number.max": "max price is 1 000 000",
    }),
    year: Joi.number().min(2000).max(2025).messages({

        "number.min": "min year is 2000",
        "number.max": "max year is 2025",

    }),
})