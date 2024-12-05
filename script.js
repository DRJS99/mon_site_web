document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();  

    
    const name = document.querySelector('input[type="text"]');
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');

    
    if (name.value === "" || email.value === "" || message.value === "") {
        alert("Veuillez remplir tous les champs !");
    } else {
        alert("Merci pour votre message !");
    }


});
