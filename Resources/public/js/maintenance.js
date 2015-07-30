!function( $ ) {
	$.fn.maintenance = function( method ) {

		var settings;

		var methods = {
			init: function( options)  {

				settings = $.extend( true, {}, this.maintenance.defaults, options );

				return this.each(function() {
					var $this = $( this );

					$this.find( ".datepicker" ).datetimepicker( settings.datetimepicker );
				});
			}
		};

		if ( methods[ method ] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
		}
		else if ( typeof method === 'object' || !method ) {
			return methods.init.apply( this, arguments );
		}
		else {
			$.error( "Method " +  method + " does not exist in jQuery.maintenance." );
		}
	};

	$.fn.maintenance.defaults = {
		datetimepicker: {
			format: "DD.MM.YYYY HH:mm:ss",
		}
	};
} ( window.jQuery );

$( document ).ready(function() {
	$( ".maintenance" ).maintenance();
});
