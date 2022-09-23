


document.getElementById("submit").addEventListener("submit", (event) => {
    console.log("Hello")
    event.preventDefault()
    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;

    console.log(country);

    let obj = {
        name, image, email, country
    };

    localStorage.setItem("user", JSON.stringify(obj))
    console.log(obj);
})