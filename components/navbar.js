function navbar() {

    return ` 
    <div id="logo">
    <a href="./"><img width="40px" height="40px" src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"/></a>
    <div class="dropdown">
        <input type="text" id="searchBox" placeholder="Search and press enter.." />
        <div class="dropdown-content">
            <div id="repo">Search "" in Repositories</div>
            <div id="user">Search "" in Users</div>
          </div>
    </div>
    <ul>
        <li><a href="pullRequests.html">Pull requests</a></li>
        <li><a href="issues.html">Issues</a></li>
        <li><a href="marketplace.html">Marketplace</a></li>
        <li><a href="explore.html">Explore</a></li>
    </ul>
</div>
<div>
    <a href="explore.html"><img width="40px" height="40px" src="https://avatars.githubusercontent.com/u/81190422?s=40&v=4" alt="my Profile"></a>
</div>`;
}

export default navbar;