const hexNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const BodyBcg = document.querySelector('body');
const Btnbtn = document.querySelector('.colorBtn');
const hexNam = document.querySelector('.hex');

Btnbtn.addEventListener('click',changeColor);

function changeColor() {
    let hexCol = '#';
    for(i=0; i<6; i++) {
        let Random = Math.floor(Math.random() * hexNumber.length);
        hexCol += hexNumber[Random];
    }
    

    BodyBcg.style.backgroundColor = hexCol
    hexNam.innerHTML = hexCol;
}