var shift = 'abcdef';
	var fruit = [];
	function caesarCipher(shift) {
	  for(var i = 0; i < 1; i++){
	    var t = shift.slice(shift.length-3, shift.length);
	    var u = shift.slice(shift[0], shift.length-3);
	    fruit = t.concat(u);
	  }
	return fruit;
	}
	var result = caesarCipher(shift);
	console.log(result);