// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  switch(typeof(obj)) {
  	case 'number':
  		if (obj == NaN || obj == Infinity) {
  			return 'null';
  		} else {
  			return obj + '';
  		}
  		break;
  	case 'string':
  		return '"' + obj + '"';
  		break;
  	case 'boolean':
  		return obj + '';
  		break;
  	case 'undefined':
  		return 'null';
  		break;
  	case 'function':
  		return 'null';
  		break;
  	case 'symbol':
  		return 'null';
  		break;
  	case 'date':
  		return obj + '';
  		break;
  	// case null:
  	// 	return 'null';
  	// 	break;
  	case 'object':
  		if (Array.isArray(obj)) {
  			// Array processing here
  			let result = '[';
  			for (var i=0; i < obj.length; i++) {
  				result += stringifyJSON(obj[i]) + ',';	
  			}
  			if (result.charAt(result.length-1) == ',') {				
  				result = result.slice(0, -1);	
  			}
  			return result + ']';
  		} else if (obj == null) {
  			return 'null';
  		} else {
  			// object processing here
  			if (Object.keys(obj).length === 0) {
  				return '{}'
  			} else {
  				let result = '{';
  				for (var key in obj) {
  					if (typeof(obj[key]) != 'function' && typeof(obj[key]) != 'undefined') {
  						result += stringifyJSON(key) + ':';
  						if (typeof(obj[key]) == 'number') {
  							result += obj[key] + ',';
  						} else {
  							result += stringifyJSON(obj[key]) + ',';
  						}
  					}
  				}
  				console.log(result);
  				if (result.length > 2) {
  					result = result.slice(0, -1);
  				}
  				return result + '}';	
  			}
  			
  		}
  }


};
