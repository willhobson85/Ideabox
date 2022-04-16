
var filterStarredIdeasBtn = document.querySelector(".filter-ideas-button");
var showStarredIdeasBtn = document.querySelector(".show-ideas-button");
var titleTextbox = document.querySelector(".idea-name-textbox");
var bodyTextbox = document.querySelector(".idea-body-textbox");
var saveButton = document.querySelector(".save-button");
var searchButton = document.querySelector(".searchbox-button");
var favoriteButton = document.querySelector(".save-star");
var unfavoriteButton = document.querySelector(".active-star")
var deleteButton = document.querySelector(".delete-x");
// var commentButton = document.querySelector("./assets/comment.svg");

var ideas = [];

// filterStarredIdeasBtn.addEventListener("click", );
// showStarredIdeasBtn.addEventListener("click", );
saveButton.addEventListener("click", saveIdea);
// searchButton.addEventListener("click", );
// favoriteButton.addEventListener("click", );
// deleteButton.addEventListener("click", );
// commentButton.addEventListener("click", );


function saveIdea() {
  event.preventDefault();
  var idea = new Idea(title.value, body.value);
  if (title.value && body.value) {
    ideas.unshift(idea);
    // makeMiniPoster(idea);
    // clearInput();
  }else {
  return alert("Please tell us your ideas.")
  }
}

function saveIdea() {
  event.preventDefault();
  var idea = new Idea(titleTextbox.value, bodyTextbox.value);
    if (titleTextbox.value && bodyTextbox.value) {
      ideas.unshift(idea);
      makeMiniPoster();
      // clearInput();
    } else {
      return alert("Please tell us your ideas.")
  }
}

function makeMiniPoster(idea) {
  var savedIdeaGrid = document.querySelector(".idea-grid");
    savedIdeaGrid.innerHTML = '';
  for (var i = 0; i < ideas.length; i++) {
    ideaBox.innerHTML += `<article class='mini-idea' id=${ideas[i].id}><div class="mini-header"><img class="save-star" src="./assets/star.svg"><img class="active-star hidden" src="./assets/star-active.svg"><img class="delete-x" src="./assets/delete.svg"></div><div class="mini-body"><h3>${ideas[i].title}</h3><p>${ideas[i].body}</p></div><div class="mini-footer"><img src="./assets/comment.svg"><h4>Comment</h4></div></article>`;
  console.log(ideas.id);}
}

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
