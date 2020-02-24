// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {}

let header = document.createElement('div');
header.classList.add('header');

let spanOne = document.createElement('span');
spanOne.classList.add('date');
spanOne.textContent = 'SMARCH 28, 2019';

let h1 = document.createElement('h1');
h1.textContent = 'LambdaTimes';

let spanTwo = document.createElement('span')
spanTwo.classList.add('temp');
spanTwo.textContent = '98°';



