let gameboard = (() => {
    let board = new Array(9)

    let turn = 1;

    let a1 = document.querySelector('.a1')
    let a2 = document.querySelector('.a2')
    let a3 = document.querySelector('.a3')
    let b1 = document.querySelector('.b1')
    let b2 = document.querySelector('.b2')
    let b3 = document.querySelector('.b3')
    let c1 = document.querySelector('.c1')
    let c2 = document.querySelector('.c2')
    let c3 = document.querySelector('.c3')
    let xo = [a1, a2, a3, b1, b2, b3, c1, c2, c3]

    let but = document.querySelector('.setre')

    function interactiveGame() {
        xo.forEach(x => {
            x.addEventListener("click", () => {
                if (turn == 1 && x.textContent != "X" && x.textContent != "O") {
                    x.textContent = "X";
                    turn = 0;
                } else if (turn == 0 && x.textContent != "X" && x.textContent != "O") {
                    x.textContent = "O";
                    turn = 1;
                }
            })
        })
    }

    function reset() {
        but.addEventListener("click", () => {
            board = new Array(9);
            turn = 1;
            xo.forEach(x => {
                x.textContent = ''
            })
        })
    }

    return {interactiveGame, reset}
})();

gameboard.interactiveGame();
gameboard.reset()
