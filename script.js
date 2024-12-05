// Survol des images pour afficher/cacher les tooltips
document.querySelectorAll('.tech-item').forEach(item => {
    const tooltip = item.querySelector('.tooltip'); // Récupère l'élément tooltip à l'intérieur de chaque .tech-item
    
    if (tooltip) { // Vérifie si l'élément tooltip existe
        item.addEventListener('mouseenter', () => {
            tooltip.classList.add('visible'); // Ajoute une classe pour rendre visible
        });

        item.addEventListener('mouseleave', () => {
            tooltip.classList.remove('visible'); // Supprime la classe pour cacher
        });
    }
});

// Formulaire de contact avec message de confirmation
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut
    
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex pour valider l'email

    if (name.value === "") {
        alert("Le champ nom est obligatoire !");
        return;
    }
    if (email.value === "") {
        alert("Le champ email est obligatoire !");
        return;
    }
    if (!emailPattern.test(email.value)) {
        alert("Veuillez entrer une adresse email valide !");
        return;
    }
    if (message.value === "") {
        alert("Le champ message est obligatoire !");
        return;
    }

    // Message de confirmation et réinitialisation des champs
    alert("Merci pour votre message !");
    name.value = "";
    email.value = "";
    message.value = "";
});
