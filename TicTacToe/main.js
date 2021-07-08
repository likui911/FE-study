const { createApp, reactive, ref, computed, watch } = Vue;

const app = createApp({
    template: `<Game/>`
});

app.component('Game', {
    template: ` 
    <div className="game-board">
        <Board/>
    </div>
    <div className="game-info">
        <div>Winner: X</div>
        <ol>
            <li><button>Go to game start</button></li>
            <li><button>Go to move #1</button></li>
            <li><button>Go to move #2</button></li>
            <li><button>Go to move #3</button></li>
            <li><button>Go to move #4</button></li>
            <li><button>Go to move #5</button></li>
            <li><button>Go to move #6</button></li>
            <li><button>Go to move #7</button></li>
        </ol>
    </div>
  `,
})
app.component('Board', {
    template: `
    <div>
        <div class="board-row">
            <Square>X</Square>
            <Square>X</Square>
            <Square>X</Square>
        </div>
        <div class="board-row">
            <Square>X</Square>
            <Square>O</Square>
            <Square></Square>
        </div>
        <div class="board-row">
            <Square></Square>
            <Square>O</Square>
            <Square>O</Square>
        </div>
    </div>
    `,
})

app.component('Square', {
    template: `<button class="square"><slot></slot></button>`
})
app.mount(".game");