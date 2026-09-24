const CONTACT_EMAIL = "canyoncareco@gmail.com";


// --------------------------------------------------
// Direct email links
// --------------------------------------------------

document.querySelectorAll("[data-contact-email]").forEach((link) => {
  link.textContent = CONTACT_EMAIL;
  link.href = `mailto:${CONTACT_EMAIL}`;
});


// --------------------------------------------------
// Copyright year
// --------------------------------------------------

document.getElementById("year").textContent = new Date().getFullYear();


// --------------------------------------------------
// Mobile navigation
// --------------------------------------------------

const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  navToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});


nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});


// --------------------------------------------------
// Canyon Care request form
// --------------------------------------------------

const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const submitButton = form.querySelector('button[type="submit"]');


form.addEventListener("submit", async (event) => {

  // Keep the visitor on the Canyon Care website.
  event.preventDefault();

  formStatus.textContent = "";

  // Prevent accidental duplicate submissions.
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  const data = new FormData(form);


  try {

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        "Accept": "application/json"
      }
    });


    if (response.ok) {

      // Clear the completed form.
      form.reset();

      // Show confirmation without leaving the website.
      formStatus.textContent =
        "Thanks! Your request has been sent. We'll be in touch soon.";

    } else {

      const result = await response.json();

      if (result.errors) {

        formStatus.textContent = result.errors
          .map((error) => error.message)
          .join(", ");

      } else {

        formStatus.textContent =
          "Something went wrong. Please try again or email us directly.";

      }

    }

  } catch (error) {

    formStatus.textContent =
      "Something went wrong. Please try again or email us directly.";

  } finally {

    // Restore the button regardless of success or error.
    submitButton.disabled = false;
    submitButton.textContent = "Send Request";

  }

});
