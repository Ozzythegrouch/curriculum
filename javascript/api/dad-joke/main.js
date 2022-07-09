const jokeButton = document.querySelector('.joke-button');
const jokeContainer = document.querySelector('.joke-container');
const likesCounter = document.querySelector('.likes-counter');
const booCounter = document.querySelector('.boo-counter')


const likesButton = document.createElement('button')
const booButton = document.createElement('button')


likesButton.innerText = "Knee Slapper"
booButton.innerText = "Boo"

likesButton.classList.add("likes-button");
booButton.classList.add("boo-button");



const getJoke = async () => {
    const apiData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept' : 'application/json'
        }
    })
    const jsonData = await apiData.json()
    const joke = jsonData.joke
    jokeContainer.innerText = joke
    jokeButton.style.backgroundColor = 'aqua';

    jokeContainer.append(likesButton)
    jokeContainer.append(booButton)

}

let loveCount = 0
let booCount = 0

likesButton.addEventListener("click",()=>{
    loveCount++;
    likesCounter.innerHTML = loveCount;
    jokeContainer.innerText = ''
    jokeButton.style.backgroundColor = '#FCFCFC';
  
});


booButton.addEventListener("click",()=>{
    booCount++;
    booCounter.innerHTML = booCount;
    jokeContainer.innerText = ''
    jokeButton.style.backgroundColor = '#FCFCFC';
});



jokeButton.addEventListener('click', getJoke)