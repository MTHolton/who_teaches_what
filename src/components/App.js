import React, { Component } from "react";
import CourseList from "../containers/course-list";
// import ProfessorList from "../containers/professor-list";
// import AssignmentList from "../containers/assignment-list";

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<h2>Courses </h2>
						<CourseList />
					</div>
				</div>
			</div>
		);
	}
}
