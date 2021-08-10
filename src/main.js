import {
  searchByTeam,
  sortByAtoZ,
  searchBySport,
  searchByGender,
  searchByMedal
} from "./data.js";

const selectPais = document.querySelector("#pais");
const selectSport = document.querySelector("#deportes");
const selectGender = document.querySelector("#genero");
const selectMedal = document.querySelector("#medallas");
const divAthletes = document.querySelector("#athletes");

const firstPage = document.querySelector(".reseña");
const hiddenPagination = document.querySelector("#hidePagination");
const imgNoResult = document.querySelector("#root");
const pagination = document.querySelector("#pagination");

const avatar = 10;
const currentPage = 1;

document.querySelector(".button").addEventListener("click", reset);

selectPais.addEventListener("change", listenerFn)
selectSport.addEventListener("change", listenerFn)
selectGender.addEventListener("change", listenerFn)
selectMedal.addEventListener("change", listenerFn)

hideFpageBtn(false);

function listenerFn() {
  filtrar();
  hideFpageBtn(true);
}
function hideFpageBtn(ocultar) {//Depende del parametro que reciba false or true
  firstPage.hidden = ocultar;//true=queloesconda
  hiddenPagination.hidden = !ocultar;//false=quelomuestre
}
function filtrar() {
  let items = []; //determinamos el array vacio para que lo ocupe dataX cuando se hace una busqueda previa
  let pais = selectPais.value;
  let deporte = selectSport.value;
  let genero = selectGender.value;
  let medal = selectMedal.value;
  divAthletes.innerHTML = "";
  pagination.innerHTML = "";
  let selectedOptions = [];

  if (pais != "Selecciona un país") {
    selectedOptions.push("pais");
    if (selectedOptions.length == 1) {
      items = searchByTeam(items, pais, true);
    }
    items = searchByTeam(items, pais, false);
  }

  if (deporte != "Selecciona una disciplina") {
    selectedOptions.push("disciplina");
    if (selectedOptions.length == 1) {
      items = searchBySport(items, deporte, true);
    }
    items = searchBySport(items, deporte, false);
  }

  if (genero != "Selecciona el género") {
    selectedOptions.push("genero");
    if (selectedOptions.length == 1) {
      items = searchByGender(items, genero, true);
    }
    items = searchByGender(items, genero, false);
  }

  if (medal != "Selecciona una medalla") {
    selectedOptions.push("medalla");
    if (selectedOptions.length == 1) {
      items = searchByMedal(items, medal, true);
    }
    items = searchByMedal(items, medal, false);
  }
  imgNoResult.hidden = !items.length == 0;
  if (items.length > 0) {
    items = sortByAtoZ(items);
    setupPagination(items, pagination, avatar);
    DisplayList(items, divAthletes, avatar, currentPage);
  }
}

function setupPagination(items, wrapper, avatarPerPage) {
  let pageCount = Math.ceil(items.length / avatarPerPage);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }

}
function paginationButton(page, items) {
  let button = document.createElement("button");
  button.value = page;
  let currentPage = page;
  button.innerText = button.value;

  if (currentPage == page);
  button.addEventListener("click", function () {
    divAthletes.innerHTML = "";
    DisplayList(items, divAthletes, avatar, currentPage);
    buttonActive(currentPage, page, button);
    imgNoResult.hidden = true;
  });
  return button;
}
function buttonActive(currentPage, page, button) {
  currentPage == page;
  let currentBtn = document.querySelector(".pageBtn button.active");
  button.classList.add("active");
  currentBtn.classList.remove("active");
}

function DisplayList(items, divAthletes, avatarPerPage, page) {
  page--;
  let loopStart = avatarPerPage * page;
  //console.log(loopStart) me indica cuantos deportistas previos a detemrinada página tienes 
  let paginatedItems = items.slice(loopStart, loopStart + avatarPerPage);
  paginatedItems.forEach((a) =>
    divAthletes.appendChild(getElementAthletes(a))
  );
}

function getElementAthletes(atleta) {
  const divCards = document.createElement("div");
  const divInner = document.createElement("div");
  const div = document.createElement("div");
  const divContainerImage = document.createElement("div");
  let img = document.createElement("IMG");
  const divContainerMedal = document.createElement("div");
  let imgMedal = document.createElement("IMG");
  const aName = document.createElement("p");
  const aNameBack = document.createElement("div");
  const aSport = document.createElement("p");
  const aTeam = document.createElement("p");
  const divBack = document.createElement("div");
  
  aName.innerHTML = atleta.name;
  aNameBack.innerHTML = atleta.name;

  divCards.classList.add("card");
  divInner.classList.add("card-inner");
  div.classList.add("collection");
  divContainerImage.classList.add("circular_landscape");
  img.src = "images/" + atleta.gender + ".png";
  divContainerMedal.classList.add("circularMedal");
  imgMedal.src = "images/" + atleta.medal + ".png";
  aName.classList.add("name_athlet");
  aNameBack.classList.add("nameBack");
  aSport.classList.add("sport");
  aTeam.classList.add("team_athlet");
  divBack.classList.add("back");

  divContainerImage.appendChild(img);
  div.appendChild(divContainerImage);
  divContainerMedal.appendChild(imgMedal);
  div.appendChild(divContainerMedal);

  div.appendChild(aName);
  div.appendChild(getFormatStrong("País: ", atleta.team + " (" + atleta.noc + ")"));
  div.appendChild(getFormatStrong("Deporte: ", atleta.sport));

  divBack.appendChild(aNameBack);
  divBack.appendChild(getFormatStrong("Evento: ", atleta.event));
  divBack.appendChild(getFormatStrong("Edad: ", atleta.age + " años"));
  divBack.appendChild(getFormatStrong("Peso: ", atleta.weight + " kg"));
  divBack.appendChild(getFormatStrong("Estatura: ", atleta.height + " cm"));

  divInner.appendChild(div);
  divInner.appendChild(divBack);
  divCards.appendChild(divInner);
  return divCards;
}
function reset() {
  selectPais.value = "Selecciona un país";
  selectSport.value = "Selecciona una disciplina";
  selectGender.value = "Selecciona el género";
  selectMedal.value = "Selecciona una medalla";
  divAthletes.innerHTML = "";
  hideFpageBtn(false);
  imgNoResult.hidden = true;
}

function getFormatStrong(key, value) {
  const formatStrong = document.createElement("span");
  const formatLight = document.createElement("span");

  formatStrong.classList.add("a-span");
  formatLight.classList.add("strong");

  formatStrong.innerHTML = key;
  formatLight.innerHTML = value;
  
  formatStrong.appendChild(formatLight);
  return formatStrong;
}
