const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Mensagem 1", "Mensagem 2", "Mensagem 3", "Mensagem 4"];
const types = ["info", "sucess", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.classList.add(type ? type : getRanomType());

  notif.innerHTML = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRanomType() {
  return types[Math.floor(Math.random() * types.length)];
}
