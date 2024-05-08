// The user clicks an element //
const elementOne = document.getElementById('logo');
elementOne.addEventListener('click', changeLogo);

function changeLogo() {
  console.log('The element was clicked!');
};

// The user double clicks an element //
const elementTwo = document.getElementById('card-one');
elementTwo.addEventListener('dblclick', doubleClick);

function doubleClick() {
  console.log('The element was double clicked!');
};

// The user hovers their mouse over an element //
const elementThree = document.getElementById('card-two');
elementThree.addEventListener('mouseover', mouseOver);

function mouseOver() {
  console.log("Mr.Stark, I don't feel so good");
};

elementThree.addEventListener('mouseover', function (event) {
  // Add the 'hidden' class to the card when the mouse hovers over it
  elementThree.classList.add('hidden');
});

elementThree.addEventListener('mouseout', function (event) {
  // Remove the 'hidden' class from the card when the mouse moves away from it
  elementThree.classList.remove('hidden');
});