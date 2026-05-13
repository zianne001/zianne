function buyItem(itemName) {
    alert("Kamu membeli: " + itemName);
}
function registerUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thanks for registering, " + name + "!");

    window.location.href = "index.html.html";
}