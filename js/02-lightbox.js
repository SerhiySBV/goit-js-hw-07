import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

function createMarckUp() {
  return galleryItems
    .map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
     alt=${description}
    />
  </a>
</li>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML("afterbegin", createMarckUp());

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
