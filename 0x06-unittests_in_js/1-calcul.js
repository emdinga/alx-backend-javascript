const calculateNumber = (type, a, b) => {
	if (type === 'SUM'){
		return Math.round(a) + Math.round(b);
	} else if (type === 'SUBTRACT'){
		return Math.round(a) - Math.round(b);
	} else if (type === 'DIVIDE') {
		const roundedB = MAth.round(b);
		if (roundedB === 0) {
			return 'Error';
		}
		return MAth.round(a) / roundedB;
	} else {
		throw new Error('Invalid type');
	}
};

module.exports = calculateNumber;
