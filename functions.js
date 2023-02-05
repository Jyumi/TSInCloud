// # SIMPLE TOGGLE
// Use this to just toggle the class .active into .navbar
;(function ( $ ){
    $.fn.sidenav = function() {
      
      var sidenav  = this,
          $trigger = $(".js-sidenav");
      
      $trigger.click(toggle);
      
      function toggle() {
        sidenav.toggleClass("active");
      }
    }
  })( jQuery );
  // # INITIALIZING
  $(function() {
    // references here the right class name
    // of your nav
    $(".sidenav").sidenav();
  });
  // ------------------------------------
  
  
  
  // ...
  // just for change sidenav type, ignore
  // don't need
  // ...
  (function() {
    var sidenavType = {
      init: function() {
        $(".js-sidenav-type").change(sidenavType.setType);
      },
      setType: function() {
        var self = $(this),
            type = sidenavType.getType(self);
        
        if (type === "default") {
          $(".sidenav").attr("class", "sidenav");
        }
        else {
          $(".sidenav").attr("class", "sidenav sidenav--" + type);
        }
      },
      getType: function(obj) {
        return obj.val();
      }
    }
    sidenavType.init();
  })();