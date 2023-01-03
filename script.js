const uploadButton = document.getElementById('upload-button');
const flexboxContainer = document.querySelector('.flexbox-container');

uploadButton.addEventListener('click', () => {
  const date = prompt('Enter date:');
  const title = prompt('Enter title:');
  const content = prompt('Enter content:');

  const flexboxItem = document.createElement('div');
  flexboxItem.classList.add('flexbox-item');
  flexboxItem.innerHTML = `
    <p>Date: ${date}</p>
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  flexboxContainer.appendChild(flexboxItem);
});

