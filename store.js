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
         hobbs: 0, wear: 0, notes: "no range, nothing!", chanceToGet: 0.1, expire: 3
        }
]
                                                                    /*     INIT END     */
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

function readInJSON() {

}



console.log(date);
console.log(save);
lookForExpired()
console.log(save);
console.log(plane);