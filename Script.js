
function changeText() {
  const intro = document.getElementById('intro');
  intro.textContent = "Yay! The paragraph has been updated using JavaScript!";
  intro.classList.toggle("highlight");
}

function toggleElement() {
  const area = document.getElementById('dynamic-area');
  const existing = document.getElementById('new-element');

  if (existing) {
    area.removeChild(existing);
  } else {
    const newElement = document.createElement('p');
    newElement.textContent = "This new paragraph was added with JavaScript!";
    newElement.id = "new-element";
    area.appendChild(newElement);
  }
}
