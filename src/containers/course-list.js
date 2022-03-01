import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { selectCourse } from "../actions/index";

class CourseList extends Component {
	renderList() {
		return this.props.courses.map((course, index) => {
			return (
				<li
					onClick={() => this.props.selectCourse(course)}
					key={index}
					className="list-group-item"
				>
					<h5>{course.courseName}</h5>
					<div>Course Number: {course.courseNumber}</div>
					<div>Credit Hours: {course.creditHours}</div>
					<div>Number Of Sections: {course.numberOfSections}</div>
				</li>
			);
		});
	}

	render() {
		return <ul className="list-group">{this.renderList()}</ul>;
	}
}

function mapStateToProps(state) {
	return {
		courses: state.courses,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectCourse: selectCourse }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
