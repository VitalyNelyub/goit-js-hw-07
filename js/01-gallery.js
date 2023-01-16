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

  if (event.target.classList.contains("gallery__image")) {
    console.log(event.target);
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
