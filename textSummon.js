const rc = document.getElementsByClassName('rc');

rc[0].addEventListener('mousemove', function (e) {
    const h = Math.round(e.clientX / window.innerWidth * 1440 % 360);
    console.log(h);
    rc[0].style.backgroundColor = 'hsl(' + h + ', 100%, 75%)'
});
rc[0].addEventListener('mouseleave', function () {
    rc[0].style.backgroundColor = '#404040'
})

rc[1].addEventListener('mousemove', function (e) {
    const h = Math.round(e.clientX / window.innerWidth * 1440 % 360);
    console.log(h);
    rc[1].style.backgroundColor = 'hsl(' + h + ', 100%, 75%)'
});
rc[1].addEventListener('mouseleave', function () {
    rc[1].style.backgroundColor = '#404040'
})

const text = document.createElement('h2');
const input = document.createTextNode('text.summon()');
text.appendChild(input);

const summon = function () {
    const x = Math.round(Math.random() * window.innerWidth);
    const y = Math.round(Math.random() * window.innerHeight);
    console.log(x, y);
    text.style.left = x + 'px';
    text.style.top = y + 'px';
    document.body.appendChild(text.cloneNode(true));
}

const changeBG = function () {
    document.body.classList.toggle('dark');
}

const font = ['Consolas', 'Arial', 'Times New Roman'];
let numF = 1;

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