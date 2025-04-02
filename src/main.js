import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import { fetchFotoCard } from './js/pixabay-api';
import { createMarkupGalleryCards } from './js/render-functions';

const formElement = document.querySelector('.search-form');
const galleryElement = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function handlerSearch(e) {
  e.preventDefault();

  const inputValue = document.querySelector('.search-input').value;
  if (inputValue === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please enter a query!',
      position: 'topRight',
      backgroundColor: 'orange',
      maxWidth: '300px',
    });

    return;
  }
  loaderElement.classList.add('active');

  return fetchFotoCard(inputValue)
    .then(data => {
      loaderElement.classList.remove('active');
      if (!data.total) {
        galleryElement.innerHTML = '';

        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: 'orange',
          maxWidth: '600px',
        });
        return [];
      }

      galleryElement.innerHTML = createMarkupGalleryCards(data.hits);
      simpleLightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    });
}

formElement.addEventListener('submit', handlerSearch);
