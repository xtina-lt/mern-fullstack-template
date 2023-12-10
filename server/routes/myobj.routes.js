/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - routes for the connecting collection
    - modularization: from the server, creates a direction between the client's input and the db
*/
import { Router } from 'express'
import CONTROLLER from '../controllers/myobj.controller.js'

const router = Router()

router.route("/myobj")
    .post(CONTROLLER.create)
    .get(CONTROLLER.readAll)

router.route("/myobj/:id")
    .get(CONTROLLER.readOne)
    .patch(CONTROLLER.update)
    // if delete is adding a random one
    // check here to ensure we have delete
    // rather than update
    .delete(CONTROLLER.delete)

export default router