let box1 = document.querySelector(".d1");
let box2 = document.querySelector(".d2");
let box3 = document.querySelector(".d3");
let box4 = document.querySelector(".d4");
let box5 = document.querySelector(".d5");
let box6 = document.querySelector(".d6");
let box7 = document.querySelector(".d7");
let box8 = document.querySelector(".d8");
let box9 = document.querySelector(".d9");

let box1v;
let box2v;
let box3v;
let box4v;
let box5v;
let box6v;
let box7v;
let box8v;
let box9v;

let turn = "x";

box1.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }

  box1v = turn;

  box1.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};

box2.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  box2v = turn;
  box2.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};

box3.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  box3v = turn;

  box3.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};

box4.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  box4v = turn;
  box4.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};

box5.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  box5v = turn;
  box5.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};

box6.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  box6v = turn;
  box6.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};
box7.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  box7v = turn;
  box7.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};

box8.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  box8v = turn;
  box8.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};

box9.onclick = () => {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
  box9v = turn;
  box9.innerHTML = "<h1>" + turn + "</h1>";
  checkWinner();
};

function checkWinner() {
  if (box1v == "x" && box2v == "x" && box3v == "x") {
    alert("winner is ❌");
  } else if (box4v == "x" && box5v == "x" && box6v == "x") {
    alert("winner is ❌");
  } else if (box7v == "x" && box8v == "x" && box9v == "x") {
    alert("the winner is ❌");
  } else if (box1v == "x" && box4v == "x" && box7v == "x") {
    alert("the winner is ❌");
  } else if (box2v == "x" && box5v == "x" && box8v == "x") {
    alert("the winner is ❌");
  } else if (box3v == "x" && box6v == "x" && box9v == "x") {
    alert("the winner is ❌");
  } else if (box1v == "x" && box5v == "x" && box9v == "x") {
    alert("the winner is ❌");
  } else if (box3v == "x" && box5v == "x" && box7v == "x") {
    alert("the winner is ❌");
  }
  if (box1v == "o" && box2v == "o" && box3v == "o") {
    alert("winner is 🅾");
  } else if (box4v == "o" && box5v == "o" && box6v == "o") {
    alert("winner is 🅾");
  } else if (box7v == "o" && box8v == "o" && box9v == "o") {
    alert("the winner is 🅾");
  } else if (box1v == "o" && box4v == "o" && box7v == "o") {
    alert("the winner is 🅾");
  } else if (box2v == "o" && box5v == "o" && box8v == "o") {
    alert("the winner is 🅾");
  } else if (box3v == "o" && box6v == "o" && box9v == "o") {
    alert("the winner is 🅾");
  } else if (box1v == "o" && box5v == "o" && box9v == "o") {
    alert("the winner is 🅾");
  } else if (box3v == "o" && box5v == "o" && box7v == "o") {
    alert("the winner is 🅾");
  }
}
