let button = document.querySelector(".btn");
let UL = document.querySelector(".myUl");

//Contact Form
let contactForm = document.querySelector(".contact-form");

window.onload = function () { 
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        emailjs.sendForm("service_1vmoafk", "template_v2qs5qi", e.target)
            .then(function () {
                alert("Email ist geschickt! Danke! Ich werde mich bald zurück melden");
            }, function (error) {
                alert(error);
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
