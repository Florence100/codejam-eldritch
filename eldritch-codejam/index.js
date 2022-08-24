import greenDeck from './data/green.js';
import brownDeck from './data/brown.js';
import blueDeck from './data/blue.js';

const azathothCard = document.querySelector('.azathoth');
const cthulthuCard = document.querySelector('.cthulthu');
const iogSothothCard = document.querySelector('.iogSothoth');
const shubNiggurathCard = document.querySelector('.shubNiggurath');
const levelButton = document.querySelector('.level');
const middleButton = document.querySelector('.middle');
const lightButton = document.querySelector('.light');
const demoButton = document.querySelector('.demo');
const cardCount = document.querySelector('.card-count');
const deck = document.querySelector('.first-of-deck');
const deckOpen = document.querySelector('.second-of-deck');


// let greenCards = ['green1.png', 'green2.png', 'green3.png', 'green4.png', 'green5.png', 'green6.png', 'green7.png', 
//                     'green8.png', 'green9.png', 'green10.png', 'green11.png', 'green12.png', 'green13.png', 'green14.png', 
//                     'green15.png', 'green16.png', 'green17.png', 'green18.png']


// let brownCards = ['brown1.png', 'brown2.png', 'brown3.png', 'brown4.png', 'brown5.png', 'brown6.png', 'brown7.png',
//                     'brown8.png', 'brown9.png', 'brown10.png', 'brown11.png', 'brown12.png', 'brown13.png', 'brown14.png',
//                     'brown15.png', 'brown16.png', 'brown17.png', 'brown18.png', 'brown19.png', 'brown20.png', 'brown21.png']

// let blueCards = ['blue1.png', 'blue2.png', 'blue3.png', 'blue4.png', 'blue5.png', 'blue6.png', 'blue7.png', 'blue8.png', 
//                     'blue9.png', 'blue10.png', 'blue11.png', 'blue12.png']

let greenCards;
let brownCards;
let blueCards;

let firstStageCard;
let secondStageCard;
let thirdStageCard;

let anciens;
let level;
let composition;
let firstStageGreen = document.querySelector('.first-stage .green');
let firstStageBrown = document.querySelector('.first-stage .brown');
let firstStageBlue = document.querySelector('.first-stage .blue');
let secondStageGreen = document.querySelector('.second-stage .green');
let secondStageBrown = document.querySelector('.second-stage .brown');
let secondStageBlue = document.querySelector('.second-stage .blue');
let thirdStageGreen = document.querySelector('.third-stage .green');
let thirdStageBrown = document.querySelector('.third-stage .brown');
let thirdStageBlue = document.querySelector('.third-stage .blue');


azathothCard.addEventListener('click', () => {
    levelButton.classList.remove('hidden');
    levelButton.classList.add('hiddenshow');
    azathothCard.classList.add('anciens-active');
    cthulthuCard.classList.remove('anciens-active');
    iogSothothCard.classList.remove('anciens-active');
    shubNiggurathCard.classList.remove('anciens-active');
    anciens = 'azathoth';
})

cthulthuCard.addEventListener('click', () => {
    levelButton.classList.remove('hidden');
    levelButton.classList.add('hiddenshow');
    cthulthuCard.classList.add('anciens-active');
    azathothCard.classList.remove('anciens-active');
    iogSothothCard.classList.remove('anciens-active');
    shubNiggurathCard.classList.remove('anciens-active');
    anciens = 'cthulthu';
})

iogSothothCard.addEventListener('click', () => {
    levelButton.classList.remove('hidden');
    levelButton.classList.add('hiddenshow');
    iogSothothCard.classList.add('anciens-active');
    azathothCard.classList.remove('anciens-active');
    cthulthuCard.classList.remove('anciens-active');
    shubNiggurathCard.classList.remove('anciens-active');
    anciens = 'iogSothoth';
})

shubNiggurathCard.addEventListener('click', () => {
    levelButton.classList.remove('hidden');
    levelButton.classList.add('hiddenshow');
    iogSothothCard.classList.remove('anciens-active');
    azathothCard.classList.remove('anciens-active');
    cthulthuCard.classList.remove('anciens-active');
    shubNiggurathCard.classList.add('anciens-active');
    anciens = 'shubNiggurath';
})

middleButton.addEventListener('click', () => {
    demoButton.classList.remove('hidden');
    demoButton.classList.add('hiddenshow');
    middleButton.classList.add('button-active');
    lightButton.classList.remove('button-active');
    level = 'middle';
})

lightButton.addEventListener('click', () => {
    demoButton.classList.remove('hidden');
    demoButton.classList.add('hiddenshow');
    lightButton.classList.add('button-active');
    middleButton.classList.remove('button-active');
    level = 'light';
})

demoButton.addEventListener('click', () => {
    cardCount.classList.remove('hidden');
    cardCount.classList.add('hiddenshow');
    deck.classList.remove('first-of-deck');
    deck.classList.add('deck');
    deckOpen.style.backgroundImage = 'none';
    console.log(level);
    if (level === 'middle') {
        greenCards = []
        brownCards = []
        blueCards = []

        for (let i of greenDeck) {            
            greenCards.push(i.cardFace)
        }
        
        for (let i of brownDeck) {            
            brownCards.push(i.cardFace)
        }
        
        for (let i of blueDeck) {            
            blueCards.push(i.cardFace)
        }

    } else if (level === 'light') {
        greenCards = []
        brownCards = []
        blueCards = []

        for (let i of greenDeck) {
            if (i.difficulty !== 'hard') {
                greenCards.push(i.cardFace)
            }
        }
        
        for (let i of brownDeck) {
            if (i.difficulty !== 'hard') {
                brownCards.push(i.cardFace)
            }
        }
        
        for (let i of blueDeck) {
            if (i.difficulty !== 'hard') {
                blueCards.push(i.cardFace)
            }
        }
    }

    if (anciens === 'azathoth') {
        azathoth ();
        } else if (anciens === 'cthulthu') {
        cthulthu ();
        } else if (anciens === 'iogSothoth') {
        iogSothoth ();
        } else if (anciens === 'shubNiggurath') {
        shubNiggurath ();
        }
})

//max не входит!
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function azathoth () {
    composition = {
        first: {green: 1, brown: 2, blue: 1},
        second: {green: 2, brown: 3, blue: 1},
        third: {green: 2, brown: 4, blue: 0}
    }
    cardSelection ();    
}

function cthulthu () {
    composition = {
        first: {green: 0, brown: 2, blue: 2},
        second: {green: 1, brown: 3, blue: 0},
        third: {green: 3, brown: 4, blue: 0}
    }
    cardSelection ();    
}

function iogSothoth () {
    composition = {
        first: {green: 0, brown: 2, blue: 1},
        second: {green: 2, brown: 3, blue: 1},
        third: {green: 3, brown: 4, blue: 0}
    }
    cardSelection ();    
}

function shubNiggurath () {
    composition = {
        first: {green: 1, brown: 2, blue: 1},
        second: {green: 3, brown: 2, blue: 1},
        third: {green: 2, brown: 4, blue: 0}
    }
    cardSelection ();    
}

function cardSelection () {
    firstStageGreen.textContent = composition.first.green;
    firstStageBrown.textContent = composition.first.brown;
    firstStageBlue.textContent = composition.first.blue;
    secondStageGreen.textContent = composition.second.green;
    secondStageBrown.textContent = composition.second.brown;
    secondStageBlue.textContent = composition.second.blue;
    thirdStageGreen.textContent = composition.third.green;
    thirdStageBrown.textContent = composition.third.brown;
    thirdStageBlue.textContent = composition.third.blue;

    let cardGreen = [];
    let cardBrown = [];
    let cardBlue = [];

    const cardGreenCount = composition.first.green + composition.second.green + composition.third.green;
    const cardBrownCount = composition.first.brown + composition.second.brown + composition.third.brown;
    const cardBlueCount = composition.first.blue + composition.second.blue + composition.third.blue;
    
    while (cardGreen.length < cardGreenCount) {
        let ranNum = getRandomNum(0, greenCards.length)
        if (!cardGreen.includes(greenCards[ranNum])) {
            cardGreen.push(greenCards[ranNum]);
        }                
    }

    while (cardBrown.length < cardBrownCount) {
        let ranNum = getRandomNum(0, brownCards.length)
        if (!cardBrown.includes(brownCards[ranNum])) {
            cardBrown.push(brownCards[ranNum]);
        }                
    }

    while (cardBlue.length < cardBlueCount) {
        let ranNum = getRandomNum(0, blueCards.length)
        if (!cardBlue.includes(blueCards[ranNum])) {
            cardBlue.push(blueCards[ranNum]);
        }                
    }

    firstStageCard = []
    secondStageCard = []
    thirdStageCard = []

    for (let i = 0; i < composition.first.green; i ++) {
        let ranNum = getRandomNum(0, cardGreen.length);
        firstStageCard.push(cardGreen[ranNum]);
        cardGreen.splice(ranNum, 1);        
    }

    for (let i = 0; i < composition.first.brown; i ++) {
        let ranNum = getRandomNum(0, cardBrown.length);
        firstStageCard.push(cardBrown[ranNum]);
        cardBrown.splice(ranNum, 1);        
    }

    for (let i = 0; i < composition.first.blue; i ++) {
        let ranNum = getRandomNum(0, cardBlue.length);
        firstStageCard.push(cardBlue[ranNum]);
        cardBlue.splice(ranNum, 1);        
    }
    
    for (let i = 0; i < composition.second.green; i ++) {
        let ranNum = getRandomNum(0, cardGreen.length);
        secondStageCard.push(cardGreen[ranNum]);
        cardGreen.splice(ranNum, 1);        
    }

    for (let i = 0; i < composition.second.brown; i ++) {
        let ranNum = getRandomNum(0, cardBrown.length);
        secondStageCard.push(cardBrown[ranNum]);
        cardBrown.splice(ranNum, 1);        
    }

    for (let i = 0; i < composition.second.blue; i ++) {
        let ranNum = getRandomNum(0, cardBlue.length);
        secondStageCard.push(cardBlue[ranNum]);
        cardBlue.splice(ranNum, 1);        
    }

    for (let i = 0; i < composition.third.green; i ++) {
        let ranNum = getRandomNum(0, cardGreen.length);
        thirdStageCard.push(cardGreen[ranNum]);
        cardGreen.splice(ranNum, 1);        
    }

    for (let i = 0; i < composition.third.brown; i ++) {
        let ranNum = getRandomNum(0, cardBrown.length);
        thirdStageCard.push(cardBrown[ranNum]);
        cardBrown.splice(ranNum, 1);        
    }

    for (let i = 0; i < composition.third.blue; i ++) {
        let ranNum = getRandomNum(0, cardBlue.length);
        thirdStageCard.push(cardBlue[ranNum]);
        cardBlue.splice(ranNum, 1);        
    }
}

function clickCard () {
    deck.addEventListener('click', () => {
        if (firstStageCard.length > 0) {
            let url
            let ranNum = getRandomNum(0, firstStageCard.length);
            if (firstStageCard[ranNum].includes('green')) {
                url = `'assets/MythicCards/green/${firstStageCard[ranNum]}'`
                composition.first.green = composition.first.green - 1
                firstStageGreen.textContent = composition.first.green
            } else if (firstStageCard[ranNum].includes('brown')) {
                url = `'assets/MythicCards/brown/${firstStageCard[ranNum]}'`
                composition.first.brown = composition.first.brown - 1
                firstStageBrown.textContent = composition.first.brown
            } else if (firstStageCard[ranNum].includes('blue')) {
                url = `'assets/MythicCards/blue/${firstStageCard[ranNum]}'`
                composition.first.blue = composition.first.blue - 1
                firstStageBlue.textContent = composition.first.blue
            }
            deckOpen.style.backgroundImage = `url(${url})`;
            deckOpen.style.backgroundSize = "180px 295px";
            firstStageCard.splice(ranNum, 1);
        } else if (secondStageCard.length > 0) {
                let url
                let ranNum = getRandomNum(0, secondStageCard.length);
                if (secondStageCard[ranNum].includes('green')) {
                    url = `'assets/MythicCards/green/${secondStageCard[ranNum]}'`
                    composition.second.green = composition.second.green - 1
                    secondStageGreen.textContent = composition.second.green
                } else if (secondStageCard[ranNum].includes('brown')) {
                    url = `'assets/MythicCards/brown/${secondStageCard[ranNum]}'`
                    composition.second.brown = composition.second.brown - 1
                    secondStageBrown.textContent = composition.second.brown
                } else if (secondStageCard[ranNum].includes('blue')) {
                    url = `'assets/MythicCards/blue/${secondStageCard[ranNum]}'`
                    composition.second.blue = composition.second.blue - 1
                    secondStageBlue.textContent = composition.second.blue
                }
                deckOpen.style.backgroundImage = `url(${url})`;
                deckOpen.style.backgroundSize = "180px 295px";
                secondStageCard.splice(ranNum, 1);
            } else if (thirdStageCard.length > 0) {
                    if (thirdStageCard.length === 1) {
                        deck.classList.add('first-of-deck');
                        deck.classList.remove('deck');
                    }
                    let url
                    let ranNum = getRandomNum(0, thirdStageCard.length);
                    if (thirdStageCard[ranNum].includes('green')) {
                        url = `'assets/MythicCards/green/${thirdStageCard[ranNum]}'`
                        composition.third.green = composition.third.green - 1
                        thirdStageGreen.textContent = composition.third.green
                    } else if (thirdStageCard[ranNum].includes('brown')) {
                        url = `'assets/MythicCards/brown/${thirdStageCard[ranNum]}'`
                        composition.third.brown = composition.third.brown - 1
                        thirdStageBrown.textContent = composition.third.brown
                    } else if (thirdStageCard[ranNum].includes('blue')) {
                        url = `'assets/MythicCards/blue/${thirdStageCard[ranNum]}'`
                        composition.third.blue = composition.third.blue - 1
                        thirdStageBlue.textContent = composition.third.blue
                    }
                    deckOpen.style.backgroundImage = `url(${url})`;
                    deckOpen.style.backgroundSize = "180px 295px";
                    thirdStageCard.splice(ranNum, 1);
                }
    })
}

clickCard ()