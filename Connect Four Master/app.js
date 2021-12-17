document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
    ]

    function checkBoard() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]]
            const square2 = squares[winningArrays[y][1]]
            const square3 = squares[winningArrays[y][2]]
            const square4 = squares[winningArrays[y][3]]

            //check those squares to see if they all have the class of player-one
            if (
                square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')
            )
            {
                result.innerHTML = 'Player One Wins!'
            }
            //check those squares to see if they all have the class of player-two
            if (
                square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')
            )
            {
                result.innerHTML = 'Player Two Wins!'
            }
        }
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].onclick = () => {
            //if the square below your current square is taken, you can go ontop of it
            if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
                if (currentPlayer == 1) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer == 2){
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-two')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
            } else alert('cant go here')
            checkBoard()
        }
    }

})
