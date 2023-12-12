import { fancy } from "utils/fancy.js";
import MODEL from "../models/myobj.model.js";

let temp = {}

export default {
    create: async (req, res) => {
        // my fancy log. optional
        fancy.log("Creating..", JSON.stringify(req.body))
        
        try {
            temp = await (
                    await MODEL.create(req.body))
                        // JOIN TO GET THE RELATIONSHIP'S ARR
                                    // .populate("holds")
                                    //     .populate("user")
            res.status(201).json(temp)
        } catch (e) {
            // all mongo created model errors
            temp = e.errors;
						// showing both status ways just incase
            res.status(400).json(temp);
        }
    },
    readAll: async (req, res) => {
        // my fancy log. optional
        fancy.log(req.url, "Getting all from DB..")
        
        try {
            temp = await MODEL.find()
                                // .populate("holds")
                                //     .populate("user")
						// showing both status ways just incase
            res.json(temp);
        } catch (e) {
            // custom error message
            console.log(e)
            temp = {
                message: 'problem finding reading all',
                error: e
            }
            res.status(400).json(temp)
        }
    },
    readOne: async (req, res) => {
        // my fancy log. optional
        fancy.log("Reading One", JSON.stringify(req.params.id))

        try {
            temp = await MODEL.findById(req.params.id)
                                // .populate("holds")
                                //     .populate("user")
            res.json(temp);
        } catch (e) {
            // custom error message
            temp = {
                message: 'Error finding one.',
                error: e
            }
            res.status(400).json(temp);
        }
    },
    search: async (req, res) => {
        // my fancy log. optional
        fancy.log("Reading", JSON.stringify(req.params.att))
        
        // 1 ) GET THE EXTRA INFO NEEDED TO CREATE THE QUERY
        //         CONDUCT LOGIC PER ATRRIBUTE
        // save in memory
        let logic = {}
        // use a switch statement to make logic for each attribute
        switch (req.params.att){
            // get words containing the query
            case "strAtt" :
                logic = { '$regex': req.params.query }
                console.log(logic)
                break;
            // get specifics
            case "boolAtt":
                logic = req.params.query
                break;
            case "enumAtt":
                logic = req.params.query
                break;
                case "enumAtt":
            // get number gte, ge, lte, le
            case "numAtt" : 
                (req.params.extra) ?
                    logic[`$${req.params.extra}`] = req.params.query :
                        logic['$gte'] = req.params.query  
                break;
            default:
                // logic
                console.log("oops")
                res.json("other")
        }

        //  2 ) GET THE ATTRIBUTE WANTING TO SEARCH
        let search = {}
            search[req.params.att] = logic
            console.log(`searching: `, search)

        // 3 ) HIT THE DB find(attribute : {whatToSearch : searchSpecifics})
        try {
            // temp = await MODEL.find({ strAtt: { '$regex': /test/ } } )
            temp = await MODEL.find( search )
                                // .populate("holds")
                                //     .populate("user")
            res.json(temp);
        } catch (e) {
            // custom error message
            temp = {
                message: 'Error finding one.',
                error: e
            }
            res.status(400).json(temp);
        }
    },
    update: async (req, res) => {
        // my fancy log. optional
        fancy.log("Updating", JSON.stringify(req.body))

        try {
            // .findOneAndUpdate(id, body, options)
            temp = await MODEL.findOneAndUpdate(
                                    { _id: req.params.id }, req.body,
                                    { new: true, runValidators: true })
                                // .populate("holds")
                                //     .populate("user")
            res.json(temp);
        } catch (e) {
            // all mongo created model errors
            temp = e.errors
            res.status(400).json(temp);
        }
    },
    delete: async (req, res) => {
        // my fancy log. optional
        fancy.log("♫ Bye Bye Bye ♫", JSON.stringify(req.params.id))
        
        try {
            temp = await MODEL.findByIdAndDelete(req.params.id)
            res.status(201).json(temp)
        } catch (e) {
            // custom error message
            temp = {
                message: 'problem finding reading all',
                error: e
            }
            res.status(400).json(temp)
        }
    }

}