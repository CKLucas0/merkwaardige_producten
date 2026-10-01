// var
exponents = ["","²","³","⁴","⁵","⁶","⁷","⁸"]
alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

// functions
function randint(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function oefening() {
    CloneAlphabet = alphabet.slice()
    la = alphabet[randint(0,25)]
    CloneAlphabet.splice(CloneAlphabet.indexOf(la), 1)
    lb = CloneAlphabet[randint(0,24)]

    a = randint(2,12)
    b = randint(2,12)
    t = randint(0, 1) === 1 ? "-" : "+"
    ex1 = randint(0,3)
    ex2 = randint(0,3)
    return (`(${a}${la}${exponents[ex1]} ${t} ${b}${lb}${exponents[ex2]}) = ${a**2}${la}${exponents[(ex1*2)+1]} ${t} ${2*a*b}${la}${exponents[ex1]}${lb}${exponents[ex2]} + ${b**2}${lb}${exponents[(ex2*2)+1]}`)
}

function AddToList() {
    for (let step = 0; step < 30; step++) {
        const li = document.createElement("li")
        li.textContent = oefening()
        list.append(li)
    }
}


