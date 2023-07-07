class MainForm extends window.HTMLElement {
    constructor () {
      super()
      this.formElement = this.querySelector('form')
      this.inputVariantElements = this.querySelectorAll('[variant]')
      this.variantsInfo = JSON.parse(this.querySelector('[type="application/json"][variants]').textContent)
      this.infoPriceRef = document.querySelector('info-price')
      this.inputID = this.querySelector('input[name="id"]')
      this.first_available = this.getAttribute('product_available')
      this.quantity = this.querySelector('[name="quantity"]')
      this.variantSelected = null
      this.buttonCart = document.querySelector('input.button-cart')
      this.buttonCheckout = document.querySelector('input.button-checkout')
      this.cartDrawer = document.querySelector('cart-drawer')
    }
  
    connectedCallback () {
      window.addEventListener('load', () => {
        this.addListeners()
        this.initForm()
        this.checkForm()
      })
    }
  
    initForm = () => {
      this.variantSelected = this.variantsInfo[0]
      this.inputID.value = this.variantsInfo[0].id
      this.infoPriceRef.setAttribute('data-product', JSON.stringify(this.variantsInfo[0]))
      this.infoPriceRef.update()
    }
  
    checkForm = () => {
      this.variantsInfo.forEach((variant) => {
        if (variant.id === this.first_available) {
          this.variantSelected = variant
          this.inputID.value = variant.id
          this.infoPriceRef.setAttribute('data-product', JSON.stringify(variant))
          this.infoPriceRef.update()
          variant.options.forEach((option) => {
            this.inputVariantElements.forEach(input => {
              if (input.tagName === 'SELECT') {
                input.querySelectorAll('option').forEach((optionInput, index) => {
                  if (optionInput.value === option) {
                    input.selectedIndex = index
                  }
                })
              }
              if (input.tagName === 'INPUT') {
                if (input.type === 'radio') {
                  if (input.value === option) {
                    input.classList.add('active')
                    input.checked = true
                  }
                }
              }
            })
          })
        }
      })
    }
  
    addListeners = () => {
      this.formElement.addEventListener('submit', (e) => {
        e.preventDefault()
  
        const buttonType = e.submitter
  
        if (buttonType.classList.contains('button-cart')) {
          this.buttonCart.setAttribute('disabled', 'true')
          this.buttonCart.value = 'Agregado'
          this.addToCart('cart')
        } else if (buttonType.classList.contains('button-checkout')) {
          this.buttonCheckout.setAttribute('disabled', 'true')
          this.addToCart('checkout')
        }
      })
  
      this.inputVariantElements.forEach(input => {
        input.addEventListener('change', (e) => {
          const options = []
          this.inputVariantElements.forEach(inputAux => {
            if (inputAux.tagName === 'SELECT') {
              options.push(inputAux.value)
            }
            if (inputAux.tagName === 'INPUT') {
              if (inputAux.type === 'radio') {
                if (inputAux.checked) {
                  options.push(inputAux.value)
                }
              }
            }
          })
          this.variantsInfo.forEach((variant) => {
            if (this.areEqualArray(variant.options, options)) {
              this.variantSelected = variant
              this.inputID.value = variant.id
              this.infoPriceRef.setAttribute('data-product', JSON.stringify(variant))
              this.infoPriceRef.update()
            }
          })
        })
      })
    }
  
    areEqualArray = (first, second) => {
      if (first.length !== second.length) {
        return false
      };
      for (let i = 0; i < first.length; i++) {
        if (!second.includes(first[i])) {
          return false
        };
      };
      return true
    }
  
    updateCount = (count) => {
      const $itemCount = document.querySelector('#js-items-count')
      const $itemCountMobile = document.querySelector('.js-items-count')
  
      $itemCount.textContent = `(${count})`
      $itemCountMobile.textContent = `${count}`
    }
  
    cart = () => {
      fetch('/cart.js')
        .then(res => res.json())
        .then(json => {
          this.updateCount(json.item_count)
          setTimeout(() => {
            this.buttonCart.value = 'Agregar a carrito'
            this.buttonCart.removeAttribute('disabled')
          }, 300)
          this.cartDrawer.setCounterAndTotal(json)
          this.cartDrawer.cartItems()
          this.cartDrawer.openDrawer()
        })
        .catch(err => { console.log(err) })
    }
  
    checkout = () => {
      window.location.href = '/cart'
    }
  
    cartAnimation = () => {
      const counterContainer = document.querySelector('#cart-icon-bubble--animation')
      counterContainer.classList.remove('tw-hidden')
  
      setTimeout(() => {
        counterContainer.classList.add('tw-hidden')
      }, (1000 * 60))
    }
  
    addToCart = (location) => {
      let formData = {}
  
      if (this.variantSelected.inventory_policy === 'continue') {
        formData = {
          items: [
            {
              id: this.variantSelected.id,
              quantity: this.quantity.value,
              properties: {
                Preventa: this.quantity.value
              }
            }
          ]
        }
      } else {
        formData = {
          items: [
            {
              id: this.variantSelected.id,
              quantity: this.quantity.value
            }
          ]
        }
      }
  
      const haveWarranty = document.querySelector('[name="plan"]:checked + label span')
  
      if (haveWarranty) {
        formData.items.push(
          {
            id: haveWarranty.dataset.id,
            quantity: 1
          }
        )
      }
  
      fetch('/cart/add.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(res => res.json())
        .then(data => {
          if (location === 'cart') {
            this.cart()
            this.cartAnimation()
          } else if (location === 'checkout') {
            this.checkout()
          }
        })
        .catch(err => console.log('Error: ', err))
    }
  }
  
  window.customElements.define('main-form', MainForm)