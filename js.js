const bodyBcg = document.querySelector('body');
const Btn = document.querySelector('.colorBtn');
const Colors = ['yellow','red','blue','green'];
const Color = ['green', 'blue', 'red','yellow'];

Btn.addEventListener('click', ChangeColor);

function ChangeColor() {
    let ranDom = Math.floor(Math.random()*Colors.length)
    let ranDo = Math.floor(Math.random()*Colors.length)
    bodyBcg.style.backgroundColor = Colors[ranDom];
    Btn.style.backgroundColor = Colors[ranDo];
}