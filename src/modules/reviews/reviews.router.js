import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { endpoint } from "./reviews.endPoint.js";
import * as review from "./controller/review.js"
import * as validators from "./reviews.validation.js"
import validation from "../../middleware/validation.js"

const router = Router({mergeParams:true})




router.post('/', auth(endpoint.add),validation(validators.review),review.addreview)




export default router