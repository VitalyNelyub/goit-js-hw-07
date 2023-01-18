import { galleryItems } from './gallery-items.js';
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


// let gallery = new SimpleLightbox(".gallery a");
// gallery.on("show.simplelightbox", function () {
//   // do something…
// });

// gallery.on("error.simplelightbox", function (e) {
//   console.log(e); // some usefull information
// });

// // with jQuery nearly the same
// let gallery = $(".gallery a").simpleLightbox();
// gallery.on("show.simplelightbox", function () {
//   // do something…
// });



// var gallery1 = $('.gallery').simpleLightbox();

// gallery.next(); // Next Image



