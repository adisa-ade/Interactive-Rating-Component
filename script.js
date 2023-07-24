let ratingValues = document.querySelector('.rating-values')
let value = document.querySelector('#rating-value')
let submit = document.querySelector('#submit')
let cardOne = document.querySelector('.card-one')
let cardTwo = document.querySelector('.card-two')
const arr = [1,2,3,4,5]

for(i = 0; i < arr.length; i++){
    let button = document.createElement('button')
    button.textContent = arr[i]
    button.className = 'bt-rating'
    ratingValues.appendChild(button)
}

let button = document.querySelectorAll('.bt-rating')
for(i = 0; i < button.length; i++){
    button[i].addEventListener('click', (e) => {        
    value.textContent = e.target.textContent
    e.target.style.backgroundColor = 'hsl(217, 12%, 63%'
    e.target.style.color = 'hsl(0, 0%, 100%)'
})
    
}
submit.addEventListener('click', () =>{
    if(value.textContent == ''){
        alert(' Please pick a rating value')
    }
    else{
        cardOne.style.display = 'none'
        cardTwo.style.display = 'block'
    }
    
})
