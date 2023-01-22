import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', galleryMarkup());

function galleryMarkup() {
    return galleryItems
        .map(({ preview, original, description }) => {
           return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
        })
      .join('');
};

new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionDelay: '250', captionType: 'alt', scrollZoomFactor: 1, captionPosition: 'bottom' }); 

console.log(galleryItems);
