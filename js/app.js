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

// Add a keydown event listener to the document body
document.body.addEventListener('keydown', function (event) {
  // Check if the pressed key is the space key (keyCode 32) or (key ' ')
  if (event.key === ' ') {
    // Code to be executed when the space key is pressed
    console.log('The space key was pressed!');
    // You can perform any action or run any code here
  }
});
