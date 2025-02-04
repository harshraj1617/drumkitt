var tom1 = document.getElementById("tom1");
var tom2 = document.getElementById("tom2");
var tom3 = document.getElementById("tom3");
var tom4 = document.getElementById("tom4");

tom1.addEventListener("click", ()=>{
    var audio = new Audio('tom-1.mp3');
    audio.play();
})

tom2.addEventListener("click", ()=>{
    var audio = new Audio('tom-2.mp3');
    audio.play();
})

tom3.addEventListener("click", ()=>{
    var audio = new Audio('tom-3.mp3');
    audio.play();
})

tom4.addEventListener("click", ()=>{
    var audio = new Audio('tom-4.mp3');
    audio.play();
})

document.getElementById("crash").addEventListener("click",()=>{
    var audio = new Audio('crash.mp3');
    audio.play();
})


document.getElementById("snare").addEventListener("click",()=>{
    var audio = new Audio('snare.mp3');
    audio.play();
})


document.getElementById("kick").addEventListener("click",()=>{
    var audio = new Audio('kick-bass.mp3');
    audio.play();
})

document.addEventListener("keydown", function(event) {
    // console.log(event.key);
    var key = event.key;
    switch(key){
        case "a":
            var audio = new Audio('tom-1.mp3');
            audio.play();
            
            break;
        case "s":
            var audio = new Audio('tom-2.mp3');
            audio.play();
                
            break;
        case "d":
            var audio = new Audio('tom-3.mp3');
            audio.play();
                
            break;
        
        case "j":
            var audio = new Audio('tom-4.mp3');
            audio.play();
                
            break;
            
        case "k":
            var audio = new Audio('crash.mp3');
            audio.play();
                
            break;
            
        case "l":
            var audio = new Audio('snare.mp3');
            audio.play();
                
            break;   
            
        case " ":
            var audio = new Audio('kick-bass.mp3');
            audio.play();
                
            break;    
    }
});





