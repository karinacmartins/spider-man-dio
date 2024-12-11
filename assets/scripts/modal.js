// Obtenha elementos do modal
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

// Adicione evento para cada personagem
document.querySelectorAll('.character').forEach(character => {
  character.addEventListener('click', () => {
    // Obtenha o ID do personagem clicado
    const characterId = character.getAttribute('data-id');
    const characterData = characters[characterId];

    // Popule o modal com os dados do personagem
    modalTitle.textContent = characterData.title;
    modalImage.src = characterData.image;
    modalImage.alt = characterData.title;
    modalDescription.innerHTML = characterData.description;

    // Exiba o modal
    modal.style.display = 'block';
  });
});

// Feche o modal ao clicar no botão de fechar
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Feche o modal ao clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
