(function() {

    function SVGDDMenu( el ) {
        console.log(this);
        this.el = el;
        this.init();
    }

    SVGDDMenu.prototype.init = function() {
        this.shapeEl = this.el.querySelector( 'div.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            open : this.shapeEl.getAttribute( 'data-morph-open' )
        };

        this.isOpen = false;

        this.initEvents();
    };

    SVGDDMenu.prototype.initEvents = function() {
        this.el.addEventListener( 'click', this.toggle.bind(this) );

        // For Demo purposes only
        [].slice.call( this.el.querySelectorAll('a') ).forEach( function(el) {
            el.onclick = function() { return false; }
        } );
    };

    SVGDDMenu.prototype.toggle = function() {
        var self = this;
        console.log(self.el)

        if( this.isOpen ) {
//          self.el.classList.remove( 'menu--closed-background' );
            classie.remove( self.el, 'menu--open' );
            setTimeout(function(){
                classie.remove( self.el, 'menu--closed-background' );
            },300)

        }
        else {
            classie.add( self.el, 'menu--open' );
            classie.add( self.el, 'menu--closed-background' );
        }

        this.pathEl.stop().animate( { 'path' : this.paths.open }, 320, mina.easeinout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 1000, mina.elastic );
        } );

        this.isOpen = !this.isOpen;
    };

    new SVGDDMenu( document.getElementById( 'menu' ) );

})();