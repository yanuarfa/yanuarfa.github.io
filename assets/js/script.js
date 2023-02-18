const header = document.querySelector("header");
const h1 = document.querySelector("header nav h1");
const li = document.querySelectorAll("header nav ul li:not(.hamburger-toggle)");
const ul = document.querySelector("header nav ul");
const darkModeToggle = document.querySelector("#dn");
const heroImage = document.querySelector("#hero_image");

let dark = localStorage.getItem("dark-mode");

const categories = ["Mountain", "Computer", "Beach", "Sky"];

let elements = "";

categories.map((image, i) => {
  elements += `
  <div class="item" ondblclick=doubleClick();>
                  <span>&#10084;</span>
                  <img
                    src="https://source.unsplash.com/random/1000x1000/?${image}"
                    alt="${image}"
                  />
                  <h2>
                    ${image} <br />
                    <span>${i + Math.floor(Math.random() * 40)} Love</span>
                  </h2>
                </div>`;
});

heroImage.innerHTML = elements;

const enableDarkMode = () => {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", true);
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode");
  localStorage.removeItem("dark-mode");
};

if (dark) {
  document.body.classList.add("dark-mode");
  darkModeToggle.checked = true;
} else {
  document.body.classList.remove("dark-mode");
  darkModeToggle.checked = false;
}

darkModeToggle.addEventListener("click", () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

const doubleClick = () => {
  const thisElement = this.event;

  setTimeout(
    function pertama() {
      thisElement.target.children[0].style.display = "flex";
    },
    10,
    thisElement
  );
  setTimeout(
    function kedua() {
      thisElement.target.children[0].style.display = "none";
    },
    1000,
    thisElement
  );
};

const menuToggle = document.querySelector(".hamburger-btn");

menuToggle.addEventListener("click", () => {
  const isOpened = menuToggle.getAttribute("aria-expanded");
  if (isOpened === "false") {
    menuToggle.setAttribute("aria-expanded", "true");
    li.forEach((item) => {
      if (item.classList.contains("opacity-0")) {
        item.classList.add("mv-8px");
        item.classList.remove("opacity-0");
      }
    });
    header.classList.add("h-240px");
    setTimeout(() => {
      h1.classList.add("h1-absolute");
      menuToggle.classList.add("top-20");
      ul.classList.add("nav-mobile");
    }, 10);
  } else {
    menuToggle.setAttribute("aria-expanded", "false");
    header.classList.remove("h-240px");
    setTimeout(() => {
      h1.classList.remove("h1-absolute");
      menuToggle.classList.remove("top-20");
    }, 200);
    li.forEach((item) => {
      if (!item.classList.contains("opacity-0")) {
        item.classList.add("opacity-0");
        setTimeout(() => {
          item.classList.remove("mv-8px");
        }, 500);
      }
    });
    setTimeout(() => {
      ul.classList.remove("nav-mobile");
    }, 600);
  }
});

window.addEventListener("resize", () => {
  if (window.screen.width > 768) {
    header.classList.remove("h-240px");
    menuToggle.setAttribute("aria-expanded", "false");
    h1.classList.remove("h1-absolute");
    menuToggle.classList.remove("top-20");
    li.forEach((item) => {
      if (!item.classList.contains("opacity-0")) {
        item.classList.add("opacity-0");
        item.classList.remove("mv-8px");
      }
    });
    setTimeout(() => {
      ul.classList.remove("nav-mobile");
    }, 600);
  }
});

const modalCertificate = document.getElementById("modalCertificate");

const showCertificate = () => {
  modalCertificate.style.opacity = 1;
  if (!modalCertificate.classList.contains("z-index.10")) {
    modalCertificate.classList.add("z-index-10");
  }
  document.body.style.overflowY = "hidden";
  if (modalCertificate.classList.contains("pointer-events-none")) {
    modalCertificate.classList.remove("pointer-events-none");
  }
};

const closeCertificate = () => {
  modalCertificate.style.opacity = 0;
  if (modalCertificate.classList.contains("z-index.10")) {
    modalCertificate.classList.remove("z-index-10");
  }
  modalCertificate.classList.add("pointer-events-none");
  document.body.style.overflowY = "auto";
};

window.onclick = function (e) {
  if (e.target == modalCertificate) {
    closeCertificate();
  }
};

var helloAnimation = bodymovin.loadAnimation({
  container: document.getElementById("hello"), // Required
  path: "/assets/json/hello.json", // Required
  renderer: "svg",
  loop: false, // Optional
  autoplay: false, // Optional
  name: "Hello", // Name for future reference. Optional.
});

const hello = () => {
  const helloElement = document.querySelector("#hello");

  helloElement.style.opacity = 1;
  helloElement.style.zIndex = 10;
  document.body.style.overflowY = "hidden";
  if (helloElement.classList.contains("pointer-events-none")) {
    helloElement.classList.remove("pointer-events-none");
  }
  helloAnimation.goToAndPlay(0, true);
  helloAnimation.addEventListener("complete", () => {
    helloElement.style.opacity = 0;
    helloElement.style.zIndex = -1;
    document.body.style.overflowY = "auto";
    if (!helloElement.classList.contains("pointer-events-none")) {
      helloElement.classList.add("pointer-events-none");
    }
  });
};
