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

var ideas = [];

// filterStarredIdeasBtn.addEventListener("click", );
// showStarredIdeasBtn.addEventListener("click", );
saveButton.addEventListener("click", saveIdea);
// searchButton.addEventListener("click", );
// favoriteButton.addEventListener("click", );
// deleteButton.addEventListener("click", );
// commentButton.addEventListener("click", );

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
  var idea = new Idea(titleTextBox.value, bodyTextBox.value);
  if (titleTextBox.value && bodyTextBox.value) {
    ideas.unshift(idea);
    makeMiniPoster(idea);
    clearInput();
    goSaveButton();
  } else {
    return alert("Please tell us your ideas.")
  }
}

function makeMiniPoster(idea) {
  var savedIdeaGrid = `<article class='mini-idea' id=${ideas.id}><div class="mini-header"><img class="save-star" src="./assets/star.svg"><img class="active-star hidden" src="./assets/star-active.svg"><img class="delete-x" src="./assets/delete.svg"></div><div class="mini-body"><h3>${ideas.title}</h3><p>${ideas.body}</p></div><div class="mini-footer"><img src="./assets/comment.svg"><h4>Comment</h4></div></article>`;
    wholeMiniCard.innerHTML += savedIdeaGrid;
    return wholeMiniCard;
}

function clearInput() {
  titleTextBox.value = "";
  bodyTextBox.value = "";
}
