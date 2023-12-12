import {fancy} from 'utils/fancy.js'
// 1 ) CONNECT TO MONGOOSE
//     object data modeling (ODM) library for MongoDB and Node.js
import { connect } from 'mongoose';

// 2 ) import dotenv variables
//      sensative, manually add to deployment
import dotenv from 'dotenv';
dotenv.config();
// get the mongo connectioon
const MONGODB_URI = process.env.MONGODB_URI;

// 3 ) ACTUAL CONNECTION
async function dbConnect() {
    try {
        // GET FROM ATLAS
        // connect -> MongoDB fro VS code
        await connect(MONGODB_URI, {
            dbName: 'MernTemplate',
        });
        fancy.dbLog(true)
    } catch (error) {
        fancy.dbLog(false)
        // console.log(error)
        throw "OOPSIE";
    }
}
export default dbConnect;