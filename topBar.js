let balance

function Balance() {
    let localData = localStorage.getItem("balance")
try {
    if (localData && localData !== undefined) {
        balance = JSON.parse(localData)
    }
    else {
        throw new Error("No Local Save")
    }} catch (e) {
        console.warn("localStorage failure (balance)", e)
        balance = 15000
        localStorage.setItem("balance", JSON.stringify(balance))
    }
    let doc = document.getElementById("balance")
    doc.innerHTML = `<h3 id="balance">Balance: $${balance}</h3>`
 
}

Balance()