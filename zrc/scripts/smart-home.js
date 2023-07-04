
  //LO MAS
    function renderNewProducts() {
        document.getElementById('MostSellerContent').style.display = 'none';
        document.getElementById('ProductBlogsContent').style.display = 'none'; 
        document.getElementById('NewProductsContent').style.display = 'block';
    }
  
    function renderProductBlog() {
        document.getElementById('NewProductsContent').style.display = 'none';
        document.getElementById('MostSellerContent').style.display = 'none';
        document.getElementById('ProductBlogsContent').style.display = 'block';
    }
  
    function renderMostSeller() {
        document.getElementById('NewProductsContent').style.display = 'none';
        document.getElementById('ProductBlogsContent').style.display = 'none';
        document.getElementById('MostSellerContent').style.display = 'block';
    }
  
  // About Home
    function aboutContainerHome() {
      document.getElementById('contentAbout').style.display = 'block';
      document.getElementById('verMenosAbout').style.display = 'block';
      document.getElementById('verMasAbout').style.display = 'none'; 
    }
  
    function dismountAboutContainer() {
      document.getElementById('contentAbout').style.display = 'none';
      document.getElementById('verMenosAbout').style.display = 'none';
      document.getElementById('verMasAbout').style.display = 'block'; 
    }