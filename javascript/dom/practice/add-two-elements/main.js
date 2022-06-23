const root = document.getElementById('root') //have to cache first

const heading = document.createElement('h1'); // create <h1>
heading.innerText = 'My Trip to France'; // add text to <h1>
heading.style.fontFamily = 'sans-serif'; //changes font
heading.style.color = '#444'; //changes color
root.append(heading); //add to DOM; append says go to, heading is location

const description = document.createElement('p'); 
description.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cum facere quibusdam cumque quis modi ipsum dolorum error pariatur optio esse sed voluptatibus quisquam possimus consequatur sequi libero dicta, inventore ducimus magnam velit debitis. Hic autem doloribus esse doloremque aspernatur! Delectus ratione iste corrupti ea dolorem recusandae mollitia repudiandae cum?';
description.style.lineage = '1.35rem'//increases spacing between lines
root.append(description);

