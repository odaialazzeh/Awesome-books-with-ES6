const Data = JSON.parse(localStorage.getItem('collection'));
const idDiv = document.getElementsByTagName('button');
const buttonPressed = (e) => {
  const elementId = e.target.id;
  document.getElementById(elementId).style.display = 'none';
  Data.splice(elementId, 1);
  localStorage.setItem('collection', JSON.stringify(Data));
  window.location.reload();
};

for (const button of idDiv) {
  button.addEventListener('click', (buttonPressed));
}

export default buttonPressed;