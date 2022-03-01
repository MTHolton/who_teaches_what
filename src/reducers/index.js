import { combineReducers } from "redux";

import CourseReducer from "./reducers_courses";
import ProfessorReducer from "./reducers_professors";
import SelectProfessorReducer from "./reducer_select_professor";

const rootReducer = combineReducers({
	courses: CourseReducer,
	professors: ProfessorReducer,
	selectedProfessor: SelectProfessorReducer,
});

export default rootReducer;
