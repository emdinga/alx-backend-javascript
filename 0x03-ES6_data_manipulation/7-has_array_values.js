export default function hasValuesFromArray(s, arry) {
	for (const i of arry) {
		if (!s.has(i)) {
			return false;
		}
	}
	return true;
}
