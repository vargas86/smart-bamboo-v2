class InputGift extends HTMLElement {
    constructor() {
      super();
      this.giftHandlerInfo = JSON.parse(this.querySelector('[type="application/json"][gift_handler]').textContent);
      this.giftProductInfo = JSON.parse(this.querySelector('[type="application/json"][gift_product]').textContent);
      this.imgElement = this.querySelector('[gift_img]');
      this.titleElement = this.querySelector('[gift_title]');
      this.subtitleElement = this.querySelector('[gift_subtitle]');
      this.compareElement = this.querySelector('[gift_compare_price]');
      this.priceElement = this.querySelector('[gift_price]');
      this.mainFormQuantity = document.querySelector('[main-quantity][main] ');
      this.mainFormID = document.querySelector('main-form [name="id"]');
    }
  
    renderComponent = () => {
      let quantity = this.mainFormQuantity.getValue()
      let id = this.mainFormID.value
      let gift = this.giftHandlerInfo.data.filter(element => element.trigger == id)[0];
      let variant = this.giftProductInfo.variants.filter(element => element.id == gift.variant)[0];
      let title = ''
      if(quantity*gift.quantity == 0) {
        title = this.giftHandlerInfo.titles[0].title
      }
      if(quantity*gift.quantity == 1) {
        title = this.giftHandlerInfo.titles[1].title
      }
      if(quantity*gift.quantity >= 2) {
        title = this.giftHandlerInfo.titles[2].title
      }
      this.titleElement.textContent = (quantity*gift.quantity) + " " + title
      this.subtitleElement.innerHTML = gift.subtitle
      this.compareElement.textContent = Shopify.formatMoney(quantity*variant.compare_at_price*gift.quantity)
      this.priceElement.textContent = Shopify.formatMoney(quantity*gift.compare_at_price*gift.quantity)
      this.imgElement.querySelector(`img.active`).classList.remove('active')
      this.imgElement.querySelector(`img[trigger="${gift.trigger}"]`).classList.add('active')
      this.style.display = 'block'
    }
  
    update = () => {
      this.renderComponent()
    }
  }
  
  customElements.define("input-gift", InputGift);