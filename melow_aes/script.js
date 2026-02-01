// Toggle nav styling when hero is in view
const heroSection = document.querySelector(".wax-hero");

if (heroSection) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add("on-hero");
        } else {
          document.body.classList.remove("on-hero");
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(heroSection);
}

// Simple placeholder for the hamburger menu toggle
const menuButton = document.querySelector(".wax-menu-toggle");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    alert("Open waxing studio navigation drawer here.");
  });
}
// When the footer is visible, switch global nav text to dark
const footer = document.getElementById("wax-footer");

if (footer) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add("on-footer");
        } else {
          document.body.classList.remove("on-footer");
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(footer);
}
// Toggle nav style when the services section is visible
const servicesSection = document.getElementById("services");

if (servicesSection) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add("on-services");
        } else {
          document.body.classList.remove("on-services");
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(servicesSection);
}
// Toggle nav styling when the booking/contact band is visible
const bookingContactSection = document.getElementById("booking-contact");

if (bookingContactSection) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add("on-booking-contact");
        } else {
          document.body.classList.remove("on-booking-contact");
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(bookingContactSection);
}
// Toggle nav style when Instagram strip is visible
const socialStrip = document.getElementById("social-strip");

if (socialStrip) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add("on-social-strip");
        } else {
          document.body.classList.remove("on-social-strip");
        }
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(socialStrip);
}
