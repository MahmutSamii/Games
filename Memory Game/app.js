document.addEventListener('DOMContentLoaded' , () => {

    // card options
     const cardArray = [
        {
            name : 'fries',
            imag : 'images/fries.png'
        },
        {
            name : 'fries',
            imag : 'images/fries.png'
        },
        {
            name : 'cheeseburger',
            imag : 'images/cheeseburger.png'
        },
        {
            name : 'cheeseburger',
            imag : 'images/cheeseburger.png'
        },
        {
            name : 'hotdog',
            imag : 'images/hotdog.png'
        },
         {
             name : 'hotdog',
             imag : 'images/hotdog.png'
         },
        {
            name : 'ice-cream',
            imag : 'images/ice-cream.png'
        },
        {
            name : 'ice-cream',
            imag : 'images/ice-cream.png'
        },
        {
            name : 'milkshake',
            imag : 'images/milkshake.png'
        },
        {
            name : 'milkshake',
            imag : 'images/milkshake.png'
        },
        {
            name : 'pizza',
            imag : 'images/pizza.png'
        },
        {
            name : 'pizza',
            imag : 'images/pizza.png'
        },
    ]


    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []



//check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]){
            alert('you found a match')
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            alert('Sorry,try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! you found them all!'
        }
    }


//flip your card
    function flipCard ( ){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].imag)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


//create your board
    function createBoard () {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    createBoard()
})

































