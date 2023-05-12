

import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { fileValidation, myMulter } from "../../services/multer.js";
import { endpoint } from "./brand.endPoint.js";
import * as controller from "./controller/Brand.js"
import * as validators from "./brand.validation.js"
import validation from "../../middleware/validation.js";

const router = Router()


router.post('/addbrand',auth(endpoint.add),myMulter(fileValidation.image).single("image")
,validation(validators.createBrand),controller.createBrand
)
router.get('/brands',controller.allBrand)


router.put('/:id',auth(endpoint.update),myMulter(fileValidation.image).single("image"),
controller.updateBrand
)


export default router


