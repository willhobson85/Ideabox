<<<<<<< HEAD
// var filterStarredIdeasBtn = document.querySelector(".filter-ideas-button");
// var showStarredIdeasBtn = document.querySelector(".show-ideas-button");
// var titleTextbox = document.querySelector(".idea-name-textbox");
// var bodyTextbox = document.querySelector(".idea-body-textbox");
// var saveButton = document.querySelector(".save-button");
// var searchButton = document.querySelector(".searchbox-button");
// var favoriteButton = document.querySelector(".favorite-button");
// var deleteButton = document.querySelector(".delete-button");
// var commentButton = document.querySelector(".comment-button");
//
//
// filterStarredIdeasBtn.addEventListener("click", );
// showStarredIdeasBtn.addEventListener("click", );
// saveButton.addEventListener("click", );
// searchButton.addEventListener("click", );
// favoriteButton.addEventListener("click", );
// deleteButton.addEventListener("click", );
// commentButton.addEventListener("click", );
=======
var filterStarredIdeasBtn = document.querySelector(".filter-ideas-button");
var showStarredIdeasBtn = document.querySelector(".show-ideas-button");
var titleTextbox = document.querySelector(".idea-name-textbox");
var bodyTextbox = document.querySelector(".idea-body-textbox");
var saveButton = document.querySelector(".save-button");
var searchButton = document.querySelector(".searchbox-button");
var favoriteButton = document.querySelector(".save-star");
var unfavoriteButton = document.querySelector(".active-star")
var deleteButton = document.querySelector(".delete-x");
var commentButton = document.querySelector("./assets/comment.svg");

var ideas = [];

filterStarredIdeasBtn.addEventListener("click", );
showStarredIdeasBtn.addEventListener("click", );
saveButton.addEventListener("click", );
searchButton.addEventListener("click", );
favoriteButton.addEventListener("click", );
deleteButton.addEventListener("click", );
commentButton.addEventListener("click", );
<<<<<<< HEAD
>>>>>>> ed1887ef97b293cf011158e48b6da2f526c67c42
=======

function saveIdea() {
  event.preventDefault();
  var idea = new Idea(titleTextBox.value, bodyTextBox.value);
  if (titleTextBox.value && bodyTextBox.value) {
    ideas.unshift(idea);
    // makeMiniPoster(idea);
    // clearInput();
  }else {
  return alert("Please tell us your ideas.")
  }
}
>>>>>>> 775f3bfaec07c115a3fd06de9a4a15ffd7fa2685
