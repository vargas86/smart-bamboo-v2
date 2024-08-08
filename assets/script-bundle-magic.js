let cartObj = {
    variantid1: "",
    nombre1: "",
    tamano1: "",
    precio1: "",
    precioDescuento1: "",
    cantidad1: "",
    variantid2: "",
    nombre2: "",
    tamano2: "",
    precio2: "",
    precioDescuento2: "",
    cantidad2: "",
    variantid3: "",
    nombre3: "",
    tamano3: "",
    precio3: "",
    precioDescuento3: "",
    cantidad3: ""
  }
  
  function buyProducts(){

    let articulosCart = 0
     
    var formData = new FormData();
    if(cartObj.cantidad1 != '' && cartObj.cantidad1 > 0) { 
      formData.append("updates["+cartObj.variantid1+"]", cartObj.cantidad1) 
      }
    if(cartObj.cantidad2 != '' && cartObj.cantidad2 > 0) { 
      formData.append("updates["+cartObj.variantid2+"]", cartObj.cantidad2) 
  }
    if(cartObj.cantidad3 != '' && cartObj.cantidad3 > 0) { 
      formData.append("updates["+cartObj.variantid3+"]", cartObj.cantidad3) 
  }
  
    if(cartObj.cantidad1 != '' && cartObj.cantidad1 > 0 && cartObj.cantidad2 != '' && cartObj.cantidad2 > 0){
      fetch('/discount/10BUNDLE')
    }
    
    fetch('/cart/update.js', {
      method: 'POST',
      body: formData
    })
    .then(response => {
  
      jQuery.ajax({
          type: 'GET',
          dataType: 'json',
          url: '/cart.json',
          success: function(cart){
              cartDrawer(cart)
              jQuery('#js-items-count, #js-cart-drawer-count').html('(' + cart.item_count + ')')
              jQuery('.js-items-count').html(cart.item_count)
              jQuery('#cart-icon-bubble--animation').removeClass('tw-hidden')
          }
      
      });
      //console.log( response.json() )
    })
    .catch((error) => {
      //console.error('Error:', error);
    });
  }
  
  
  jQuery('#tablaCarrito').on('click', '#buttonBuyProducts', function() {
      
    if(coupon_requeriments.length === 0){
      window.location.replace("/checkout?discount=DOPPLE5OFF")
    }
    else {
      window.location.replace("/checkout")
    }
  })
  
  
  function moneyToInt(money){
  
    precio = money
    precio = precio.replace(/\,/g,'')
    precio = parseInt(precio)
    if(parseInt(precio)){ return precio }
    
  }
  
  
  function updateResumen(){
  
    let articulos = 0, subtotal = 0, descuento = 0, total = 0, cupon = 0, pagar = 0, precio1 = 0, precioDescuento1 = 0, precio2 = 0, precioDescuento2 = 0, precio3 = 0, precioDescuento3 = 0
    jQuery('.resumencupon').fadeOut(100, function(){  jQuery(".resumencupon").attr("style", "display: none !important") })

  
    if(cartObj.cantidad1 != '' && cartObj.cantidad1 > 0){
      jQuery('.cartnombre1').html(cartObj.nombre1)
      jQuery('.carttamano1').html(cartObj.tamano1)
      jQuery('.cartprecio1').html("$" + cartObj.precio1)
      jQuery('.cartpreciodescuento1').html("$" + cartObj.precioDescuento1)
      jQuery('.cartcantidad1').html(cartObj.cantidad1)
      jQuery('.producto1wrapper').fadeIn(100, function(){  jQuery(".producto1wrapper").attr("style", "display: grid !important") })
      articulos = articulos + ( cartObj.cantidad1 * 1 )
      precio1 = moneyToInt(cartObj.precio1)
      precioDescuento1 = moneyToInt(cartObj.precioDescuento1)
      if(precio1 == '' || precio1 <= 0){ precio1 = precioDescuento1}
      subtotal = subtotal + (precio1 * cartObj.cantidad1)
      descuento = descuento + ((precio1 - precioDescuento1) * cartObj.cantidad1)
      total = total + (precioDescuento1 * cartObj.cantidad1)
      
    }
    else if(cartObj.cantidad1 == 0) { jQuery('.producto1wrapper').fadeOut(100, function(){ })  }
  
    if(cartObj.cantidad2 != '' && cartObj.cantidad2 > 0){
      jQuery('.cartnombre2').html(cartObj.nombre2)
      jQuery('.carttamano2').html(cartObj.tamano2)
      jQuery('.cartprecio2').html("$" + cartObj.precio2)
      jQuery('.cartpreciodescuento2').html("$" + cartObj.precioDescuento2)
      jQuery('.cartcantidad2').html(cartObj.cantidad2)
      jQuery('.producto2wrapper').fadeIn(100, function(){  jQuery(".producto2wrapper").attr("style", "display: grid !important") })
      articulos = articulos + ( cartObj.cantidad2 * 1 )
      precio2 = moneyToInt(cartObj.precio2)
      precioDescuento2 = moneyToInt(cartObj.precioDescuento2)
      if(precio2 == '' || precio2 <= 0){ precio2 = precioDescuento2 }
      subtotal = subtotal + (precio2 * cartObj.cantidad2)
      descuento = descuento + ((precio2 - precioDescuento2) * cartObj.cantidad2)
      total = total + (precioDescuento2 * cartObj.cantidad2)


    }
    else if(cartObj.cantidad2 == 0) { jQuery('.producto2wrapper').fadeOut(100, function(){ }) 
    jQuery('#SmartBaseMyCheck').prop('checked', false);
    jQuery('.reset4328817131556').removeClass('tw-bg-[#292929] tw-text-white') }
  
    if(cartObj.cantidad3 != '' && cartObj.cantidad3 > 0){
      jQuery('.cartnombre3').html(cartObj.nombre3)
      jQuery('.carttamano3').html(cartObj.tamano3)
      jQuery('.cartprecio3').html("$" + cartObj.precio3)
      jQuery('.cartpreciodescuento3').html("$" + cartObj.precioDescuento3)
      jQuery('.cartcantidad3').html(cartObj.cantidad3)
      jQuery('.producto3wrapper').fadeIn(100, function(){  jQuery(".producto3wrapper").attr("style", "display: grid !important") })
      articulos = articulos + ( cartObj.cantidad3 * 1 )
      precio3 = moneyToInt(cartObj.precio3)
      precioDescuento3 = moneyToInt(cartObj.precioDescuento3)
      if(precio3 === undefined || precio3 <= 0){ precio3 = precioDescuento3 }
      subtotal = subtotal + (precio3 * cartObj.cantidad3)
      descuento = descuento + ((precio3 - precioDescuento3) * cartObj.cantidad3)
      total = total + (precioDescuento3 * cartObj.cantidad3)

    }
    else if(cartObj.cantidad3 == 0) { jQuery('.producto3wrapper').fadeOut(100, function(){ }) 
    jQuery('#GarantiaextendidaSmartBaseMyCheck').prop('checked', false);
    jQuery('.reset6932929151012').removeClass('tw-bg-[#292929] tw-text-white') }
  
    if(cartObj.cantidad1 != '' && cartObj.cantidad1 > 0 && cartObj.cantidad2 != '' && cartObj.cantidad2 > 0) { // Cupón 10OFF
      
      cupon = calculatePercent((precioDescuento2 * cartObj.cantidad2), 10)
      pagar = (precioDescuento1 * cartObj.cantidad1) + ((precioDescuento2 * cartObj.cantidad2) - cupon ) + (precioDescuento3 * cartObj.cantidad3)
      jQuery('.resumencupon').fadeIn(100, function(){  jQuery(".resumencupon").attr("style", "display: grid !important") })
    }
   
    jQuery('.cartArticulos').html(articulos)
    jQuery('.cartSubtotal').html('$' + numberWithCommas(subtotal))
    jQuery('.cartDescuento').html('$' + numberWithCommas(descuento))
    jQuery('.cartTotal').html('$' + numberWithCommas(total))
    jQuery('.cartCupon').html('$' + numberWithCommas(cupon))
    jQuery('.cartPagar').html('$' + numberWithCommas(pagar))
    jQuery('.resumen').fadeIn(100, function(){  jQuery(".resumen").attr("style", "display: block !important") })
  
  }



    // Estado de los Botones - Sizes Colchones
    const unselectedSellboxColchonesSmart = document.querySelector(".unselectedSellboxColchonSmart")
    const tagsColchonSmartButtonSizes = Array.from(unselectedSellboxColchonesSmart.querySelectorAll(".tagColchonSmartButtonSizes"))
    tagsColchonSmartButtonSizes.forEach(tagColchonSmartButtonSizes => {
        tagColchonSmartButtonSizes.addEventListener("click", e => updateActiveTagColchonSmartButtonSizes(e))
    })

    function updateActiveTagColchonSmartButtonSizes(e){
        const tagColchonSmartButtonSizes = e.target;
        tagsColchonSmartButtonSizes.forEach(tagColchonSmartButtonSizes => tagColchonSmartButtonSizes.classList.remove("tw-bg-[#292929]"))
        tagsColchonSmartButtonSizes.forEach(tagColchonSmartButtonSizes => tagColchonSmartButtonSizes.classList.remove("tw-text-white"))
        tagsColchonSmartButtonSizes.forEach(tagColchonSmartButtonSizes => tagColchonSmartButtonSizes.classList.add("tw-text-[#292929]"))
        tagColchonSmartButtonSizes.classList.add("tw-bg-[#292929]")
        tagColchonSmartButtonSizes.classList.remove("tw-text-[#292929]")
        tagColchonSmartButtonSizes.classList.add("tw-text-white")
    }

  
  // {% comment %} Show 10% Adiconal y SmartBase Individual {% endcomment %}
  function productSizesVariantButton(variantid, nombre, tamano, precio, preciodescuento) {
      document.getElementById('activeBundleMagic').classList.remove('tw-hidden')
      document.getElementById('textSummaryBundleMagic').classList.remove('tw-hidden')
      cartObj.variantid1 = variantid
      cartObj.nombre1 = nombre
      cartObj.tamano1 = tamano
      cartObj.precio1 = precio
      cartObj.precioDescuento1 = preciodescuento
      cartObj.cantidad1 = 1
      updateResumen()  
      
      // {% comment %} Show medidas de la Smart base {% endcomment %}
      function SmartBaseRenderSellBox(){
      document.getElementById('SmartBaseMiniSellBox').classList.remove('tw-hidden')
      }
  }
  
  // {% comment %} Show medidas de smart base con el check {% endcomment %}
  function SmartBaseShowVariantsMiniSellBox()  {
      // Get the checkbox
      var checkBox = document.getElementById("SmartBaseMyCheck");
    
      // If the checkbox is checked, display the output text
      if (checkBox.checked == true){
          document.getElementById('SmartBaseMiniSellBox').classList.remove('tw-hidden')
  
          let descriptions = document.querySelectorAll('#ProtectordeColchonSummary, #ColchonSmartFirmSummary, #ColchonSmartBalanceSummary, #ColchonSmartHybridSummary, #GarantiaextendidaSmartBaseSummary, #ProtectordeColchonTallas, #ColchonSmartFirmTallas, #ColchonSmartBalanceTallas, #ColchonSmartHybridTallas, #GarantiaextendidaSmartBaseTallas, #dopple-colchon-firm-Faqs, #dopple-colchon-balance-Faqs, #dopple-colchon-hybrid-Faqs, #dopple-protector-de-colchon-Faqs, #dopple-garantia-smart-base-Faqs, #ProtectordeColchonReview, #ColchonSmartFirmReview, #ColchonSmartBalanceReview, #ColchonSmartHybridReview, #GarantiaextendidaSmartBaseReview')
          for (description of descriptions) {
              description.classList.add('tw-hidden')
          }

      } else {
          updateObjCart('cantidad2', 'delete')
          document.getElementById('SmartBaseMiniSellBox').classList.add('tw-hidden')
          document.getElementById('GarantiaextendidaSmartBaseCheckBox').classList.add('tw-hidden')
          document.getElementById('ProtectordeColchonMiniSellBox').classList.add('tw-hidden')
          let descriptions = document.querySelectorAll('#ProtectordeColchonSummary, #SmartBaseSummary, #ColchonSmartFirmSummary, #ColchonSmartBalanceSummary, #ColchonSmartHybridSummary, #GarantiaextendidaSmartBaseSummary, #ProtectordeColchonTallas, #SmartBaseTallas, #ColchonSmartFirmTallas, #ColchonSmartBalanceTallas, #ColchonSmartHybridTallas, #GarantiaextendidaSmartBaseTallas, #dopple-colchon-firm-Faqs, #dopple-colchon-balance-Faqs, #dopple-colchon-hybrid-Faqs, #dopple-protector-de-colchon-Faqs, #dopple-smart-base-Faqs, #dopple-garantia-smart-base-Faqs, #ProtectordeColchonReview, #SmartBaseReview, #ColchonSmartFirmReview, #ColchonSmartBalanceReview, #ColchonSmartHybridReview, #GarantiaextendidaSmartBaseReview')
          for (description of descriptions) {
              description.classList.add('tw-hidden')
          }
      }
    }
  
  // Show Mini Sell Box de garantia extendida 
  function GarantiaextendidaSmartBaseShowVariantsMiniSellBox()  {
      // Get the checkbox
      var checkBox = document.getElementById("GarantiaextendidaSmartBaseMyCheck");
  
      // If the checkbox is checked, display the output text
      if (checkBox.checked == true){
          document.getElementById('GarantiaextendidaSmartBaseMiniSellBox').classList.remove('tw-hidden')
  
          let descriptions = document.querySelectorAll('#ProtectordeColchonSummary, #SmartBaseSummary, #ColchonSmartFirmSummary, #ColchonSmartBalanceSummary, #ColchonSmartHybridSummary, #ProtectordeColchonTallas, #SmartBaseTallas, #ColchonSmartFirmTallas, #ColchonSmartBalanceTallas, #ColchonSmartHybridTallas, #dopple-colchon-firm-Faqs, #dopple-colchon-balance-Faqs, #dopple-colchon-hybrid-Faqs, #dopple-protector-de-colchon-Faqs, #dopple-smart-base-Faqs, #ProtectordeColchonReview, #SmartBaseReview, #ColchonSmartFirmReview, #ColchonSmartBalanceReview, #ColchonSmartHybridReview')
          for (description of descriptions) {
              description.classList.add('tw-hidden')
          }
      } else {
          updateObjCart('cantidad3', 'delete')
          document.getElementById('GarantiaextendidaSmartBaseMiniSellBox').classList.add('tw-hidden')
          let descriptions = document.querySelectorAll('#ProtectordeColchonSummary, #SmartBaseSummary, #ColchonSmartFirmSummary, #ColchonSmartBalanceSummary, #ColchonSmartHybridSummary, #GarantiaextendidaSmartBaseSummary, #ProtectordeColchonTallas, #SmartBaseTallas, #ColchonSmartFirmTallas, #ColchonSmartBalanceTallas, #ColchonSmartHybridTallas, #GarantiaextendidaSmartBaseTallas, #dopple-colchon-firm-Faqs, #dopple-colchon-balance-Faqs, #dopple-colchon-hybrid-Faqs, #dopple-protector-de-colchon-Faqs, #dopple-smart-base-Faqs, #dopple-garantia-smart-base-Faqs, #ProtectordeColchonReview, #SmartBaseReview, #ColchonSmartFirmReview, #ColchonSmartBalanceReview, #ColchonSmartHybridReview, #GarantiaextendidaSmartBaseReview')
          for (description of descriptions) {
              description.classList.add('tw-hidden')
          }
      }   
  } 
  
  
   //Sizes Smart Base
   const unselectedSizesBoxSmartBase = document.querySelector(".unselectedSizesSmartBase")
   const tagsSmartBaseButtonSizes = Array.from(unselectedSizesBoxSmartBase.querySelectorAll(".tagSmartBaseButtonSizes"))
   tagsSmartBaseButtonSizes.forEach(tagSmartBaseButtonSizes => {
       tagSmartBaseButtonSizes.addEventListener("click", e => updateActiveTagSmartBaseButtonSizes(e))
   })
       
   function updateActiveTagSmartBaseButtonSizes(e){
       const tagSmartBaseButtonSizes = e.target;
       tagsSmartBaseButtonSizes.forEach(tagSmartBaseButtonSizes => tagSmartBaseButtonSizes.classList.remove("tw-bg-[#292929]"))
       tagsSmartBaseButtonSizes.forEach(tagSmartBaseButtonSizes => tagSmartBaseButtonSizes.classList.remove("tw-text-white"))
       tagsSmartBaseButtonSizes.forEach(tagSmartBaseButtonSizes => tagSmartBaseButtonSizes.classList.add("tw-text-[#292929]"))
       tagSmartBaseButtonSizes.classList.add("tw-bg-[#292929]")
       tagSmartBaseButtonSizes.classList.remove("tw-text-[#292929]")
       tagSmartBaseButtonSizes.classList.add("tw-text-white")
   }

   //Sizes Garantía
   const unselectedSizesBoxGarantia = document.querySelector(".selectorWarantySizes")
   const tagsGarantiaButtonSizes = Array.from(unselectedSizesBoxGarantia.querySelectorAll(".tagGarantiaButtonSizes"))
   tagsGarantiaButtonSizes.forEach(tagGarantiaButtonSizes => {
       tagGarantiaButtonSizes.addEventListener("click", e => updateActiveTagGarantiaButtonSizes(e))
   })
       
   function updateActiveTagGarantiaButtonSizes(e){
       const tagGarantiaButtonSizes = e.target;
       tagsGarantiaButtonSizes.forEach(tagGarantiaButtonSizes => tagGarantiaButtonSizes.classList.remove("tw-bg-[#292929]"))
       tagsGarantiaButtonSizes.forEach(tagGarantiaButtonSizes => tagGarantiaButtonSizes.classList.remove("tw-text-white"))
       tagsGarantiaButtonSizes.forEach(tagGarantiaButtonSizes => tagGarantiaButtonSizes.classList.add("tw-text-[#292929]"))
       tagGarantiaButtonSizes.classList.add("tw-bg-[#292929]")
       tagGarantiaButtonSizes.classList.remove("tw-text-[#292929]")
       tagGarantiaButtonSizes.classList.add("tw-text-white")
   }
  
  //  {% comment %} Mostrar sólo las garantías de la Smart base por tamaño {% endcomment %}
  // Garantías Smart Base - Individual
  function SmartBaseVariantMiniSellBoxIndividual(variantid2, nombre2, tamano2, precio2, preciodescuento2) {
  
      cartObj.variantid2 = variantid2
      cartObj.nombre2 = nombre2
      cartObj.tamano2 = tamano2
      cartObj.precio2 = precio2
      cartObj.precioDescuento2 = preciodescuento2
      cartObj.cantidad2 = 1
      updateResumen()
  
      let warantyIndividual = document.querySelectorAll('.tagSmartBaseIndividual, .tagSmartBasePriceIndividual');
      for (garantia of warantyIndividual) {
          garantia.classList.remove('tw-hidden')
      }
  
      let warantyMatrimonial = document.querySelectorAll('.tagSmartBaseMatrimonial, .tagSmartBasePriceMatrimonial');
      for (garantia of warantyMatrimonial) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyQueen = document.querySelectorAll('.tagSmartBaseQueen, .tagSmartBasePriceQueen');
      for (garantia of warantyQueen) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyKing = document.querySelectorAll('.tagSmartBaseKing, .tagSmartBasePriceKing');
      for (garantia of warantyKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantySplitKing = document.querySelectorAll('.tagSmartBaseSplitKing, .tagSmartBasePriceSplitKing');
      for (garantia of warantySplitKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let onlyWarrantyIndividual = document.querySelectorAll('.gridWarrantyMatrimonial, .gridWarrantyQueen, .gridWarrantyKing, .gridWarrantySplitKing');
      for (garantia of onlyWarrantyIndividual) {
          garantia.classList.add('tw-hidden')
      }
  
      let showWarrantyIndividual = document.querySelectorAll('.gridWarrantyIndividual');
      for (garantia of showWarrantyIndividual) {
          garantia.classList.remove('tw-hidden')
      }
  
      document.getElementById('alertBuySmartBaseSplitKing').classList.add('tw-hidden')
      document.getElementById('GarantiaextendidaSmartBaseCheckBox').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseIndividual').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseMatrimonial').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseQueen').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseKing').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseSplitKing').classList.add('tw-hidden')
      
  } 
  
  
  // Garantías Smart Base - Matrimonial
  function SmartBaseVariantMiniSellBoxMatrimonial(variantid2, nombre2, tamano2, precio2, preciodescuento2) {
      cartObj.variantid2 = variantid2
      cartObj.nombre2 = nombre2
      cartObj.tamano2 = tamano2
      cartObj.precio2 = precio2
      cartObj.precioDescuento2 = preciodescuento2
      cartObj.cantidad2 = 1
      updateResumen()
      let warantyIndividual = document.querySelectorAll('.tagSmartBaseIndividual, .tagSmartBasePriceIndividual');
      for (garantia of warantyIndividual) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyMatrimonial = document.querySelectorAll('.tagSmartBaseMatrimonial, .tagSmartBasePriceMatrimonial');
      for (garantia of warantyMatrimonial) {
          garantia.classList.remove('tw-hidden')
      }
  
      let warantyQueen = document.querySelectorAll('.tagSmartBaseQueen, .tagSmartBasePriceQueen');
      for (garantia of warantyQueen) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyKing = document.querySelectorAll('.tagSmartBaseKing, .tagSmartBasePriceKing');
      for (garantia of warantyKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantySplitKing = document.querySelectorAll('.tagSmartBaseSplitKing, .tagSmartBasePriceSplitKing');
      for (garantia of warantySplitKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let onlyWarrantyMatrimonial = document.querySelectorAll('.gridWarrantyIndividual, .gridWarrantyQueen, .gridWarrantyKing, .gridWarrantySplitKing');
      for (garantia of onlyWarrantyMatrimonial) {
          garantia.classList.add('tw-hidden')
      }
  
      let showWarrantyMatrimonial = document.querySelectorAll('.gridWarrantyMatrimonial');
      for (garantia of showWarrantyMatrimonial) {
          garantia.classList.remove('tw-hidden')
      }
  
      document.getElementById('alertBuySmartBaseSplitKing').classList.add('tw-hidden')
      document.getElementById('GarantiaextendidaSmartBaseCheckBox').classList.remove('tw-hidden')
      document.getElementById('GarantiaextendidaSmartBaseCheckBox').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseIndividual').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseMatrimonial').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseQueen').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseKing').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseSplitKing').classList.add('tw-hidden')
  } 
  
  
  // Garantías Smart Base - Queen
  function SmartBaseVariantMiniSellBoxQueen(variantid2, nombre2, tamano2, precio2, preciodescuento2) {
      cartObj.variantid2 = variantid2
      cartObj.nombre2 = nombre2
      cartObj.tamano2 = tamano2
      cartObj.precio2 = precio2
      cartObj.precioDescuento2 = preciodescuento2
      cartObj.cantidad2 = 1
      updateResumen()
      let warantyIndividual = document.querySelectorAll('.tagSmartBaseIndividual, .tagSmartBasePriceIndividual');
      for (garantia of warantyIndividual) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyMatrimonial = document.querySelectorAll('.tagSmartBaseMatrimonial, .tagSmartBasePriceMatrimonial');
      for (garantia of warantyMatrimonial) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyQueen = document.querySelectorAll('.tagSmartBaseQueen, .tagSmartBasePriceQueen');
      for (garantia of warantyQueen) {
          garantia.classList.remove('tw-hidden')
      }
  
      let warantyKing = document.querySelectorAll('.tagSmartBaseKing, .tagSmartBasePriceKing');
      for (garantia of warantyKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantySplitKing = document.querySelectorAll('.tagSmartBaseSplitKing, .tagSmartBasePriceSplitKing');
      for (garantia of warantySplitKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let onlyWarrantyQueen = document.querySelectorAll('.gridWarrantyIndividual, .gridWarrantyMatrimonial, .gridWarrantyKing, .gridWarrantySplitKing');
      for (garantia of onlyWarrantyQueen) {
          garantia.classList.add('tw-hidden')
      }
  
      let showWarrantyQueen = document.querySelectorAll('.gridWarrantyQueen');
      for (garantia of showWarrantyQueen) {
          garantia.classList.remove('tw-hidden')
      }
  
      document.getElementById('alertBuySmartBaseSplitKing').classList.add('tw-hidden')
      document.getElementById('GarantiaextendidaSmartBaseCheckBox').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseIndividual').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseMatrimonial').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseQueen').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseKing').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseSplitKing').classList.add('tw-hidden')
  } 
  
  // Garantías Smart Base - King
  function SmartBaseVariantMiniSellBoxKing(variantid2, nombre2, tamano2, precio2, preciodescuento2) {
      cartObj.variantid2 = variantid2
      cartObj.nombre2 = nombre2
      cartObj.tamano2 = tamano2
      cartObj.precio2 = precio2
      cartObj.precioDescuento2 = preciodescuento2
      cartObj.cantidad2 = 1
      updateResumen()
      let warantyIndividual = document.querySelectorAll('.tagSmartBaseIndividual, .tagSmartBasePriceIndividual');
      for (garantia of warantyIndividual) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyMatrimonial = document.querySelectorAll('.tagSmartBaseMatrimonial, .tagSmartBasePriceMatrimonial');
      for (garantia of warantyMatrimonial) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyQueen = document.querySelectorAll('.tagSmartBaseQueen, .tagSmartBasePriceQueen');
      for (garantia of warantyQueen) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyKing = document.querySelectorAll('.tagSmartBaseKing, .tagSmartBasePriceKing');
      for (garantia of warantyKing) {
          garantia.classList.remove('tw-hidden')
      }
  
      let warantySplitKing = document.querySelectorAll('.tagSmartBaseSplitKing, .tagSmartBasePriceSplitKing');
      for (garantia of warantySplitKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let onlyWarrantyKing = document.querySelectorAll('.gridWarrantyIndividual, .gridWarrantyMatrimonial, .gridWarrantyQueen, .gridWarrantySplitKing');
      for (garantia of onlyWarrantyKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let showWarrantyKing = document.querySelectorAll('.gridWarrantyKing');
      for (garantia of showWarrantyKing) {
          garantia.classList.remove('tw-hidden')
      }
  
      document.getElementById('alertBuySmartBaseSplitKing').classList.add('tw-hidden')
      document.getElementById('GarantiaextendidaSmartBaseCheckBox').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseIndividual').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseMatrimonial').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseQueen').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseKing').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseSplitKing').classList.add('tw-hidden')
  } 
  
  // Garantías Smart Base - Split King
  function SmartBaseVariantMiniSellBoxSplitKing(variantid2, nombre2, tamano2, precio2, preciodescuento2) {
      cartObj.variantid2 = variantid2
      cartObj.nombre2 = nombre2
      cartObj.tamano2 = tamano2
      cartObj.precio2 = precio2
      cartObj.precioDescuento2 = preciodescuento2
      cartObj.cantidad2 = 1
      updateResumen()
      let warantyIndividual = document.querySelectorAll('.tagSmartBaseIndividual, .tagSmartBasePriceIndividual');
      for (garantia of warantyIndividual) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyMatrimonial = document.querySelectorAll('.tagSmartBaseMatrimonial, .tagSmartBasePriceMatrimonial');
      for (garantia of warantyMatrimonial) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyQueen = document.querySelectorAll('.tagSmartBaseQueen, .tagSmartBasePriceQueen');
      for (garantia of warantyQueen) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantyKing = document.querySelectorAll('.tagSmartBaseKing, .tagSmartBasePriceKing');
      for (garantia of warantyKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let warantySplitKing = document.querySelectorAll('.tagSmartBaseSplitKing, .tagSmartBasePriceSplitKing');
      for (garantia of warantySplitKing) {
          garantia.classList.remove('tw-hidden')
      }
  
      let onlyWarrantySplitKing = document.querySelectorAll('.gridWarrantyIndividual, .gridWarrantyMatrimonial, .gridWarrantyQueen, .gridWarrantyKing');
      for (garantia of onlyWarrantySplitKing) {
          garantia.classList.add('tw-hidden')
      }
  
      let showWarrantySplitKing = document.querySelectorAll('.gridWarrantySplitKing');
      for (garantia of showWarrantySplitKing) {
          garantia.classList.remove('tw-hidden')
      }
  
      document.getElementById('alertBuySmartBaseSplitKing').classList.remove('tw-hidden')
      document.getElementById('GarantiaextendidaSmartBaseCheckBox').classList.remove('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseIndividual').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseMatrimonial').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseQueen').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseKing').classList.add('tw-hidden')
      document.getElementById('ParrafoGarantiaextendidaSmartBaseSplitKing').classList.remove('tw-hidden')
  } 

    
  
  /* FUNCIONES EXTRAS */
  
      function GarantiaSmartBase(variantid3, nombre3, tamano3, precio3, preciodescuento3) {
          cartObj.variantid3 = variantid3
          cartObj.nombre3 = nombre3
          cartObj.tamano3 = tamano3
          cartObj.precio3 = precio3
          cartObj.precioDescuento3 = preciodescuento3
          cartObj.cantidad3 = 1
          updateResumen()
  
      }
  
      function clearCart(){
          jQuery('#buttonBuyProducts').fadeOut(0);
          document.getElementById('tablaCarrito').innerHTML = "";
      }
         
      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       }

       function numberWithCommasAndPrice(x) {
        let y = x.toString().slice(0, -2)
        return '$' + y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
       }
  
      function updateObjCart(field, action){
          //remove, add, delete
          if(action == 'remove'){
              cartObj[field] = (cartObj[field] - 1)
          }
  
          else if(action == 'add'){
              cartObj[field] = (cartObj[field] + 1)
          }
  
          else if(action == 'delete'){
              cartObj[field] = 0
          }
  
          updateResumen()
      }
   
  
  
  
      function calculatePercent(amount, percent) { //Para calcular porcentaje bien
          const amountDecimals = getNumberOfDecimals(amount);
          const percentDecimals = getNumberOfDecimals(percent);
          const amountAsInteger = Math.round(amount + `e${amountDecimals}`);
          const percentAsInteger = Math.round(percent + `e${percentDecimals}`);
          const precisionCorrection = `e-${amountDecimals + percentDecimals + 2}`;    // add 2 to scale by an additional 100 since the percentage supplied is 100x the actual multiple (e.g. 35.8% is passed as 35.8, but as a proper multiple is 0.358)
      
          return Number((amountAsInteger * percentAsInteger) + precisionCorrection);
      }
      
      function getNumberOfDecimals(number) {
          const decimals = parseFloat(number).toString().split('.')[1];
      
          if (decimals) {
              return decimals.length;
          }
      
          return 0;
      }


function getVariantOriginalPrice(productHandle, variantID){
    let variantPrice
    $.ajax({
      url: window.Shopify.routes.root + 'products/'+ productHandle +'.js',
      async: false,
      dataType: 'json',
      success: function(checkproduct) {
        for(variant in checkproduct.variants) {
          if(checkproduct.variants[variant].id == variantID){ 
            variantPrice = checkproduct.variants[variant].compare_at_price
          } 
        }    
      }
    });
    
    return variantPrice
  }
  


      function cartDrawer(cart){


            response = cart
            console.log('Product added to cart:', response);
            fetch(`${routes.cart_url}?section_id=cart-drawer`)
            .then((response) => response.text())
            .then((responseText) => {
            jQuery('.drawer__inner-empty').fadeOut(0)
            jQuery('.drawer__header').fadeIn(0)
            jQuery('cart-drawer-items').fadeIn(0)
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            const selectors = ['cart-drawer-items', '.drawer__footer'];
            for (const selector of selectors) {
            const targetElement = document.querySelector(selector);
            const sourceElement = html.querySelector(selector);
            if (targetElement && sourceElement) {
            targetElement.replaceWith(sourceElement);
            }
            }
            jQuery('.drawer').addClass('active')
            jQuery('.drawer').removeClass('is-empty')

            })
            .catch((e) => {
            console.error(e);
            });
            
            
         

        console.log('drawing2')
/*
        let content = '<div id="CartDrawer-CartItems" class="shopify-section tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full">'
   
        cart.items.forEach(item => { 
            const ahorroBundleMagic = getVariantOriginalPrice(item.handle, item.variant_id) - item.discounted_price;
            content += `  ` 
       
    });
    content += '</div>'
    jQuery('.cart-items').html(content)
    document.querySelector('.drawer').classList.add('active');
    jQuery('#js-cart-drawer-total').html(numberWithCommasAndPrice(cart.total_price))
    */
    
      }