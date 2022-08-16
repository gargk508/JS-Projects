const apiURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(username) {
  try {
    const res = await axios(apiURL + username);
    displayUser(res.data);
    getRepos(username);
  } catch (err) {
    displayErr();
  }
}

async function getRepos(username) {
  const res = await axios(apiURL + username + "/repos?sort=created");
  console.log(res.data);
  addRepos(res.data);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

function displayUser(user) {
  main.innerHTML = `<div class="card">
  <div class="user_img">
    <img src="${user.avatar_url}" alt="${user.name}" />
  </div>
  <div class="user_info">
    <h2>${user.name}</h2>
    <p>${user.bio === null ? "" : user.bio}</p>

    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>

    <div class="repos">
    </div>
  </div>
</div>`;
}

function displayErr() {
  main.innerHTML = `<div class="card">
      <h1>No Profile with this UserName</h1>
  </div>`;
}

function addRepos(data) {
  const repos = document.querySelector(".repos");

  data.slice(0, 5).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerText = repo.name;
    repos.appendChild(repoLink);
  });
}
