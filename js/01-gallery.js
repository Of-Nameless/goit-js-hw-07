'use strict'
import { galleryItems } from './gallery-items.js';

const instance = basicLightbox.create(
`<img src="" />`
 );

const refs = {
    gallery: document.querySelector('.gallery'),
    modal: instance.element().querySelector('img'),
};

const markup = createGalleryMarkup();
refs.gallery.insertAdjacentHTML('beforeend', markup);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg" onclick="event.preventDefault()">
                <img
                class="gallery__image"
                src='${preview}'
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
    .join('');
};

refs.gallery.addEventListener('click', onOpenModal);
refs.gallery.addEventListener('keydown', onCloseModal);

function onOpenModal(e) { 
 e.preventDefault() 
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  refs.modal.src = e.target.dataset.source;
  instance.show()
};

function onCloseModal() {
window.removeEventListener('keydown', onEscKeyPress);
  refs.modal.src = '';
  instance.close()
};

function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;

    if (isEscKey) {
        onCloseModal();
    }
};  
