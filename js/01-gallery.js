import { galleryItems } from './gallery-items.js';

// Change code below this line
const instance = basicLightbox.create(`
    <img src="" />
`)

const refs = {
    gallery: document.querySelector('.gallery'),
    modal: instance.element().querySelector('img'),
};

refs.gallery.insertAdjacentHTML('beforeend', createGallery());

function createGallery() {
    return galleryItems
        .map(({ preview, original, description }) => {
       return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
        })
    .join('')
};

refs.gallery.addEventListener('click', openModal);

function openModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const source = e.target.dataset.source
    refs.modal.src = source;
    instance.show()
};

refs.gallery.addEventListener('keydown', escCloseModal);

function escCloseModal(e) {
	if(e.key === "Escape"){
		refs.modal.src = '';
        instance.close()
	}
}