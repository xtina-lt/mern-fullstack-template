/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - custom utility which is made from boxen and chalk
    - makes things look pretty, and me happy lol XP
*/

import boxen from 'boxen';
import chalk from 'chalk';


const ORANGE = "#ff9968"
const PINK = "#fa98c9"
const PURPLE = "#8080ff"
const colors = [PURPLE, 'cyan', ORANGE, PINK]

export const fancy = {
    title: 'XTINA.CODES',
    titleAlignment: 'center',
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    borderStyle: 'round',
    padding: 1, margin: .5,

    setRandom() {
        this.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    },

    portLog(port) {
        this.setRandom()
        this.title = "xtina.codes"
        this.padding = 1
        this.margin = .5
        console.log(boxen(`⋆ ★ ! PARTY ON PORT: ${port} ! ★ ⋆`,
            this
        ))
    },

    dbLog(e) {
        this.backgroundColor=PURPLE
        this.title = "DB Status"
        this.padding = 1
        this.margin = .5
        console.log(
            boxen( (e) ? "⋆ ★ #MongoDBWin ★ ⋆": "): No dice. Try again later :(",
            this
        ))
    },

    log(e) {
        this.setRandom()
        this.title = "XTINA.CODES"
        this.padding = 1
        this.margin = 1
        console.log(boxen(`${e}`, this))
    },

    // TO DO CHANGE THIS FOR HTTP REQUESTS
    log(one, two) {
        this.setRandom()
        this.title = one
        this.padding = 1
        this.margin = 1

        console.log(boxen(`${two}`, this))
    }

}



// API THINGS
export const middleWare = (req, res, next) => {
    // console.log(req)
    // logic
    let compare = req.url
    console.log(compare)
    let str = (compare.includes("all")) ? "Gathering all." :
                (compare.includes("new")) ? `Creating One` :
                            // JSON.stringify(req.params.id);
                            "RUD One";
    fancy.log(req.path, str)
    // goes to the next thing
    next()
}
