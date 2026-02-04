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
         wear: 0, notes: "no range, nothing!", chanceToGet: 0.005, expire: 1
        },
    { type: 'McDonnel Douglas FA-18E', photo: "Photos/McDonnel_Douglas_FA-18E.webp", price: 1900000, priceMultiplier: 0,
         wear: 2, notes: "", chanceToGet: 0.0001, expire: 35
        },

// PISTON

    { type: 'Cessna 152', photo: "Photos/Cessna_152.webp", price: 15000, priceMultiplier: 0.2,
         wear: 5, notes: "", chanceToGet: 0.01, expire: 9
        },
    { type: 'Beechcraft Bonanza G36', photo: "Photos/Beechcraft_Bonanza_G36.webp", price: 74000, priceMultiplier: 0.1,
         wear: 2, notes: "", chanceToGet: 0.006, expire: 8
        },
    { type: 'Cessna 172SP Skyhawk G1000', photo: "Photos/Cessna_172SP_Skyhawk_G1000.webp", price: 45000, priceMultiplier: 0.14,
         wear: 3, notes: "", chanceToGet: 0.009, expire: 5
        },
    { type: 'Cessna 172SP Skyhawk G1000 (Floats)', photo: "Photos/Cessna_172SP_Skyhawk_G1000.webp", price: 48000, priceMultiplier: 0.08,
         wear: 3, notes: "", chanceToGet: 0.002, expire: 4
        },
    { type: 'Cessna 172SP Skyhawk G1000 (Skis)', photo: "Photos/Cessna_172SP_Skyhawk_G1000.webp", price: 49000, priceMultiplier: 0.07,
         wear: 3, notes: "", chanceToGet: 0.0008, expire: 3
        },
    { type: 'CubCrafters NXCub', photo: "Photos/CubCrafters_XCub.webp", price: 17500, priceMultiplier: 0.08,
         wear: 1, notes: "", chanceToGet: 0.002, expire: 3
        },
    { type: 'CubCrafters XCub', photo: "Photos/CubCrafters_XCub.webp", price: 17000, priceMultiplier: 0.1,
         wear: 2, notes: "", chanceToGet: 0.01, expire: 8
        },
    { type: 'CubCrafters XCub (Floats)', photo: "Photos/CubCrafters_XCub.webp", price: 18000, priceMultiplier: 0.08,
         wear: 2, notes: "", chanceToGet: 0.006, expire: 9
        },
    { type: 'CubCrafters NXCub (Skis)', photo: "Photos/CubCrafters_XCub.webp", price: 18500, priceMultiplier: 0.04,
         wear: 2, notes: "", chanceToGet: 0.0008, expire: 8
        },
    { type: 'Curtiss Jenny JN-4', photo: "Photos/Curtiss_JN-4.webp", price: 100000, priceMultiplier: 0.3,
         wear: 5, notes: "", chanceToGet: 0.00004, expire: 24
        },
    { type: 'De Havilland Canada DHC-2', photo: "Photos/de_Havilland_Canada_DHC-2_Beaver.webp", price: 42000, priceMultiplier: 0.2,
         wear: 5, notes: "", chanceToGet: 0.006, expire: 10
        },
    { type: 'De Havilland Canada DHC-2 (Floats)', photo: "Photos/de_Havilland_Canada_DHC-2_Beaver.webp", price: 42500, priceMultiplier: 0.2,
         wear: 5, notes: "", chanceToGet: 0.004, expire: 8
        },
    { type: 'DG Aviation DG-1001e neo', photo: "Photos/DG_Flugzeugbau_DG-1001e_neo.webp", price: 11500, priceMultiplier: 0.15,
         wear: 2, notes: "", chanceToGet: 0.005, expire: 13
        },
    { type: 'DG Aviation LS8-18', photo: "Photos/DG_Flugzeugbau_DG-1001e_neo.webp", price: 9500, priceMultiplier: 0.2,
         wear: 2, notes: "", chanceToGet: 0.002, expire: 14
        },
    { type: 'Diamond DA40 NG', photo: "Photos/Diamond_DA40_NG.webp", price: 62000, priceMultiplier: 0.02,
         wear: 0, notes: "", chanceToGet: 0.005, expire: 18
        },
    { type: 'Diamond DA62', photo: "Photos/Diamond_DA62.webp", price: 96000, priceMultiplier: 0.08,
         wear: 1, notes: "", chanceToGet: 0.004, expire: 17
        },
    { type: 'Douglas DC-3', photo: "Photos/Douglas_DC-3.webp", price: 150000, priceMultiplier: 0.25,
         wear: 7, notes: "", chanceToGet: 0.005, expire: 22
        },
    { type: 'Extra EA-330LT', photo: "Photos/EXTRA_EA-330LT.webp", price: 22500, priceMultiplier: 0.15,
         wear: 4, notes: "", chanceToGet: 0.009, expire: 10
        },
    { type: 'Flight Design CTSL', photo: "Photos/Flight_Design_CTSL.webp", price: 38000, priceMultiplier: 0.15,
         wear: 3, notes: "", chanceToGet: 0.009, expire: 8
        },
    { type: 'Grumman G-21 Goose', photo: "Photos/Grumman_G-21_Goose.webp", price: 74000, priceMultiplier: 0.3,
         wear: 8, notes: "", chanceToGet: 0.007, expire: 28
        },
    { type: 'Guimbal Cabri G2', photo: "Photos/Guimbal_Cabri_G2.webp", price: 82000, priceMultiplier: 0.15,
         wear: 3, notes: "", chanceToGet: 0.006, expire: 7
        },
    { type: 'Icon A5', photo: "Photos/ICON_A5.webp", price: 52000, priceMultiplier: 0.15,
         wear: 2, notes: "", chanceToGet: 0.007, expire: 7
        },
    { type: 'JMB VL-3', photo: "Photos/JMB_VL-3.webp", price: 32000, priceMultiplier: 0.2,
         wear: 3, notes: "", chanceToGet: 0.008, expire: 8
        },

// TURBOPROP

    { type: 'Beechcraft King Air 350i', photo: "Photos/Beechcraft_King_Air_350i.webp", price: 180000, priceMultiplier: 0.1,
         wear: 3, notes: "", chanceToGet: 0.004, expire: 10
        },
    { type: 'Bell 407', photo: "Photos/Bell_407.webp", price: 170000, priceMultiplier: 0.16,
         wear: 5, notes: "", chanceToGet: 0.003, expire: 8
        },
    { type: 'Cessna 208B Caravan EX', photo: "Photos/Cessna_208B_Caravan_EX.webp", price: 150000, priceMultiplier: 0.11,
         wear: 3, notes: "", chanceToGet: 0.004, expire: 8
        },
    { type: 'Daher TBM 930', photo: "Photos/Daher_TBM_930.webp", price: 150000, priceMultiplier: 0.06,
         wear: 1, notes: "", chanceToGet: 0.003, expire: 14
        },
    { type: 'Pilatus PC-6 Turbo porter', photo: "Photos/Pilatus_PC-6_Porter.webp", price: 100000, priceMultiplier: 0.2,
         wear: 6, notes: "", chanceToGet: 0.008, expire: 8
        },
    { type: 'Pilatus PC-6 Turbo porter (Skis)', photo: "Photos/Pilatus_PC-6_Porter.webp", price: 110000, priceMultiplier: 0.2,
         wear: 6, notes: "", chanceToGet: 0.004, expire: 12
        },
    { type: 'Pilatus PC-6 Turbo porter G950', photo: "Photos/Pilatus_PC-6_Porter.webp", price: 150000, priceMultiplier: 0.2,
         wear: 4, notes: "", chanceToGet: 0.008, expire: 9
        },
    { type: 'Pilatus PC-6 Turbo porter G950 (Floats)', photo: "Photos/Pilatus_PC-6_Porter.webp", price: 155000, priceMultiplier: 0.2,
         wear: 4, notes: "", chanceToGet: 0.008, expire: 8
        },

// TURBOFAN

    { type: 'Airbus A320neo', photo: "Photos/A20N.webp", price: 1500000, priceMultiplier: 0.08,
         wear: 1, notes: "", chanceToGet: 0.001, expire: 15
        },
    { type: 'Airbus A310-300', photo: "Photos/Airbus_A310-300.webp", price: 1200000, priceMultiplier: 0.12,
         wear: 6, notes: "", chanceToGet: 0.002, expire: 17
        },
    { type: 'Boeing 747 8 Intercontinental', photo: "Photos/Boeing_747-8_Intercontinental.webp", price: 3400000, priceMultiplier: 0.08,
         wear: 4, notes: "", chanceToGet: 0.0003, expire: 25
        },
    { type: 'Cessna Citation CJ4', photo: "Photos/Cessna_CitationJet_CJ4.webp", price: 430000, priceMultiplier: 0.1,
         wear: 2, notes: "", chanceToGet: 0.001, expire: 16
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
                let random = Math.random()*2-1
                save[replacableAd].price = save[replacableAd].price+Math.round(random*(save[replacableAd].price*save[replacableAd].priceMultiplier))
                save[replacableAd].wear = save[replacableAd].wear+Math.round(Math.random())
                if (random < -0.4) {
                    save[replacableAd].wear = save[replacableAd].wear + 1
                    save[replacableAd].expire = save[replacableAd].expire - 1
                }
                else if (random > 0.4) {
                    save[replacableAd].wear = save[replacableAd].wear - 1
                    save[replacableAd].expire = save[replacableAd].expire + 1
                }
                save[replacableAd].wear = Math.min(10, Math.max(0, save[replacableAd].wear))
                break
                }
        }
    }
}

function updateJSON() {

}
function readInSave() {
    for (let i = 0; i < save.length; i++) {
        p[i].innerHTML = `
        <img src="${save[i].photo}" alt="photo of plane" class="imageOfPlane">
        <h4>Type: ${save[i].type}</h4>
        <h4>Price: ${save[i].price}$</h4>
        <h4>Wear: ${save[i].wear}</h4>
        <h4>Notes: ${save[i].notes}</h4>
    `}
}



console.log(date);
lookForExpired()
readInSave()
console.log(save);
console.log(plane);