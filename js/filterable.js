/* 
 *   Filterable JQuery plugin version 0.2
 *   Makes the selected input element a filter content on the page for view.
 *   https://github.com/caneruguz/.filterable
 */
 
 (function($) {
    $.fn.filterable = function(options) {

        // Default options
        var settings = $.extend({
            selector: 'p',
            fade 	: false,
            resetText : '&times;',
            highlight : true,
    		highlightColor: '#ffffa6',
            complete: null,
			matchAction : null,
			noMatchAction : null
        }, options);
        
        // Method to switch between fading vs regular show in jquery. 
        // Accepts a) element:  the jquery element b) action: on - for showing; off - for hiding 
		var fade = function(element, action){
			if(action == 'on' ){
				if(settings.fade){
					element.fadeIn();
				} else {
					element.show(); 
				}			
			}
			if(action == 'off'){
				if(settings.fade){
					element.fadeOut();
				} else {
					element.hide(); 
				}				
			}
		}
		$(document).on('click', '.ft-reset', function(){
			var el = $(this);
			$(settings.selector).each(function() {
				fade(el, 'on');
			});
			el.remove();
			$('.filterable').val('').focus(); 
			$( ".ft-highlight" ).each(function(){
				var hEl = $(this);
				hEl.replaceWith( hEl.text() );
			});
		});

		var highlightOn = function(el, text, content){
			// set highlights
			var textBegin, textEnd, original, newOriginal, regex, result, contentCap,			
			contentCap = el.html(); 
			textBegin = contentCap.toLowerCase().indexOf(text); 
			textEnd = textBegin + text.length; 
			original = contentCap.substring(textBegin, textEnd);
			regex = new RegExp('('+original+')(?![^<]*>|[^<>]<\/)',"gi");
			result = contentCap.replace(regex, '<span class="ft-highlight">$1</span>'); 
			el.html(result); 
			$('.ft-highlight').css('background', settings.highlightColor);
		}; 
		var highlightOff = function() {
			$('.ft-highlight').each(function(){
				var el = $(this);
				var content = el.text();
				el.replaceWith(content);
			}); 			
		}

        // the main method that filters content. It's returned so jquery can keep chaining.  
	 	return this.keyup(function() {
			var text, el, content, exists ;
			text = $(this).val().toLowerCase();
			if(settings.highlight){highlightOff();} 
			if (text.length > 0) {
				$(settings.selector).each(function() {
					el = $(this); 
					content = $(this).text().toLowerCase();
					exists = content.indexOf(text);
					if (exists != -1) {
						if ( $.isFunction( settings.matchAction ) ) {
							settings.matchAction.call( this );
						} else {
							fade($(this), 'on');
						}

						if(settings.highlight){
							highlightOn(el, text, content);
						} 
					
					} else {
						if ( $.isFunction( settings.noMatchAction ) ) {
							settings.noMatchAction.call( this );
						} else {
							fade($(this), 'off');
						}
					}
				});
				if($('.ft-reset').length  == 0 ) {
					$(this).after('<button class="ft-reset">'+settings.resetText+'</button>'); 			
				}	

			} else {	
				fade($(settings.selector), 'on'); 				
				if($('.ft-reset').length  >  0 ) {
					$('.ft-reset').remove();  			
				}
			}
			
			// Return a function if defined
		    if ( $.isFunction( settings.complete ) ) {
				 settings.complete.call( this );
			}
		});            
    }

}(jQuery));
