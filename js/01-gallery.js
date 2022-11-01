import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function createMarcUp() {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src= ${preview}
          data-source= ${original}
          alt=${description}
        />
      </a>
    </div>`
    )
    .join("");
}
function onClickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
	<img
          
          src= ${event.target.dataset.source}
          alt= ${event.target.alt}
        />
`,
    {
      onShow: () => {
        galleryEl.addEventListener("keydown", onPressEsc);
      },
      onClose: () => {
        galleryEl.removeEventListener("keydown", onPressEsc);
      },
    }
  );
  instance.show();

  function onPressEsc(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
galleryEl.insertAdjacentHTML("afterbegin", createMarcUp());
galleryEl.addEventListener("click", onClickImg);
