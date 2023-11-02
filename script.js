const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


//Creating a function that will fetch the joke from the url and change the text content of the jokecontainer.
let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
            });
}

//Adding event listener to the get random joke button
btn.addEventListener("click",getJoke);

