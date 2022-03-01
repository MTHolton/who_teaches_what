export function selectCourse(course) {
	return {
		type: "COURSE_SELECTED",
		payload: course,
	};
}

export function selectProfessor(professor) {
	return {
		type: "PROFESSOR_SELECTED",
		payload: professor,
	};
}
