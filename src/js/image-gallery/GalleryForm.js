import ImageGallery from './ImageGallery';

export default class GalleryForm {
  constructor() {
    this.submit = null;
  }

  validateImage(url, title) {
    const img = document.createElement('img');
    img.onload = () => {
      ImageGallery.insertImage(img, title);
      this.clearForm();
    };
    img.onerror = () => {
      this.showError('url');
    };

    img.src = url;
  }

  showError(name) {
    // а вот здесь уже лень делать полноценные попапы...
    switch (name) {
      case 'title':
        console.log('No title!');
        break;
      case 'url':
        console.log('Wrong url!');
    }
  }

  clearForm() {
    const form = document.getElementById('form');
    form.reset();
  }

  addEventListeners() {
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleInput = document.getElementById('title-input');
      const urlInput = document.getElementById('url-input');
      if (!titleInput.value) {
        this.showError('title');
        return;
      }
      this.validateImage(urlInput.value, titleInput.value);
    });

    document.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest('.delete-image')) {
        target.closest('.image-wrapper').remove();
      }
    });
  }
}
