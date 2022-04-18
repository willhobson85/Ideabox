//Global Variables

var ideas = [];


//Query Selectors

var filterStarredIdeasBtn = document.querySelector(".filter-ideas-button");
var showStarredIdeasBtn = document.querySelector(".show-ideas-button");
var titleTextBox = document.querySelector("#idea-name-textbox");
var bodyTextBox = document.querySelector("#idea-body-textbox");
var saveButton = document.querySelector(".save-button");
var searchButton = document.querySelector(".searchbox-button");
var favoriteButton = document.querySelector(".save-star");
var unfavoriteButton = document.querySelector(".active-star")
var deleteButton = document.querySelector(".delete-x");
var wholeMiniCard = document.querySelector(".idea-grid");


//Event Listeners

saveButton.addEventListener("click", saveIdea);
wholeMiniCard.addEventListener("click", eventId);

//Data Model

function eventId(event) {
  if(event.target.className === "delete-x"){
    deleteMiniPoster();
  } else if (event.target.className === "save-star" || event.target.className === "active-star"){
    favoriteMiniPoster();
  }
}

//DOM Functions

function stopSaveButton() {
  saveButton.disable = true;
  saveButton.classList.remove("save");
  saveButton.classList.add("save-cursor");
}

function goSaveButton() {
  if(titleTextBox.value && bodyTextBox.value) {
    saveButton.disable = false;
    saveButton.classList.add("save");
    saveButton.classList.remove("save-cursor");
  } else {
    stopSaveButton();
  }
}

function saveIdea() {
  event.preventDefault();
  var currentIdea = new Idea(titleTextBox.value, bodyTextBox.value);
  if (titleTextBox.value && bodyTextBox.value) {
    ideas.unshift(currentIdea);
    makeMiniPoster(currentIdea);
    clearInput();
    goSaveButton();
  } else {
    return alert("Please tell us your ideas.")
  }
}

function makeMiniPoster(currentIdea) {
  var savedIdeaGrid = `<article class="mini-idea" id="${currentIdea.id}"><div class="mini-header"><img class="save-star" src="./assets/star.svg"><img class="active-star hidden" src="./assets/star-active.svg"><img class="delete-x" src="./assets/delete.svg"></div><div class="mini-body"><h3>${currentIdea.title}</h3><p>${currentIdea.body}</p></div><div class="mini-footer"><img src="./assets/comment.svg"><h4>Comment</h4></div></article>`;
    wholeMiniCard.innerHTML += savedIdeaGrid;
    return savedIdeaGrid;
}

function deleteMiniPoster() {
  if (event.target.className === "delete-x") {
    var miniPoster = event.target.closest(".mini-idea");
    var index = ideas.findIndex(idea => idea.id === miniPoster.id)
      ideas.splice(index, 1);
      miniPoster.remove()
  }
}

function favoriteMiniPoster() {
  var miniPosterItem = event.target.closest(".mini-idea");
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === miniPosterItem.id) {
      ideas[i].updateIdea();
    }
      miniPosterItem.querySelector(".save-star").classList.toggle("hidden");
      miniPosterItem.querySelector(".active-star").classList.toggle("hidden");
    }
}

function clearInput() {
  titleTextBox.value = "";
  bodyTextBox.value = "";
}
