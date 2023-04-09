const inputName = document.querySelector("#name");
const register = document.querySelector("#register");
const clear = document.querySelector("#clear");
const tasks = document.querySelector("#tasks");

let arr = [];

function keyG() {
  return arr.length;
}

function loadTasks() {
  tasks.innerHTML = "";
  arr.forEach((e) => {
    const item = JSON.parse(e);
    tasks.insertAdjacentHTML("beforeend", `<div><p>${item.value}</p></div>`);
  });
}

if (localStorage.getItem("array")) {
  arr = JSON.parse(localStorage.getItem("array"));
  loadTasks();
}

register.addEventListener("click", () => {
  const inputValue = inputName.value.trim(); // Remover espaços em branco no início e no final

  // Verificar se o valor já existe no array
  const isDuplicate = arr.some((e) => JSON.parse(e).value === inputValue);

  if (!inputValue) {
    alert("Digite um valor para adicionar.");
    return;
  }

  if (isDuplicate) {
    alert("Este valor já existe. Tente novamente com outra descrição.");
    return;
  }

  const objItem = {
    key: keyG(),
    value: inputValue,
  };
  arr.push(JSON.stringify(objItem));

  tasks.innerHTML = "";
  arr.forEach((e) => {
    const item = JSON.parse(e);
    tasks.insertAdjacentHTML("beforeend", `<div><p>${item.value}</p></div>`);
  });

  localStorage.setItem("array", JSON.stringify(arr));
});

clear.addEventListener("click", () => {
  arr = [];
  localStorage.clear();
  tasks.innerHTML = "";
});
