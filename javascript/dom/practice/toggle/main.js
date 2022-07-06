const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

answer.style.display = 'none';

let isFaQOpen = false;

question.addEventListener('click', function(){
    if(isFaQOpen) {
        answer.style.display = 'none';
        isFaQOpen = false;
    } else {
        answer.style.display = 'block';
        isFaQOpen = true;
    }
})