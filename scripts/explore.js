import { appendRepos } from './searchRepos.js';

var bg = document.getElementById("backgroundImage");
var result = document.getElementById("results");

result.textContent = "Loading..";
bg.style.display = "none";

async function show() {
    try {
        let response = await fetch("https://api.github.com/repositories");
        let data = await response.json();
        appendRepos(data, result);
    } catch (err) {
        console.log(err);
    }
}

show();