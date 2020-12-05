function buttonClicked(event) {
  var b = event.target.innerHTML;
  console.log(b);
}

var buttons = document.querySelectorAll("button");

for (var i = 0; i <= 17; i++) {
  var button = buttons[i];
  button.onclick = buttonClicked;
}
