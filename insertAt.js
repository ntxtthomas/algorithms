/* Given an array, an index location, and a value,.. insert that value at the index location */

function insertAt(arr, a, val){
	for(var i = arr.length; i > a; i--){
		arr[i] = arr[i-1];
	}
		arr[a] = val; 
		return arr;
}
insertAt([4,5,6,7],3,10);