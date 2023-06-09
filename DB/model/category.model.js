import { Schema, model,Types } from "mongoose";


const categorySchema = new Schema({

    name: {
        type: String,
        required: [true,"name is required "],
        min: [2, 'minimum length 2 char'],
        max: [20, 'max length 2 char'],
        unique:[true,"category name must be unique"]

    },
    imagepubilcId:String,
    slug:String,
   
    Createdby: {
        type: Types.ObjectId,
        ref:"User",
        required: true,
    },
    updatedby: {
        type: Types.ObjectId,
        ref:"User",
        
    },
    image: String,
  
}, {
    timestamps: true,
    toJSON:{virtuals:true},
    toObject:{virtual:true},

})
categorySchema.virtual("Product",{
ref:"product",
localField:"_id",
foreignField:"CategoryId"
}
)

const categorymodel = model('category', categorySchema)
export default categorymodel