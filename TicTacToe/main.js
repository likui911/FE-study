const { createApp, reactive, ref, computed, watch } = Vue;

const app = createApp({
    template: `<Game/>`
});

app.component('Game', {
    template: ` 
    <div className="game-board">
        <Board @click="onClick" :squares="current" />
    </div>
    <div className="game-info">
        <div className="status">{{ status }}</div>
        <ol>
        <li v-for="move in moves" :key="move.step">
            <button @click="jumpTo(move.step)">{{move.desc}}</button>
        </li>
        </ol>
    </div>
  `,
    setup() {
        const xIsNext = ref(true);
        const stepNumber = ref(0);
        const history = ref([Array(9).fill("")])

        const current = computed(() => {
            return history.value[history.value.length - 1]
        })

        const status = computed(() => {
            let squares = current.value.slice();
            const winner = calculateWinner(squares);
            let status;
            if (winner) {
                status = 'Winner: ' + winner;
            } else {
                status = 'Next player: ' + (xIsNext.value ? 'X' : 'O');
            }
            return status;
        });

        const onClick = (i) => {
            let squares = current.value.slice();
            if (calculateWinner(squares) || squares[i]) {
                return;
            }
            squares[i] = xIsNext.value ? 'X' : 'O';
            xIsNext.value = !xIsNext.value;
            history.value.push(squares);
        }

        const moves = computed(() => {
            return history.value.map((square, step) => {
                const desc = step ?
                    'Go to move #' + step :
                    'Go to game start';
                return { step, desc }
            })
        })
        const jumpTo = (step) => {
            // todo
            console.log(step)
        }

        return { current, moves, jumpTo, status, onClick }
    }
})
app.component('Board', {
    template: `
    <div>
        <div class="board-row">
            <Square :value="squares[0]" @click.stop="onClick(0)"/>
            <Square :value="squares[1]" @click.stop="onClick(1)"/>
            <Square :value="squares[2]" @click.stop="onClick(2)"/>
        </div>
        <div class="board-row">
            <Square :value="squares[3]" @click.stop="onClick(3)"/>
            <Square :value="squares[4]" @click.stop="onClick(4)"/>
            <Square :value="squares[5]" @click.stop="onClick(5)"/>
        </div>
        <div class="board-row">
            <Square :value="squares[6]" @click.stop="onClick(6)"/>
            <Square :value="squares[7]" @click.stop="onClick(7)"/>
            <Square :value="squares[8]" @click.stop="onClick(8)"/>
        </div>
    </div>
    `,
    props: {
        squares: {
            type: Array,
            required: true,
            default: Array(9).fill(null)
        }
    },
    setup(props, { emit }) {
        const onClick = (i) => {
            emit("click", i)
        }

        return { onClick }
    }
})

app.component('Square', {
    template: `<button class="square">{{value}}</button>`,
    props: {
        value: {
            type: String,
            required: true
        }
    }
})
app.mount(".game");

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}