export default function getStudentIdsSum(arry) {
	return arry.reduce((acc, student) => acc + student.id, 0);
}
