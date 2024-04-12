let fact

let w = window.innerWidth 
let h = window.innerHeight

if(w > 1000){
    document.querySelector("body").style = `margin: ${h*0.4}px; overflow: hidden; width: ${w* 3/5}px; height: ${h*4/5}px;`
}else{
    document.querySelector("body").style = `margin-top: ${h*0.8}px; overflow: hidden; width: 1500px; height: 1500px;`
}

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

