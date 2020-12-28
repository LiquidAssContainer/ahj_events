export default class ImageGallery {
  static insertImage(img, title) {
    const imgBlock = document.createElement('div');
    imgBlock.className = 'image-wrapper';

    imgBlock.innerHTML = `
    <figure>
      ${img.outerHTML}
      <figcaption>${title}</figcaption>
    </figure>
    <button class="delete-image">×</button>
    `;

    const imgGallery = document.getElementsByClassName('image-gallery')[0];
    imgGallery.appendChild(imgBlock);
  }
}
