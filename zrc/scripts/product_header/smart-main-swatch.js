class MainSwatch extends window.HTMLElement {
    constructor () {
      super()
      this.swatchElements = this.querySelectorAll('.swatch')
      this.swatchLabel = document.querySelectorAll('[for="Color"]')
      this.galleryColor = document.querySelector('gallery-color')
    }
  
    connectedCallback () {
      window.addEventListener('load', () => {
        this.addListeners()
      })
    }
  
    addListeners = () => {
      this.swatchElements.forEach(swatch => {
        swatch.addEventListener('click', (event) => {
          this.buttonActiveController(event)
          this.swatchLabel.forEach((label) => {
            label.textContent = swatch.value
          })
          this.galleryColor.update(swatch.value)
        })
      })
      this.swatchLabel[0].textContent = this.swatchElements[0].value
      this.swatchElements[0].click()
    }
  
    buttonActiveController = (event) => {
      this.swatchElements.forEach(swatch => {
        if (swatch === event.target) {
          swatch.classList.add('active')
        } else {
          swatch.classList.remove('active')
        }
      })
    }
  }
  
  window.customElements.define('main-swatch', MainSwatch)