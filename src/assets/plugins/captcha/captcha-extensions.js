var mailer = require("mailer"); 

function rpHash(value) {
	var hash = 538115189;
	value = value.toUpperCase();
	for(var i = 0; i < value.length; i++) {
		hash = ((hash << 5) + hash) + ord(value.substr(i,1));
	}
	return hash;
}

function ord(string) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // +   input by: incidence
  // *     example 1: ord('K');
  // *     returns 1: 75
  // *     example 2: ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
  // *     returns 2: 65536
  var str = string + '',
    code = str.charCodeAt(0);
  if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
    var hi = code;
    if (str.length === 1) {
      return code; // This is just a high surrogate with no following low surrogate, so we return its value;
      // we could also throw an error as it is not a complete character, but someone may want to know
    }
    var low = str.charCodeAt(1);
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
  }
  if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
    return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
    // we could also throw an error as it is not a complete character, but someone may want to know
  }
  return code;
}
exports.validate = function(options, params, errors) {
  if (rpHash(params.chaptchaText) != params.chaptchaTextHash ) {
    	errors.captcha = true;
  } else {
    var message = "";
    for (var k in params){
      if(k != 'formname' && k != 'chaptchaText' && k != 'chaptchaTextHash'){
      	message += '<p><strong>'+k+'</strong>: '+params[k]+'</p>';
      }
    }
    if(params.email){
    	mailer.send( params.email, options.mailsubject2, {html: message}, {from: options.from});
    }
  }
}