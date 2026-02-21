// Image Slideshow
var images = [
    "images\\image1.jpg",
    "images\\image2.jpg"
];

var index = 0;

function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    document.getElementById("slide").src = images[index];
}

// Form Validation
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name == "" || email == "" || password == "") {
        alert("All fields must be filled!");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return false;
    }

    document.getElementById("output").innerHTML =
        "Registration Successful! Welcome " + name;

    return false; 
}
