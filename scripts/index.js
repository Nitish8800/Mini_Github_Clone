import navbar from '../components/navbar.js';
import { getRepos, appendRepos } from './searchRepos.js';
import { getUsers, appendUsers } from './searchUsers.js';

document.querySelector("#nav").innerHTML = navbar();

var result = document.getElementById("results");
let type = document.getElementById("searchBox");
type.addEventListener("keyup", searchInput);
var bgImg = document.getElementById("backgroundImage");
document.getElementById("repo").addEventListener("click", searchRepos);
document.getElementById("user").addEventListener("click", searchUsers);

function searchInput(event) {
    if (type.value == "") {
        document.querySelector(".dropdown-content").style.display = "none";
    } else {
        document.querySelector(".dropdown-content").style.display = "block";
        document.getElementById("repo").textContent = `Search "${type.value}" in Repositories`;
        document.getElementById("user").textContent = `Search "${type.value}" in Users`;
    }
    if (event.key === "Enter") {
        searchRepos();
    }
}


async function searchRepos() {
    bgImg.style.display = "none";
    result.textContent = "Loading repos..";
    let search = type.value;
    type.value = "";
    document.querySelector(".dropdown-content").style.display = "none";
    let response = await getRepos(search);
    appendRepos(response, result);
}



async function searchUsers() {
    bgImg.style.display = "none";
    result.textContent = "Loading users..";
    let search = type.value;
    type.value = "";
    document.querySelector(".dropdown-content").style.display = "none";
    let response = await getUsers(search);
    appendUsers(response, result);
}