let button = document.querySelector(".btn"); //TodoList Submit button
let UL = document.querySelector(".myUl"); //Ul in TodoList html

//Contact Form
let contactForm = document.querySelector(".contact-form");

// ContactForm algo
window.onload = function () { 
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        emailjs.sendForm("service_1vmoafk", "template_v2qs5qi", e.target)
            .then(function () {
                Swal.fire({
                    title: "Email ist geschickt!",
                    text: "Email ist geschickt! Danke! Ich werde mich bald zurück melden",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                }).then(() => {
                    contactForm.reset();
                });
            }, function (error) {
                Swal.fire({
                    title: "Oops...",
                    text: "Etwas war nicht richtig. Versuchen Sie bitte nochmal",
                    icon: "error",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                });
            });
    });
}

button.addEventListener("click", () => {
    // alert("Button is clicked!")
    let extractedText = document.querySelector(".form-control").value;
    if (extractedText == "") {
        alert("Empty field is not allowed!")
    }
    else {
        //alert(extractedText);
    let TextNode = document.createTextNode(extractedText);
    let listItem = document.createElement("li");
    listItem.appendChild(TextNode);
    UL.appendChild(listItem);

    listItem.classList.add("noDot") // in CSS NoDot specified

    UL.appendChild(listItem);

    document.querySelector(".form-control").value = ""; // delete what i wrote before 
    }
})
