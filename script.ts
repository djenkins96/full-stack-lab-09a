let diceArray: Array<Die> = [];

document.getElementById('generate-button').addEventListener('click', function () {
    let d = new Die();
    diceArray.push(d);
});

let rollBtn = document.getElementById('roll-button');
rollBtn.addEventListener('click', function () {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i].roll();
    }
});

document.getElementById('sum-button').addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < diceArray.length; i++) {
        sum = sum + diceArray[i].value;
    }
    alert('the sum of the dice is ' + sum);
})

class Die {
    div: HTMLDivElement;
    value: number;

    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.addEventListener('click', this.roll.bind(this));
        this.div.addEventListener('dblclick', this.removeDie.bind(this));
        this.roll();
        document.body.appendChild(this.div);
    }
    roll() {
        this.value = Math.ceil(Math.random() * 6);
        this.div.innerHTML = String(this.value);
    }

    removeDie() {
        this.div.remove();

        let index = diceArray.indexOf(this);
        diceArray.splice(index, 1);
    }
}
