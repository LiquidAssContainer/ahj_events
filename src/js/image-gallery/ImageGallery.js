export default class ImageGallery {
  static insertImage(img) {
    const imgBlock = document.createElement('div');
    imgBlock.className = 'image-wrapper';

    imgBlock.innerHTML = `
    <figure>
    ${img.outerHTML}
    ${'лол кек'}</figure>
    `;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-image';

    imgBlock.appendChild(img);
    imgBlock.appendChild(deleteBtn);

    const imgGallery = document.getElementsByClassName('image-gallery')[0];
    imgGallery.appendChild(imgBlock);
  }
}
