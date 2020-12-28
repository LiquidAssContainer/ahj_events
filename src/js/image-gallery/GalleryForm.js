import ImageGallery from './ImageGallery';

export default class GalleryForm {
  constructor() {
    this.submit = null;
  }

  addEventListeners() {
    const form = document.getElementById('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const urlInput = document.getElementById('url-input');
      this.validateImage(urlInput.value);
    });
  }

  validateImage(url) {
    const img = document.createElement('img');
    img.onload = (e) => {
      ImageGallery.insertImage(img);
      console.log(e);
    };

    // img.onerror = (e) => {
    //   console.log(e)
    // }
    try {
      img.src = url;
    } catch (e) {
      console.log(1);
    }
    // console.log(img.width);
  }
}
