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
    <!-- todo
        <div>Winner: {{value}}</div>
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
    -->
    </div>
  `,
    setup() {
    }
})
app.component('Board', {
    template: `
    <div>
        <div className="status">{{ status }}</div>
        <div class="board-row">
            <Square :value="squares[0]" @click="onClick(0)"/>
            <Square :value="squares[1]" @click="onClick(1)"/>
            <Square :value="squares[2]" @click="onClick(2)"/>
        </div>
        <div class="board-row">
            <Square :value="squares[3]" @click="onClick(3)"/>
            <Square :value="squares[4]" @click="onClick(4)"/>
            <Square :value="squares[5]" @click="onClick(5)"/>
        </div>
        <div class="board-row">
            <Square :value="squares[6]" @click="onClick(6)"/>
            <Square :value="squares[7]" @click="onClick(7)"/>
            <Square :value="squares[8]" @click="onClick(8)"/>
        </div>
    </div>
    `,
    setup() {
        const squares = reactive(Array(9).fill(''))
        const xIsNext = ref(true);

        const status = computed(() => {
            return 'Next player: ' + (xIsNext.value ? 'X' : 'O');
        });

        const onClick = (i) => {
            squares[i] = xIsNext.value ? 'X' : 'O';
            xIsNext.value = !xIsNext.value;
        }
        return { squares, status, onClick }
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