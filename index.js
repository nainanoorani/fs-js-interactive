console.log("hello world")

//Step 1: define what you're getting
const message = document.querySelector('#message');
const inputField = document.querySelector('input');
const inputBtn = document.querySelector('button');
const formElement = document.querySelector('form');

//Step 2: callback functions
function addMovie(event){

    event.preventDefault(); //prevent data loss on button click page refresh

    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value; //pay attention to value when using inputs
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);

    //add a delete button for every movie
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent ='X';
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
    

    const biggerList = document.querySelector('ul');
    biggerList.appendChild(movie);

    inputField.value=''; //set initial value to empty string 
}

function deleteMovie(event){
event.target.parentNode.remove();
message.textContent='Movie deleted!'
}

function crossOffMovie(event){
    event.target.classList.toggle(['checked'])
    if(event.target.classList.contains('checked')){
        message.textContent='Movie watched!'
    }else{
        message.textContent='Movie added back!'
    }
}

//Step 3: changing the elements

inputBtn.addEventListener("click", addMovie);
