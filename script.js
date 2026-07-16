// Smooth reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});


// Typing Effect
const text = "Cloud Aspirant ☁️";
const heading = document.querySelector(".hero h2");

heading.textContent = "";

let i = 0;

function typeEffect() {

    if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 90);
    }
}

window.onload = () => {
    typeEffect();
};


// Contact Form + Azure Function
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {

        const response = await fetch("/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name,
                email,
                message
            })

        });


        const result = await response.json();

        alert(result.message);

        form.reset();


    } catch (error) {

        alert("Something went wrong. Please try again.");

        console.error(error);

    }

});


// Back To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#0078D4";
topButton.style.color = "#fff";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.fontSize = "20px";
topButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});