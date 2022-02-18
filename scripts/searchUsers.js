async function getUsers(input) {
    try {
        let respone = await fetch(`https://api.github.com/search/users?q=${input}`);
        let data = await respone.json();
        return data.items;
    } catch (err) {
        console.log(err);
    }
}

async function appendUsers(data, location) {
    location.textContent = "";
    data.forEach(({ login, avatar_url, html_url }) => {
        let img = document.createElement("img");
        img.src = avatar_url;
        let a = document.createElement("a");
        a.href = html_url;
        a.textContent = login;
        let div = document.createElement("div");
        div.className = "flex";
        div.append(img, a);
        location.append(div);
    });
}

export { getUsers, appendUsers };