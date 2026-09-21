// Add future photographs here.
// "wide: true" makes a landscape image occupy two square cells.
const photos = [
  {
    src: "images/salton-01.jpg",
    thumb: "thumbs/salton-01.jpg",
    wide: true,
    title: "Desert Gas Station",
    meta: "Salton Sea, California",
    text: ""
  },
  {
    src: "images/salton-02.jpg",
    thumb: "thumbs/salton-02.jpg",
    title: "EON",
    meta: "Salton Sea, California",
    text: ""
  },
  {
    src: "images/salton-03.jpg",
    thumb: "thumbs/salton-03.jpg",
    title: "Fragments",
    meta: "Salton Sea, California",
    text: ""
  },
  {
    src: "images/salton-04.jpg",
    thumb: "thumbs/salton-04.jpg",
    title: "Shoreline Figure",
    meta: "Salton Sea, California",
    text: ""
  },
  {
    src: "images/salton-05.jpg",
    thumb: "thumbs/salton-05.jpg",
    title: "Atlas",
    meta: "Salton Sea, California",
    text: ""
  }
];

const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
const lbImage = document.querySelector("#lightbox-image");
const title = document.querySelector("#photo-title");
const meta = document.querySelector("#photo-meta");
const text = document.querySelector("#photo-text");
const counter = document.querySelector("#counter");
let current = 0;

photos.forEach((photo, i) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `tile${photo.wide ? " wide" : ""}`;
  button.setAttribute("aria-label", `Open photograph ${i + 1}: ${photo.title}`);
  button.innerHTML = `<img src="${photo.thumb}" alt="${photo.title}" loading="lazy">`;
  button.addEventListener("click", () => openPhoto(i));
  gallery.appendChild(button);
});

function openPhoto(i) {
  current = (i + photos.length) % photos.length;
  const photo = photos[current];
  lbImage.src = photo.src;
  lbImage.alt = photo.title;
  title.textContent = photo.title;
  meta.textContent = photo.meta || "";
  text.textContent = photo.text || "";
  counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector(".close").focus();
}

function closePhoto() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelector(".close").addEventListener("click", closePhoto);
document.querySelector(".prev").addEventListener("click", () => openPhoto(current - 1));
document.querySelector(".next").addEventListener("click", () => openPhoto(current + 1));

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closePhoto();
  if (event.key === "ArrowLeft") openPhoto(current - 1);
  if (event.key === "ArrowRight") openPhoto(current + 1);
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closePhoto();
});
