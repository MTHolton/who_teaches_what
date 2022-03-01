import React, { Component } from "react";

import CourseList from "../containers/course-list";
import ProfessorList from "../containers/professors-list";
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
					<div className="col-md-4">
						<h2>Professors</h2>
						<ProfessorList />
					</div>
					<div className="col-md-3">
						<h2>Assignments</h2>
					</div>
				</div>
			</div>
		);
	}
}
