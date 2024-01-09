function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.img')]; // using spread operator to convert nodelist to array

    // target modal
    this.modal = getElement(".modal");
    this.modalImg = getElement('.main-img');
    this.imagename = getElement(".image-name");
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.nextBtn = getElement('.next-btn');
    this.prevBtn = getElement('.prev-btn');

    //bind functions
    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.chooseImg = this.chooseImg.bind(this);

    this.container.addEventListener('click', function (e) {

      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this));
  }
  openModal(selectedImage, list) {
    this.setmainImage(selectedImage);
    this.modalImages.innerHTML = list.map(function (image) {
      return `<img
    src="${image.src}"
    title="${image.title}"
    class="${image.dataset.id === selectedImage.dataset.id ? 'modal-img selected' : 'modal-img'}"
    data-id="${image.dataset.id}"
    alt="nature"
  />`;
    }).join('');
    this.modal.classList.add('open');

    this.closeBtn.addEventListener('click', this.closeModal);
    this.nextBtn.addEventListener('click', this.nextImg);
    this.prevBtn.addEventListener('click', this.prevImg);
    this.modalImages.addEventListener('click', this.chooseImg);
  }
  setmainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imagename.textCntent = selectedImage.title;
  }

   closeModal(){
    this.modal.classList.remove("open")
    this.closeBtn.removeEventListener('click', this.closeModal)
    this.nextBtn.removeEntListener('click', this.nextImg)
    this.prevBtn.removeEntListener('click', this.prevImg)
    this.modalImages.removeEventListener('click', this.chooseImg);
  }
  
   nextImg(){
    const selected = this.modalImages.querySelector('.selected')
    const next = selected.nextElementSibling || this.modalImages.firstElementChild
    selected.classList.remove("selected")
    next.classList.add("selected")
    this.setmainImage(next)
  
  }
  
   prevImg(){
    const selected = this.modalImages.querySelector('.selected')
    const prev = selected.previousElementSibling || this.modalImages.lastElementChild
    selected.classList.remove("selected")
    prev.classList.add("selected")
    this.setmainImage(prev)
  }
  
   chooseImg(e){
    if(e.target.classList.contains("modal-img")){
      const selected = this.modalImages.querySelector('.selected')
      selected.classList.remove("selected")
      const choosenImg = e.target
      choosenImg.classList.add("selected")
      this.setmainImage(choosenImg)
    }
  }

}

const nature = new Gallery(getElement('.nature'))
const city = new Gallery(getElement('.city'))
