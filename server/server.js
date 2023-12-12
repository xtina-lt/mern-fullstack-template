/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - tells everything how to work together
    - directs traffic
    - uses custom utility which is made from boxen and chalk
*/

import {fancy} from 'utils/fancy.js'
// import HOLDS from './routes/hold.routes.js'
import MYOBJ from './routes/myobj.routes.js'
// CANNOT POST TO /API/USER ?
//                 CHECK THE "/USER"
// import USERS from './routes/user.routes.js'

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';

const app = express();
// yea not using 4 lines lol...
app.use('/api', express.json(), cors(), MYOBJ);

dotenv.config();
const PORT = process.env.PORT;
dbConnect();

app.listen(PORT, fancy.portLog(PORT));