import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryCards = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryCards);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `;
    })
    .join("");
}

gallery.addEventListener("click", expandToFullScreen);


function expandToFullScreen(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" heigth="600">
`); 
  instance.show();
}
