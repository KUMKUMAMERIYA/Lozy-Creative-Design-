// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// WhatsApp number
const whatsappNumber = "917878070234";

// Order buttons
document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const packageName = button.getAttribute("data-package");
    const message = `Hello, I want to order the ${packageName} package from LOZY CREATIVE STUDIO.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});

// Contact form
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;

    if (name === "" || email === "" || msg === "") {
      alert("Please fill all fields");
      return;
    }

    const finalMessage = `Hello, my name is ${name}. My email is ${email}. Message: ${msg}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(url, "_blank");
  });
}

// Floating WhatsApp button
const whatsappBtn = document.getElementById("whatsapp-float");

if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const url = `https://wa.me/${whatsappNumber}?text=Hello, I need graphic design services from LOZY CREATIVE STUDIO.`
      ;Name:, Address, graphic details:, please confirm: 
    window.open(url, "_blank");
  });
                               }
