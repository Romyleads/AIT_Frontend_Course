 const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModal');
    const form = modal.querySelector('form');
    const successMessage = document.getElementById('form-success');

    openModalBtn.addEventListener('click', () => {
      modal.classList.add('show');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    document.addEventListener('click', (e) => {
      if (modal.classList.contains('show') && !modalContent.contains(e.target) && e.target !== openModalBtn) {
        modal.classList.remove('show');
      }
    });

    form.addEventListener('submit', (e) => {
  e.preventDefault();

  const rocket = form.querySelector('.rocket-icon');
  rocket.style.transform = 'translate(500px, -500px) scale(2) rotate(-40deg)';
  rocket.style.opacity = '0';

  const formData = new FormData();
  formData.append('name', document.getElementById('name').value);
  formData.append('email', document.getElementById('email').value);
  formData.append('message', document.getElementById('message').value);
  formData.append('topic', document.getElementById('topic').value); 

  fetch('/api/send.php', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (!response.ok) throw new Error("Server error");
      return response.text();
    })
    .then(text => {
      if (text.trim() === "OK") {
        successMessage.style.display = 'block';
        form.style.display = 'none';
        setTimeout(() => {
          modal.classList.remove('show');
          rocket.style.transform = 'none';
          rocket.style.opacity = '1';
          successMessage.style.display = 'none';
          form.style.display = 'block';
          form.reset();
        }, 3000);
      } else {
        alert("Server response: " + text);
        rocket.style.transform = 'none';
        rocket.style.opacity = '1';
      }
    })
    .catch(error => {
      alert("Sending failed: " + error.message);
      rocket.style.transform = 'none';
      rocket.style.opacity = '1';
    });
    setTimeout(() => {
      successMessage.style.display = 'block';
      form.style.display = 'none';
      setTimeout(() => {
        modal.classList.remove('show');
        rocket.style.transform = 'none';
        rocket.style.opacity = '1';
        successMessage.style.display = 'none';
        form.style.display = 'block';
        form.reset();
      }, 3000);
    }, 700);
});
