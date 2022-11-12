let modal = document.getElementById("myModal");

let imgOne = document.getElementById("projectOne");
let imgTwo = document.getElementById("projectTwo");
let imgThree = document.getElementById("projectThree");
let imgFour = document.getElementById("projectFour");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

imgOne.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

imgTwo.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

imgThree.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

imgFour.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
