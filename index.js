let fact

let w = window.innerWidth 
let h = window.innerHeight

let factTxt = document.querySelector('#fact')

async function getFact(){
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
    const data = await response.json()

    fact = data.text
    factTxt.setAttribute("value", fact)
    
    // if(fact.length < 150){
    //     document.querySelector("#fact").setAttribute("value", fact)
    // }
         
}

document.body.onkeyup = function(e){
    if(e.key == " "){
        getFact()
    }
}

document.body.addEventListener('touchstart', function(e){
    
    getFact()  
    
    // document.querySelector("#fact").setAttribute("animation",{
    //     property: "opacity",
    //     dir: "alternate",
    //     to: 1,
    //     dur: 3000,
    //     easing: "easeInOutSine",
    //     loop: false
    // })
    // console.log(fact);
})

console.log(document.querySelector("#fact").getAttribute("opacity"));

// else if(document.querySelector("#fact").getAttribute("opacity")>0){
//     opacity = document.querySelector("#fact").getAttribute("opacity") + 0.1
//     document.querySelector("#fact").setAttribute("opacity", opacity)
// }
// setInterval(function(){
//     let pZ = document.querySelector("a-camera").object3D.position.z - 5
//     document.querySelector("#fact").setAttribute("position", `0 0.3 ${pZ}`)
//     // console.log(document.querySelector("a-camera").object3D);
    
// },10)

