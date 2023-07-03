

const myTimeout = setTimeout(didNavigatorRendered, 1000);
function didNavigatorRendered(){
    document.getElementById('NavigatorRender').classList.remove('tw-blur-sm')
}

function renderParentMenuCol() {
    document.getElementById('childMenuCol').classList.add('tw-hidden')
    document.getElementById('parentMenuCol').classList.remove('tw-hidden')
}

function renderSmartMenu() {
    document.getElementById('SmartMegaMenu').classList.remove('tw-hidden')
    document.getElementById('SmartMegaMenu').classList.remove('tw-blur-3xl')
  } 

  function disableSmartMenu() {
    document.getElementById('childMenuCol').classList.add('tw-hidden')
    document.getElementById('SmartMegaMenu').classList.add('tw-hidden')
    document.getElementById('parentMenuCol').classList.remove('tw-hidden')
    
    document.getElementById('BasesColchonesMenu').classList.add('tw-hidden')
    document.getElementById('AlmohadasMenu').classList.add('tw-hidden')
    document.getElementById('SabanasMenu').classList.add('tw-hidden')
    document.getElementById('ColchasEdredonesMenu').classList.add('tw-hidden')
    document.getElementById('ToallasAccesoriosMenu').classList.add('tw-hidden')
    document.getElementById('SillonesMasajesMenu').classList.add('tw-hidden')  
  }



  function BasesColchones() {
    document.getElementById('BasesColchonesMenu').classList.remove('tw-hidden')
    document.getElementById('AlmohadasMenu').classList.add('tw-hidden')
    document.getElementById('SabanasMenu').classList.add('tw-hidden')
    document.getElementById('ColchasEdredonesMenu').classList.add('tw-hidden')
    document.getElementById('ToallasAccesoriosMenu').classList.add('tw-hidden')
    document.getElementById('SillonesMasajesMenu').classList.add('tw-hidden')
    document.getElementById('childMenuCol').classList.remove('tw-hidden')
    document.getElementById('parentMenuCol').classList.add('tw-hidden')

}

function Almohadas() {
    document.getElementById('AlmohadasMenu').classList.remove('tw-hidden')
    document.getElementById('BasesColchonesMenu').classList.add('tw-hidden')
    document.getElementById('SabanasMenu').classList.add('tw-hidden')
    document.getElementById('ColchasEdredonesMenu').classList.add('tw-hidden')
    document.getElementById('ToallasAccesoriosMenu').classList.add('tw-hidden')
    document.getElementById('SillonesMasajesMenu').classList.add('tw-hidden')
    document.getElementById('childMenuCol').classList.remove('tw-hidden')
    document.getElementById('parentMenuCol').classList.add('tw-hidden')
}

function Sabanas() {
    document.getElementById('SabanasMenu').classList.remove('tw-hidden')
    document.getElementById('BasesColchonesMenu').classList.add('tw-hidden')
    document.getElementById('AlmohadasMenu').classList.add('tw-hidden')
    document.getElementById('ColchasEdredonesMenu').classList.add('tw-hidden')
    document.getElementById('ToallasAccesoriosMenu').classList.add('tw-hidden')
    document.getElementById('SillonesMasajesMenu').classList.add('tw-hidden')
    document.getElementById('childMenuCol').classList.remove('tw-hidden')
    document.getElementById('parentMenuCol').classList.add('tw-hidden')
}

function ColchasEdredones() {
    document.getElementById('ColchasEdredonesMenu').classList.remove('tw-hidden')
    document.getElementById('BasesColchonesMenu').classList.add('tw-hidden')
    document.getElementById('AlmohadasMenu').classList.add('tw-hidden')
    document.getElementById('SabanasMenu').classList.add('tw-hidden')
    document.getElementById('ToallasAccesoriosMenu').classList.add('tw-hidden')
    document.getElementById('SillonesMasajesMenu').classList.add('tw-hidden')
    document.getElementById('childMenuCol').classList.remove('tw-hidden')
    document.getElementById('parentMenuCol').classList.add('tw-hidden')
}

function ToallasAccesorios() {
    document.getElementById('ToallasAccesoriosMenu').classList.remove('tw-hidden')
    document.getElementById('BasesColchonesMenu').classList.add('tw-hidden')
    document.getElementById('AlmohadasMenu').classList.add('tw-hidden')
    document.getElementById('SabanasMenu').classList.add('tw-hidden')
    document.getElementById('ColchasEdredonesMenu').classList.add('tw-hidden')
    document.getElementById('SillonesMasajesMenu').classList.add('tw-hidden')
    document.getElementById('childMenuCol').classList.remove('tw-hidden')
    document.getElementById('parentMenuCol').classList.add('tw-hidden')
}

function SillonesdeMasajes() {
    document.getElementById('SillonesMasajesMenu').classList.remove('tw-hidden')
    document.getElementById('BasesColchonesMenu').classList.add('tw-hidden')
    document.getElementById('AlmohadasMenu').classList.add('tw-hidden')
    document.getElementById('SabanasMenu').classList.add('tw-hidden')
    document.getElementById('ColchasEdredonesMenu').classList.add('tw-hidden')
    document.getElementById('ToallasAccesoriosMenu').classList.add('tw-hidden')
    document.getElementById('childMenuCol').classList.remove('tw-hidden')
    document.getElementById('parentMenuCol').classList.add('tw-hidden')
}  