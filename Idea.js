class Idea {
  constructor({id, title, body, star}) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
  }

//method needs to push class to storage array
//saveToStorage() {


// }

//method needs to target idea by id and remove from storage array
// deleteFromStorage {


// }
// Need to update below code to target by id.
updateIdea(this.star) {
  if (this.star === false) {
    this.star = true;
  } else (this.star === true) {
    this.star = false;
  }
}

}
