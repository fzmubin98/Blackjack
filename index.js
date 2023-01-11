
let handCard = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
let player = {
    name : "Player 1" ,
    chips : 1000
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randNum = Math.floor((Math.random() * 13)) + 1

    if (randNum === 1 && sum >= 11){
        return 1
    }
    else if(randNum === 1 && sum < 11){
        return 11
    }
    else if(randNum > 10){
        return 10
    }
    else{
        return randNum
    }

    return randNum
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    handCard = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i <= handCard.length -1; i++){
        cardsEl.textContent += handCard[i] + " "
    }

    sumEl.textContent = "Total: " + sum
    if(sum <= 20){
        message = "Do you want a new card?"
    }
    else if(sum === 21){
        message = "Congrats! You have Black Jack!"
        hasBlackjack = true
    }
    else{
        message = "Sorry! Game over"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    if(isAlive === true && hasBlackjack === false){
        anotherCard = getRandomCard()
         handCard.push(anotherCard) 
        //push() and pop() functions are used to insert and remove the element at the end of an array
        // but unshift() and shift() are used to insert and remove elements at the start of and array respectfully 
        sum += anotherCard
        renderGame()
    }
}