(function($){
  //parse XML
  $.parseXML = function(data){
    var xml, tmp;
    try {
      if ( window.DOMParser ) {
        tmp = new DOMParser();
        xml = tmp.parseFromString( data , "text/xml" );
      }
    } catch( e ) {
      xml = undefined;
    }
    return xml;
  }

  //extend grep like jQuery
  $.grep = function(array, callback){
    return [].filter.call(array, callback);
  }

  $.fn.grep = function(callback){
    return [].filter.call(this, callback);
  }

  //trim for string
  $.trim = function(text){
    return text == null ? "" : String.prototype.trim.call(text);
  }

  //determine empty object
  $.isEmptyObject = function( obj ) {
    for ( var name in obj ) {
      return false;
    }
    return true;
  }

})(Zepto);
