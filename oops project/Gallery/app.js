function getElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        return element;
    }
    throw new Error(
        `plese enter the valid selector or this ${selector} may not present in html file `
    );
}

function Gallery(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.img')];
    // console.log(this.list);
    this.name = getElement('.image-name');
    this.mainImg = getElement('.main-img');
    this.modal = getElement('.modal');
    this.modalImg = getElement('.modal-img');
    this.modalContent = getElement('.modal-content');
    this.prevBtn = getElement('.prev-btn');
    this.nextBtn = getElement('.next-btn');
    this.closeBtn = getElement('.close-btn');
    this.modalImages = getElement('.modal-images');

    //bind function
    // this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.container.addEventListener('click', function (e) {
        if (e.target.classList.contains('img')) {
            this.openModal(e.target, this.list);
        }
    }.bind(this));


}

Gallery.prototype.openModal = function (selectImg, list) {
    this.setImage(selectImg);
    this.modalImages.innerHTML = list.map(function (igm) {
        return ` <img src="${igm.src}"
                        title="${igm.title}" data-id="${igm.dataset.id}" class="${selectImg.dataset.id === igm.dataset.id ? "modal-img selected" : "modal-img"}">`
    }).join('');

    this.modal.classList.add('show');
    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImage);
    this.prevBtn.addEventListener('click', this.prevImage);

}

Gallery.prototype.setImage = function (selectImg) {
    this.mainImg.src = selectImg.src;
    this.name.textContent = selectImg.title;
}

Gallery.prototype.closeModal = function () {
    this.modal.classList.remove('show');
    this.closeBtn.removeEventListener('click', this.closeModal);
    this.nextBtn.removeEventListener('click', this.nextImage);
    this.prevBtn.removeEventListener('click', this.prevImage);
}
Gallery.prototype.nextImage = function () {
    const selectedOne = this.modalImages.querySelector('.selected');
    const next = selectedOne.nextElementSibling || this.modalImg.firstElementSibling;
    selectedOne.classList.remove('selected');
    next.classList.add('selected');
    this.setImage(next);
}
Gallery.prototype.prevImage = function () {
    const selectedOne = this.modalImages.querySelector('.selected');
    const prev = selectedOne.prevElementSibling || this.modalImg.lastElementSibling;
    selectedOne.classList.remove('selected');
    prev.classList.add('selected');
    this.setImage(prev);
}

const nature = new Gallery(getElement('.nature'));
const otherPhoto = new Gallery(getElement('.other-photo'));
