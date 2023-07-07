class InfoPrice extends HTMLElement {
    constructor() {
      super();
      this.compare = this.querySelector('[compare]')
      this.price = this.querySelector('[price]')
      this.saved = this.querySelector('[saved]')
      this.available = this.querySelector('[available]')
      this.noavailable = this.querySelector('[noavailable]')
      this.cuponpreventa = this.querySelector('[cuponpreventa]')
      this.button = document.querySelector('[add_button]');
      this.mainQuantity = document.querySelector('[main-quantity][main]')
      this.inputGift = document.querySelector('input-gift')
    }
  
    renderInfo = () => {
      let data = JSON.parse(this.dataset.product)
      let quantity = this.mainQuantity.getValue()
      if (data.available == true) {
        this.available.style.display = 'flex'
        this.noavailable.style.display = 'none'
        this.cuponpreventa.style.display = 'none'
        this.button.removeAttribute('disabled')
        this.button.value = "Agregar a carrito"
        if (data.inventory_policy == 'continue') {
          this.button.value = "Preventa"
          this.available.style.display = 'none'
          this.noavailable.style.display = 'none'
          this.cuponpreventa.style.display = 'flex'
        } 
      }
      else {
        this.available.style.display = 'none'
        this.noavailable.style.display = 'flex'
        this.button.setAttribute('disabled', '')
        this.button.value = "Agotado"
        this.cuponpreventa.style.display = 'none'
      }
      this.price.textContent = Shopify.formatMoney(data.price * quantity)
      if (data.hasOwnProperty('compare_at_price')) {
  
        if (data.compare_at_price !== data.price) {
          this.compare.textContent = Shopify.formatMoney(data.compare_at_price * quantity)
          let saveMoney = Shopify.formatMoney((data.compare_at_price - data.price) * quantity)
          let percent = 100 - (data.price * 100) / data.compare_at_price
          this.saved.innerHTML = `Ahorra ${saveMoney}<strong> (${Math.round(percent)}% de descuento)</strong>`
        } else {
          this.compare.style.display = 'none'
          this.saved.style.opacity = '0'
  
        }
      }
      else {
        this.saved.style.display = 'none!important'
      }
      if (this.inputGift != null) {
        this.inputGift.update()
      }
      this.style.display = 'block'
    }
  
    update = () => {
      this.renderInfo()
    }
  }
  
  customElements.define("info-price", InfoPrice);