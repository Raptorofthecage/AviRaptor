                                                                    /*      INIT       */
let date = new Date()
let dateNow = [date.getUTCDate(), date.getUTCMonth() + 1, date.getUTCFullYear()]
let save = await fetch("store.json")
    save = await save.json()

let p = ["0","1","2","3","4","5","6","7","8","9","10","11","12",
    "13","14","15","16","17","18","19"]
for (let i = 0; i < p.length; i++) {
    p[i] = document.querySelector("#P" + i)
}

let plane = [
    { type: 'Empty', photo: "Photos/Blank.png", price: 0, priceMultiplier: 0,
         wear: 0, notes: "no range, nothing!", chanceToGet: 0.01, expire: 1
        },

// PISTON

    { type: 'Cessna 152', photo: "Photos/Cessna_152.webp", price: 15000, priceMultiplier: 0.2,
         wear: 5, notes: "", chanceToGet: 0.01, expire: 9
        },
    { type: 'Beechcraft Bonanza G36', photo: "Photos/Beechcraft_Bonanza_G36.webp", price: 80000, priceMultiplier: 0.1,
         wear: 2, notes: "", chanceToGet: 0.008, expire: 7
        },

// TURBOPROP

    { type: 'Beechcraft King Air 350i', photo: "Photos/Beechcraft_King_Air_350i.webp", price: 180000, priceMultiplier: 0.1,
         wear: 3, notes: "", chanceToGet: 0.006, expire: 11
        },

// TURBOFAN

    { type: 'Airbus A320neo', photo: "Photos/A20N.webp", price: 1900000, priceMultiplier: 0.08,
         wear: 1, notes: "", chanceToGet: 0.002, expire: 9
        },
    { type: 'Airbus A310-300', photo: "Photos/Airbus_A310-300.webp", price: 1700000, priceMultiplier: 0.12,
         wear: 6, notes: "", chanceToGet: 0.003, expire: 17
        }
    
]
                                                                    /*     INIT END     */
                                                                     /*    UPDATE ADS    */
function lookForExpired() {
    for (let i = 0; i < save.length; i++) {
        if (dateNow[2] > save[i].expire[2] ||
            dateNow[2] === save[i].expire[2] && dateNow[1] > save[i].expire[1] || 
            dateNow[2] === save[i].expire[2] && dateNow[1] === save[i].expire[1] && dateNow[0] > save[i].expire[0]) {
                generateAd(i)
    }
    }
}

function generateAd(replacableAd) {
    let adGenerated = false
    while (!adGenerated) {
        for (let i = 0; i < plane.length; i++) {
            if (plane[i].chanceToGet > Math.random()) {
                save[replacableAd] = {...plane[i]}
                let editDate = new Date()
                editDate.setDate(editDate.getDate() + plane[i].expire)
                save[replacableAd].expire = [
                    editDate.getUTCDate(), editDate.getUTCMonth() + 1, editDate.getUTCFullYear()
            ]
                adGenerated = true
                break
                }
        }
    }
}
function updateJSON() {

}
function readInJSON() {

}



console.log(date);
console.log(save);
lookForExpired()
console.log(save);
console.log(plane);