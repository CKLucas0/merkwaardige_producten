// var
exponents = ["","²","³","⁴","⁵","⁶","⁷","⁸"]
alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
maxg = 9
maxe = 2

// functions
function randint(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function oefening() {
    CloneAlphabet = alphabet.slice()
    la = alphabet[randint(0,25)]
    CloneAlphabet.splice(CloneAlphabet.indexOf(la), 1)
    lb = CloneAlphabet[randint(0,24)]

    a = randint(2,maxg)
    b = randint(2,maxg)
    t = randint(0, 1) === 1 ? "-" : "+"
    ex1 = randint(0,maxe)
    ex2 = randint(0,maxe)
    return (`(${a}${la}${exponents[ex1]} ${t} ${b}${lb}${exponents[ex2]})² = ${a**2}${la}${exponents[(ex1*2)+1]} ${t} ${2*a*b}${la}${exponents[ex1]}${lb}${exponents[ex2]} + ${b**2}${lb}${exponents[(ex2*2)+1]}`)
}

function AddToList() {
    for (let step = 0; step < 30; step++) {
        const li = document.createElement("li")
        li.textContent = oefening()
        list.append(li)
    }
}


