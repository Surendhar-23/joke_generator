"use script";

console.log("hello");

let joke = document.querySelector(".joke");

// joke.textContent = "hello";

document.querySelector(".joke-btn").addEventListener("click", getJoke);

async function getJoke() {
  let jokeapi = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random"
  );

  document.querySelector(".joke-text").classList.remove("hidden");
  let jokeobject = jokeapi.json();

  jokeobject.then((res) => {
    let [{ type, setup, punchline }] = res;
    document.querySelector(".setup").textContent = "";
    document.querySelector(".punch").textContent = "";

    document.querySelector(".setup").textContent = setup;
    // document.querySelector(".punch").textContent = punchline;
    // document.querySelector(".setup").style = "transform: translateX(-100%)";

    setTimeout(() => {
      document.querySelector(".punch").textContent = punchline;
    }, 3000);

    // joke.textContent = `${setup} ${punchline}`;
    console.log(setup, punchline);
  });
  // joke.textContent = jokeapi;

  // .then((res) => {
  //   res.json().then((msg) => console.log(msg[0]));
  // })
  // .catch((err) => console.log(err));
}
