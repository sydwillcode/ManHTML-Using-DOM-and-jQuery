document.addEventListener("DOMContentLoaded", function () {
  let para = document.querySelectorAll("p");
  //Number 1
  let button = document.createElement("button");
  let buttonText = document.createTextNode("Click Here");
  button.appendChild(buttonText);
  para[0].appendChild(button);
  button.addEventListener("click", function () {
    alert("Hey there, friend!");
  });

  //Number 2
  let text = document.querySelector("#text");
  let button2 = document.querySelector("#message");
  button2.addEventListener("click", function () {
    alert(text.value);
  });
  //Number 3
  let div = document.getElementById("newDiv");

  div.addEventListener("mouseenter", function () {
    div.style.backgroundColor = "pink";
    div.addEventListener("mouseleave", function () {
      div.style.backgroundColor = "initial";
    });
  });

  //Number 4
  let paragraph = document.createElement("p");
  let paraText = document.createTextNode("This is some text in a paragraph");
  paragraph.appendChild(paraText);
  para[4].appendChild(paragraph);

  function randColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    this.style.color = `rgb(${r},${g},${b})`;
  }

  paragraph.addEventListener("click", randColor);

  //Number 5
  let emptyDiv = document.createElement("div");
  emptyDiv.classList.add("emptyDiv");
  para[5].appendChild(emptyDiv);

  let button3 = document.createElement("button");
  let button3Text = document.createTextNode("My Name");
  button3.appendChild(button3Text);
  emptyDiv.appendChild(button3);

  button3.addEventListener("click", function () {
    let span = document.createElement("span");
    emptyDiv.appendChild(span);
    span.textContent = "Sydni ";
  });

  //Number 6
  let friends = [
    "Tasha",
    "Autumn",
    "Cleveland",
    "Nikki",
    "Henry",
    "Brandon",
    "James",
    "Hafeeza",
    "Bryan",
    "Derrick",
  ];
  let i = 0;
  let btn = document.getElementById("btn");
  btn.addEventListener("click", addListItem);

  function addListItem() {
    if (i < friends.length) {
      let list = document.getElementById("list");
      let friend = friends[i];
      let listItem = document.createElement('li');
      listItem.textContent = friend;
      list.appendChild(listItem);
      i++;
    }
  }

});
