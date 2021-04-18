const API_URL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err && err.response && err.response.status == 404) {
      createErrorCard("O usuario não foi encontrado!");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios.get(
      API_URL + username + "/repos?sort=created"
    );

    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problema ao carregar os repos!");
  }
}

function createUserCard(user) {
  const cardHTML = ` 
  <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio}</p>

          <ul>
            <li>
            ${user.followers}
              <strong>Seguindo</strong>
            </li>
            <li>
            ${user.following}
              <strong>Seguidores</strong>
            </li>
            <li>
            ${user.public_repos}
              <strong>Repositorios</strong>
            </li>
          </ul>

          <div id="repos"></div>
        </div>
      </div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="card"> 
      <h1>${message}</h1>
    </div>
  `;
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");

    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_black";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
