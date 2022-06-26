
const root = document.getElementById('root');

let count = 0;

const removeChild = function(e){
    const target = e.target;
    const isChild = target.getAttribute('data-child'); //why boolean?
        if(isChild)  {
            target.remove()
        }
};

const btn = document.createElement('button'); // parent div
btn.innerText = 'Click Me'; // created button
root.append(btn); // now in DOM

const parentDiv = document.createElement('div');
root.append(parentDiv)
parentDiv.addEventListener('click', removeChild);
    

const renderDiv = function(){ // no reason to capture click event, not needed
    count++; //increases number being outputed
    const div = document.createElement('div');
    div.innerText = count; //output numbers instead of text
    div.style.backgroundColor = '#ddd'; //
    div.style.cursor = 'pointer';
    div.style.fontSize = '2rem';
    div.style.margin = '10px 0';
    div.style.padding = '20px';
    div.setAttribute('data-child',count)
    parentDiv.append(div)
};


btn.addEventListener('click',renderDiv)

//const btn = document.createElement('button');
// btn.innerText = 'Click Me';
// btn.addEventListener('click',renderDiv)
// root.append(btn);
