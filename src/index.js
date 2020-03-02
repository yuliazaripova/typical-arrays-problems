
exports.min = function min (array) {
	array = typeof array !== 'undefined' ?  array : [];
	return array.length == 0 ? 0 :  Math.min(...array);
}

exports.max = function max (array) {
	array = typeof array !== 'undefined' ?  array : [];
	return array.length == 0 ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
	array = typeof array !== 'undefined' ?  array : [];
	return (array.reduce((acc, item) => acc + item,0)) / (array.length == 0 ? 1 : array.length);
}
