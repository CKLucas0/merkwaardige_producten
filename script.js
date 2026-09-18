// var
exponents = ["","²","³","⁴","⁵","⁶","⁷","⁸"]

// functions
function randint(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function oefening() {
    a = randint(2,12)
    b = randint(2,12)
    ex1 = randint(0,3)
    ex2 = randint(0,3)

    return ("(" + a + "a" + exponents[ex1] + " + " + b + "b" + exponents[ex2] + ")² = " + a**2 + "a" + exponents[(ex1*2)+1] + " + " + 2*a*b + "a" + exponents[ex1]+"b" + exponents[ex2] + " + " + b**2 + "b" + exponents[(ex2*2)+1] )
}

function AddToList() {
    const li = document.createElement("li")
    li.textContent = oefening()
    list.append(li)
}

