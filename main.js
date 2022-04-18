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
// var commentButton = document.querySelector("./assets/comment.svg");

//Event Listeners

// filterStarredIdeasBtn.addEventListener("click", );
// showStarredIdeasBtn.addEventListener("click", );
saveButton.addEventListener("click", saveIdea);
// searchButton.addEventListener("click", );
// favoriteButton.addEventListener("click", );
deleteButton.addEventListener("click", deleteMiniPoster);
// commentButton.addEventListener("click", );

//Data Model Functions




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
  console.log(currentIdea)
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

function clearInput() {
  titleTextBox.value = "";
  bodyTextBox.value = "";
}
