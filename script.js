// Liten animajson for å visa at bilde kan flippast

const flipCard = document.getElementById('flipCardInner')
let isMouseOver = false

flipCard.addEventListener('mouseenter', () => {
    isMouseOver = true
})

function animateCard() {
    flipCard.animate(
        [
            {transform: 'rotateY(0deg)'},
            {transform: 'rotateY(20deg)'},
            {transform: 'rotateY(20deg)'},
            {transform: 'rotateY(20deg)'},
            {transform: 'rotateY(0deg)'}
        ],
        {
            duration: 1000,
            easing: 'ease-in-out'
        }
    )
}

setInterval(function() {
    if (!isMouseOver) {
        animateCard()
    }
}, 4000)

// 

// Theme switch

const theme = document.getElementById('theme')
const bgc = document.querySelector('body')
const heroP = document.getElementById('heroP')
const equal = document.getElementById('equal')
let count = 0
theme.addEventListener('click', () => {
    if (count % 2 !== 0) {
        bgc.style.backgroundColor = ''
        theme.innerText = 'Light'
        heroP.style.color = ''
        equal.style.color = ''
    } else {
        bgc.style.backgroundColor = 'white'
        theme.innerText = 'Dark'
        heroP.style.color = 'black'
        equal.style.color = 'black'
    }
    count++
})

// 

// Typewriter på baksio av bilde?

const cardH2 = document.getElementById('cardH2')

document.addEventListener('DOMContentLoaded', function(event) {
    let dataText = ["learn", "code", "create"];
    const cardP = document.getElementById('cardP')

    function typeWriter(text, i, Callback) {
        if (i < text.length) {
            cardP.innerHTML = text.substring(0, i + 1) + '<span class="caret" aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, Callback);
            }, 100);
        } else if (typeof Callback == 'function') {
            setTimeout(Callback, 1000);
        }
    }

    function deleteText(text, i, Callback) {
        if (i >= !text.length) {
            cardP.innerHTML = text.substring(0, i) + '<span class="caret" aria-hidden="true"></span>';
            setTimeout(function() {
                deleteText(text, i - 1, Callback);
            }, 40);
        } else if (typeof Callback == 'function') {
            setTimeout(Callback, 500);
        }
    }

    function startTextAnimation(i) {
        if (i < dataText.length) {
            typeWriter(dataText[i], 0, function() {
                deleteText(dataText[i], dataText[i].length, function() {
                    startTextAnimation(i + 1);
                });
            });
        } else {
            setTimeout(function() {
                startTextAnimation(0);
            }, 1);
        }
    }

    startTextAnimation(0);
});
