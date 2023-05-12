import joi from "joi";

export const createBrand=({

body:joi.object().required().keys({

name:joi.string().required()

}),
headers:joi.object().required().keys({

    authorization:joi.string().required(),
    
    
    }).options({ allowUnknown: true })
})