let hexcolor = '0123456789abcdef'
let resultcolor = '#'

let clickbutton = document.getElementById('but')
let color = document.getElementById('color')
let main = document.querySelector('main')

clickbutton.addEventListener('click', function(){
    for (let num = 0; num < 6; num++){
        let RandomIndex = Math.floor(Math.random()*16)
        resultcolor = resultcolor + hexcolor[RandomIndex]
    }
    color.textContent = resultcolor
    color.style.color = resultcolor
    
    main.style.backgroundColor = resultcolor
    resultcolor = '#'

    let aud = new Audio('mixkit-camera-shutter-click-1133.wav')
    aud.autoplay()

})


