let fact

let w = window.innerWidth 
let h = window.innerHeight

if(w > 1000){
    document.querySelector("body").style = `margin: ${h}px; overflow: hidden; width: ${w* 3/5}px; height: ${h*4/5}px;`
}else{
    document.querySelector("body").style = `margin-top: 0px; overflow: hidden; width: ${w*1.5}px; height: ${h}px;`
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
    document.querySelector("#fact").setAttribute("animation",{
        property: "opacity",
        dir: "alternate",
        to: 1,
        dur: 3000,
        easing: "easeInOutSine",
        loop: false
    })
    console.log(fact);
})

// setInterval(function(){
//     let pZ = document.querySelector("a-camera").object3D.position.z - 5
//     document.querySelector("#fact").setAttribute("position", `0 0.3 ${pZ}`)
//     // console.log(document.querySelector("a-camera").object3D);
    
// },10)

