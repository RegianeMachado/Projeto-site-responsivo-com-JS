(function(){
    //armazena referencia do body
    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        //tamanho da mediaquery
        widthEnabled: 1024
    });
    
    var carrouselImgs = new Carrousel({
        container: '.laptop-slide .laptop-slide__show',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    });
     var carrouselQuotes = new Carrousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    });
})();


