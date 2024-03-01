document.addEventListener('keydown', function(event){
    makeSound(event.key)
    buttonAnimation(event.key)
})

for (let i=0;i<document.querySelectorAll('button').length;i++){
    document.querySelectorAll('button')[i].addEventListener('click',function(){
       
        makeSound(this.innerHTML) 
        buttonAnimation(this.innerHTML)
})};

function makeSound(key){
    switch (key) {
        case 'w':
        let tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play()
        break;
    
        case 'a':
        let tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play()
        break;
    
        case 's':
        let tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play()
        break;
    
        case 'd':
        let tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play()
        break;
    
        case 'j':
        let snare = new Audio('./sounds/snare.mp3');
        snare.play()
        break;
    
        case 'k':
        let crash = new Audio('./sounds/crash.mp3');
        crash.play()
        break;
    
        case 'l':
        let kick = new Audio('./sounds/kick-bass.mp3');
        kick.play()    
        break;
    default:
        console.log(key)
        break;
    }
}

function buttonAnimation(carentKey) {
    document.querySelector ('.'+ carentKey).classList.add('pressed')
    setTimeout(function() {
    document.querySelector ('.'+ carentKey).classList.remove('pressed')
    }, 100)
}
//let audio = new Audio('./sounds/crash.mp3');
//audio.play()

// this.style.color = 'white'
