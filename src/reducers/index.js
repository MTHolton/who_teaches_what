import { combineReducers } from "redux";

import CourseReducer from "./reducers_courses";
import ProfessorReducer from "./reducers_professors";

const rootReducer = combineReducers({
	courses: CourseReducer,
	professors: ProfessorReducer,
});

export default rootReducer;
