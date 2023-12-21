const text = document.createElement('h1');
const input = document.createTextNode(prompt('Input your text: '));
text.appendChild(input);

const summon = function (e) {
    const x = e.clientX;
    const y = e.clientY;
    console.log(x, y);
    text.style.left = x + 'px';
    text.style.top = y + 'px';
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

document.body.addEventListener('mousemove', summon);
document.body.addEventListener('keypress', function (e) {
    if (e.key == 'b') {
        changeBG();
    }
    else if (e.key == 'f') {
        changeFont();
    }
});

document.body.addEventListener('dblclick', changeBG);