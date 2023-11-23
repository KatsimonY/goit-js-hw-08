import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const myList = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItems =>
        `<li class="gallery__item">
            <a class="gallery__link" href=${galleryItems.original} >
                <img class="gallery__image" src = ${galleryItems.preview} alt = ${galleryItems.description} />
            </a>
        </li>`
  )
  .join('');

myList.insertAdjacentHTML('beforeend', markup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

