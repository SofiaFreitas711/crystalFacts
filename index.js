let fact

async function getFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
    const data = await response.json()

    fact = data.text
    
    document.querySelector("#fact").setAttribute("value", fact)
}

document.body.onkeyup = function(e){
    if(e.key == " "){
        getFact()
    }
}

document.body.addEventListener('touchstart', function(e){
    getFact()
})

// setInterval(function(){
//     let pZ = document.querySelector("a-camera").object3D.position.z - 5
//     document.querySelector("#fact").setAttribute("position", `0 0.3 ${pZ}`)
//     // console.log(document.querySelector("a-camera").object3D);
    
// },10)

