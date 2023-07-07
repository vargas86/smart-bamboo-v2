class GalleryColor extends HTMLElement {
    constructor() {
      super();
    }
  
    sectionHandler = (value) => {
      let activeElement = this.querySelector('[element].slider-color--active')
      let elementToActive = this.querySelector('[element][color="'+value+'"]')
      activeElement.classList.remove('slider-color--active')
      activeElement.style.position = 'absolute'
      elementToActive.querySelectorAll('[data-src]').forEach((img) => {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.removeAttribute('data-src');
      })
      elementToActive.classList.add('slider-color--active')
      elementToActive.style.position = 'relative'
    }
  
    update = (value) => {
      this.sectionHandler(value)
    }
  }
  
  customElements.define("gallery-color", GalleryColor);