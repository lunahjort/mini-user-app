const namn = document.getElementById("namn");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

async function hämtaAnvändare() {
    try {
        const svar = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const användare = await svar.json();

        namn.textContent = användare.name;
        username.textContent = användare.username;
        email.textContent = användare.email;
        phone.textContent = användare.phone;
    } catch (fel) {
        console.log("Något gick fel:", fel);
    }
}

knapp.addEventListener("click", hämtaAnvändare);