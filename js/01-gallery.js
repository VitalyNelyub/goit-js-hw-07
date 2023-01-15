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
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${original}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>
  `;
    })
    .join("");
}
