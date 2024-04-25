let jokeBtn = document.getElementById("jokeBtn");
let displayFeild = document.getElementById("displayFeild");


const dadJoke = async () => {
    const joker = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json",
        }
    });

    const dadJokeJSON = await joker.json();
    if(dadJokeJSON.status === 200){
        displayFeild.textContent = dadJokeJSON.joke;
    } else{
        displayFeild.textContent = "error";
    }
};

jokeBtn.addEventListener("click", dadJoke);

