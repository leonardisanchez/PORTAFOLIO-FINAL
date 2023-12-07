var Items = function(){
    
    var Images = function(){
        $('.is-background').imgLiquid();
    }
    
    var Thumbs = function(){
        $('.page__item__link').click(function(event){
            event.preventDefault();
            
            TweenMax.to($(this).find('.page__item__filter'), 0.5,{
                delay: 0,
                autoAlpha: 1,
                ease: Expo.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__text'), 0.5,{
                delay: 0,
                autoAlpha: 1,
                ease: Expo.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__thumb'), 3,{
                delay: 0,
                scale: 1.1,
                ease: Power0.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__title h4'), 0.8,{
                delay: 0,
                y: 0,
                ease: Expo.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__title p'), 0.8,{
                delay: 0,
                y: 0,
                ease: Expo.easeInOut
            });
        });
    }
    
    var Hover = function(){
        $('.page__item__link').hover(function(){
            TweenMax.to($(this).find('.page__item__filter'), 0.5,{
                delay: 0,
                autoAlpha: 1,
                ease: Expo.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__text'), 0.5,{
                delay: 0,
                autoAlpha: 1,
                ease: Expo.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__thumb'), 3,{
                delay: 0,
                scale: 1.1,
                ease: Power0.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__title h4'), 0.8,{
                delay: 0,
                y: 0,
                ease: Expo.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__title p'), 0.8,{
                delay: 0,
                y: 0,
                ease: Expo.easeInOut
            });
        }, function(){
            TweenMax.to($(this).find('.page__item__filter'), 0.5,{
                delay: 0,
                autoAlpha: 0,
                ease: Expo.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__text'), 0.5,{
                delay: 0,
                autoAlpha: 0,
                ease: Expo.easeInOut
            });
            
             TweenMax.to($(this).find('.page__item__thumb'), 0.5,{
                delay: 0,
                scale: 1.0,
                ease: Expo.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__title h4'), 0.8,{
                delay: 0,
                y: -800,
                ease: Power4.easeInOut
            });
            
            TweenMax.to($(this).find('.page__item__title p'), 0.8,{
                delay: 0,
                y: 800,
                ease: Power4.easeInOut
            });
        });
    }
    
    var Animation = function(){
        var wow = new WOW({
            boxClass:     'set',
            animateClass: 'animation',
            callback: function(box) {
                TweenMax.to($(box).find('.page__item__thumb'), 0.5,{
                    delay: 0.3,
                    scale: 1.0,
                    ease: Circ.easeInOut
                });
            },
        });
        wow.init();
    }

	return{
		init: function(){
            Images();
            Hover();
            Animation();
            Thumbs();
		}
	};
}();

// Run...
Items.init();