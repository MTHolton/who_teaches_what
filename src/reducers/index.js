import { combineReducers } from "redux";

import CourseReducer from "./reducers_courses";

const rootReducer = combineReducers({
	courses: CourseReducer,
});

export default rootReducer;
