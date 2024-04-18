let fact

let w = window.innerWidth 
let h = window.innerHeight

let factTxt = document.querySelector('#fact')

async function getFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
    const data = await response.json()

    fact = data.text
    factTxt.setAttribute("value", fact.toUpperCase())
             
}

document.body.onkeyup = function(e){
    if(e.key == " "){
        getFact()
    }
}

document.body.addEventListener('touchstart', function(e){
    getFact()  
})
