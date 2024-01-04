export default function createIteratorObject(report) {
	let result = [];
	for (const value of Object.values(report.allEmployees)) {
		result = [...result, ...values];
	}

	return result;
}
