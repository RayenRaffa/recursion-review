// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  switch(typeof(obj)) {
  	case 'number':
  		return obj;
  		break;
  	case 'string':
  		return obj;
  		break;
  	case 'boolean':
  		return obj;
  		break;
  	case 'undefined':
  		return null;
  		break;
  	case 'function':
  		return null
  		break;
  	case 'symbol':
  		return null;
  		break;
  	case 'date':
  		return obj;
  		break;
  	case 'NaN':
  	case 'null':
  	case 'Infinity':
  		return null;
  		break;
  	case 'object':
  		if (Array.isArray(obj)) {
  			// Array processing here
  		}
  }


};
