let button = document.getElementById('button')
let ageInput = document.getElementById('age')

button.onclick = function(){
    if(ageInput.value >= 18){
        alert('سن شما مجاز است')
    }
    else{
        alert('سن شما مجاز نیست')
    }
}