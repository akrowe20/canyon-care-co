const CONTACT_EMAIL = "akrowe20@gmail.com";

document.querySelectorAll("[data-contact-email]").forEach((link) => {
  link.textContent = CONTACT_EMAIL;
  link.href = `mailto:${CONTACT_EMAIL}`;
});
document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = `Service request: ${data.get("service") || "Canyon Care"}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone") || "Not provided"}`,
    `Neighborhood / road: ${data.get("location") || "Not provided"}`,
    `Service: ${data.get("service")}`,
    `Start date: ${data.get("date") || "Flexible / not provided"}`,
    `Frequency: ${data.get("frequency")}`,
    `Prefers phone/text: ${data.get("callback") ? "Yes" : "No"}`,
    "",
    "Details:",
    data.get("details")
  ].join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("form-status").textContent = "Your email app should open with the request filled in.";
});
