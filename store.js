let p = ["0","1","2","3","4","5","6","7","8","9","10","11","12",
    "13","14","15","16","17","18","19"]
for (let i = 0; i < p.length; i++) {
    p[i] = document.querySelector("#P" + i);
}
let plane = [
    { type: 'Empty', photo: "Photos/Blank.png", price: 0, priceMultiplier: 0,
         hobbs: 0, wear: 0, notes: "no range, nothing!", chanceToGet: 1, expire: 3
        }
]

let test = new Date();

const save = fetch("store.json");

let now = [test.getDate(),test.getMonth()+1,test.getFullYear()];
console.log(now);
console.log(test.getDate());