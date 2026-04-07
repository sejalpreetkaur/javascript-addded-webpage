// ==========================
// DARK MODE TOGGLE
// ==========================
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  console.log("Dark mode clicked"); // DEBUG

  const isDark = document.body.classList.contains("dark-theme");
  toggleBtn.setAttribute("aria-pressed", isDark);
});

// ==========================
// FORM VALIDATION
// ==========================
const form = document.getElementById("contact-form");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  if (!validateEmail(email)) {
    errorMsg.textContent = "❌ Invalid Email!";
    return;
  }

  errorMsg.textContent = "✅ Form Submitted!";
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


// ==========================
// IMAGE MODAL
// ==========================
const images = document.querySelectorAll(".gallery-img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// Open modal
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
    modal.setAttribute("aria-hidden", "false");
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
});

// Close with ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }
});