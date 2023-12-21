const text = document.createElement('h1');
const input = document.createTextNode(prompt('Input your text: '));
text.appendChild(input);

const summon = function () {
    const x = Math.round(Math.random() * window.innerWidth);
    const y = Math.round(Math.random() * window.innerHeight);
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    console.log(x, y);
    text.style.left = x + 'px';
    text.style.top = y + 'px';
    text.style.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.body.appendChild(text.cloneNode(true));
}

const changeBG = function () {
    document.body.classList.toggle('dark');
}

const font = ['Consolas', 'Arial', 'Times New Roman'];
let numF = 0;

const changeFont = function () {
    document.body.style.fontFamily = font[numF % font.length];
    numF++;
}

document.body.addEventListener('keypress', function (e) {
    if (e.key == 'b') {
        changeBG();
    }
    else if (e.key == 'f') {
        changeFont();
    }
    else {
        summon();
    }
});

var spam;
const spamming = function () {
    spam = setInterval(summon, 250);
}

document.body.addEventListener('mousedown', spamming);
document.body.addEventListener('mouseup', function () {
    clearInterval(spam);
});

document.body.addEventListener('dblclick', changeBG);