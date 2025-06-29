// Typing effect for hero title
function typeWriter(element, speed = 100) {
  const fullText = "Hi, I'm Talha Ather";
  const nameStart = fullText.indexOf("Talha Ather");
  const beforeName = fullText.substring(0, nameStart);
  const namePart = fullText.substring(nameStart, nameStart + 11);
  const afterName = fullText.substring(nameStart + 11);

  element.innerHTML = "";
  element.classList.add("typing"); // Make text visible
  let i = 0;

  function type() {
    if (i < fullText.length) {
      if (i === nameStart) {
        // Start typing the name with highlight
        element.innerHTML =
          beforeName +
          '<span class="highlight-name">' +
          namePart.charAt(0) +
          "</span>";
        i++;
        setTimeout(type, speed);
      } else if (i > nameStart && i < nameStart + 5) {
        // Continue typing the name
        const nameTyped = namePart.substring(0, i - nameStart + 1);
        element.innerHTML =
          beforeName + '<span class="highlight-name">' + nameTyped + "</span>";
        i++;
        setTimeout(type, speed);
      } else if (i === nameStart + 5) {
        // Finish name and start after name
        element.innerHTML =
          beforeName +
          '<span class="highlight-name">' +
          namePart +
          "</span>" +
          afterName.charAt(0);
        i++;
        setTimeout(type, speed);
      } else {
        // Type regular characters
        if (i < nameStart) {
          element.innerHTML += fullText.charAt(i);
        } else {
          element.innerHTML =
            beforeName +
            '<span class="highlight-name">' +
            namePart +
            "</span>" +
            afterName.substring(0, i - nameStart - 4);
        }
        i++;
        setTimeout(type, speed);
      }
    }
  }
  type();
}

// Initialize typing effect when page loads
window.addEventListener("load", function () {
  const heroTitle = document.querySelector(".hero h1");
  if (heroTitle) {
    setTimeout(() => {
      typeWriter(heroTitle, 50);
    }, 500);
  }
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", function () {
  mobileMenuBtn.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  if (
    !mobileMenuBtn.contains(event.target) &&
    !navLinks.contains(event.target)
  ) {
    mobileMenuBtn.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});
