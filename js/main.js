 const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);

      function handleSubmit(event) {
        event.preventDefault();

        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`);
 }