import joi from "joi";




export const review={

  body:joi.object().required().keys({
    text:joi.string(),
    stars:joi.number().required()

  }),

  params:joi.object().required().keys({
    productId:joi.string().required(),
    
  }
  
  )





}